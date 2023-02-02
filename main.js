const express=require ("express")
const app=express()
const mongoose=require("mongoose")
app.use(express.json());
mongoose.connect("mongodb+srv://lahiruroot:lahiruroot@cluster0.ysjypt2.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true
},(err)=>{if(!err){
    console.log("Sucessfully Connected")
}else{
    console.log("Connection failed")
}

const sch={
    name:String,
    email:String,
    id:Number,

}

const monmodel=mongoose.model("NEWCOL",sch);

app.post("/post",async(req,res)=>{
    console.log("post funtion");

    const data=new monmodel({
        name:req.body.name,
        email:req.body.email,
        id:req.body.id
    });
     
    const val=await data.save();
    res.json(val);
})

app.listen(3000,()=>{console.log("on port 3000")})


})