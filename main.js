const express=require ("express")
const app=express()
const mongoose=require("mongoose")
app.use(express.json());
mongoose.connect("mongodb+srv://algoartfeed:Emo0hXjZjCHKa3K9@cluster0.usjjcof.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true
},(err)=>{if(!err){
    console.log("Sucessfully Connected")
}else{
    console.log("Connection failed")
}

const sch={
    name:String, 
}

const monmodel=mongoose.model("NEWCOL",sch);

app.post("/post",async(req,res)=>{
    console.log("post funtion");

    const data=new monmodel({
        name:req.body.name,
    });
     
    const val=await data.save();
    res.json(val);
})

app.listen(3000,()=>{console.log("on port 3000")})
})
