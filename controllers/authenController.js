const { User } = require('../Models');
const bcrypt = require("bcryptjs");

const authenController = {


    login: (req, res) => {
        res.render('home/login')

    },

    loginStore: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email }, raw: true});

            if (!user || !bcrypt.compareSync(password, user.password)) {
                return res.render("home/login", { error: "Credenciais incorretas" })
            }
            
            Object.assign(req.session, {
                user: {
                    id: user.id,
                    name: user.name,
                }
            })
        
            return res.redirect("/home")

    } catch(error) {
        return res.render("home/login", { error: "Sistema Indisponível" })
    }
},

    register: (req, res) => {
        res.render('home/register');
    },


registerStore: async (req, res) => {
    try {
        const { email, name, password } = req.body;

        const verifyUser = await User.findOne({ where: { email } });

        if (verifyUser) {
            return res.render("home/register", { error: "Não foi possível realizar o cadastro" });
        }

        const hash = bcrypt.hashSync(password, 10);

        const user = await User.create({
            email,
            name,
            password: hash
        })

        console.log(user);
        return res.redirect("/home");
    } catch (error) {
        console.log(error);
        return res.render("home/register", { error: "Sistema Indisponível" })
    }

},
}

module.exports = authenController;