const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({

    name:String,
    price:String,
    description:String,
    rating:String,
    images:[
        {
            image:String
        }
    ],
    catergory:String,
    Seller:String,
    stock:String,
    numofReviews:String,
    ctreateAt:Date
})

const productModel=mongoose.model('product',productSchema);
module.exports=productModel