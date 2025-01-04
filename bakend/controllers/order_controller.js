const orderModel=require('../models/orderModel');

// Cretae order - /api/v1/order
exports.createOrder=async(req,res,next)=>{
    // console.log(req.body,'DATA')

    const cartItems=req.body;
    const amount=Number(cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)).toFixed(2);
    const status='Pending'

    // console.log(amount,'AMOUNT')
    const order=await orderModel.create ({cartItems,amount,status})
    
    // Updating product stock
    cartItems.forEach(async () => {
        const product =await productModel.findBuId(item.product._id)
        product.stock =product.stock - item.qty;
        await product.save();
    });
    
    res.json(
        {
            success:true,
            order
        }
    )
}