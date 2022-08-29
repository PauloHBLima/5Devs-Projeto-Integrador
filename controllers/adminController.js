const { Product, Category } = require('../Models');

const adminController = {


    add: async (req, res) => {
        const categorys = await Category.findAll();
        return res.render('admin/addProduct', { categorys });
    },
    
    create: async (req, res) => {
        const { name, description, active, image, price, category_id: categoryId } = req.body;
        await Product.create({
            name,
            description,
            active,
            image,
            price,
            categoryId,
        });
        return res.redirect("/admin/detail");
    },


}

module.exports = adminController;