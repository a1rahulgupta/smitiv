const productRepository = require('./repository')
exports.createProduct = async (req, res) => {
    console.log(req.body)
    try {
        let payload = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }
        console.log(payload)
        let product = await productRepository.createProduct({
            ...payload
        });
        res.status(200).json({
            status: true,
            data: product,
        })
    } catch (err) {
        console.log("==",err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}
exports.getProducts = async (req, res) => {
    try {
        let filter = {}
        if(req.body.name){
            filter.name = req.body.name
        }
        if(req.body.price){
            filter.price = req.body.price
        }
        if(req.body.description){
            filter.description = req.body.description
        }
        let products = await productRepository.products(filter);
        res.status(200).json({
            status: true,
            data: products,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getProductById = async (req, res) => {
    try {
        let id = req.params.id
        let productDetails = await productRepository.productById(id);
        res.status(200).json({
            status: true,
            data: productDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}
exports.removeProduct = async (req, res) => {
    try {
        let id = req.params.id
        let productDetails = await productRepository.removeProduct(id)
        res.status(200).json({
            status: true,
            data: productDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}