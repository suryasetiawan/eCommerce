var express = require('express');
var router = express.Router();
var Product = require('../models/product');

//READ
router.get('/', (req, res) => {
    Product.find().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({
            error: true,
            message: `something went wrong : ${err.message}`
        })
    })
})

//ADD
router.post('/', (req, res) => {
    let data = new Product({
        id: Date.now(),
        title: req.body.title,
        rate: req.body.rate,
        description: req.body.description,
        price: req.body.price,
        brand: req.body.brand,
        detailProduct: req.body.detailProduct
    })
    data.save().then(item => {
        res.json(item);
    }).catch(err => {
        res.json({
            error: true,
            message:`something went wrong`
        })
    })
})

// DELETE
router.delete('/:id', (req,res)=> {
    let id = req.params.id;
    Product.findOneAndDelete({id:id}).then(item=>{
        if(item){
            res.json({
                status: "SUCCESS",
                data: item
            })
        }else{
            res.json({
                error: true,
                message: `deleting data has been failed id : ${id} not found`
            })
        }
    }).catch(err=>{
        res.json({
            error: true,
            message: err.message
        })
    })
})
module.exports = router;