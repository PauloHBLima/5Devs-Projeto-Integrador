const { Product, Category } = require('../Models');

const adminController = {


    add: async (req, res) => {
        const categorys = await Category.findAll();
        return res.render('admin/addProduct', { categorys });
    },
    
    create: async (req, res) => {
        const { name, description, active, image, price, category_id } = req.body;
        await Product.create({
            name,
            description,
            active,
            image,
            price,
            categoryId : category_id,
        });
        return res.redirect("/admin/listAdm");
    },

    viewProduct: async (req, res) => {
        const { id } = req.params
        const products = await Product.findByPk(id);
        return res.render('admin/oneProduct', { products });
    },

    editProduct: async (req, res) => {
        const { id } = req.params
        const products = await Product.findByPk(id);
        const categorys = await Category.findAll();
        return res.render('admin/editProduct', { products, categorys });
    },

    update: async (req, res) => {
        const { id } = req.params
        const { name, description, active, image, price, category_id } = req.body;
        await Product.update({
            name,
            description,
            active,
            image,
            price,
            categoryId : category_id,
        }, { 
            where: { id } 
        })
        return res.redirect('/admin/listAdm');
    },

    delete: async (req, res) => {
        const { id } = req.params;
        await Product.delete({ where: { id } });
        return res.redirect('/admin/listAdm');  
    }

    }


module.exports = adminController;