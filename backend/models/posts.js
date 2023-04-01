const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    author:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    summary:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('Post',postSchema)