const  mongoose = require("mongoose");
require('mongoose-type-url');
const Schema = mongoose.Schema

const EventSchema = new Schema({
    EID:{
        type:mongoose.Schema.Types.ObjectId,
        default: this._id,
    },
    title:{
        type:String,
        require:true,
        maxlength:25
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:mongoose.SchemaTypes.Url

    },
    video:{
        type:mongoose.SchemaTypes.Url

    },
    rounds:{
        round1:{
            name:{type:String},
            description:{
                type:String
            }
        },
        round2:{
            name:{type:String},
            discription:{
                type:String

            }
           
        }
    }
    
    
},{timestamps:true})
mongoose.models={}
module.exports = mongoose.model('Event', EventSchema)