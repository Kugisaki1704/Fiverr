import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConverationSchema = new Schema({
  id:{
    type:String ,
    required : true,
    unique:true,
  },
sellerId:{
    type:String ,
    required : true,
  },
  buyerId:{
    type:String ,
    required : true,
  },
  readySeller:{
    type:Boolean ,
    required : true,
  },
  readyBySeller:{
    type:Boolean ,
    required : true,
  },
  lastMessage:{
    type:String ,
    required : false,
  },
  
},{
    timestamps:true
});

export default mongoose.model("Converation",ConverationSchema);