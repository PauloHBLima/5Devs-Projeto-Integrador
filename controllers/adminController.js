const { Product, Category } = require('../Models');

const adminController = {


    add: async (req, res) => {
        const categorys = await Category.findAll();
        return res.render('admin/addProduct', { categorys });
    },
    
    create: async (req, res) => {
        const { name, description, active, image, price, category_id } = req.body;
        console.log(req.body)
        await Product.create({
            name,
            description,
            active,
            image,
            price,
            categoryId : category_id,
        });
        return res.render("admin/detail");
    },


}

module.exports = adminController;