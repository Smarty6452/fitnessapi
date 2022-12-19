const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true,
     },
    
     price: {
        type: Number,
        required:[true, "price must be provied"]
     },
     featured: {
        type: Boolean,
        default: false,
     },
   //   rating: {
   //      type: Number,
   //      required: 4.9,
   //   },
     createdAt: {   
        type: Date,
        default: Date.now(),
     },
     company: {
        type: String,
        enum: {
            values: ["Nike", "Jordan", "addidas", "Puma"],
            message: `{VALUE} is not supported`,
        },
     },
})

module.exports = mongoose.model("Product", productSchema);