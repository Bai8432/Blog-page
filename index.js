import express from "express";
import bodyParser from "body-parser";
const port =3000;
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

var blogList=new Map();

app.post("/submit",(req,res)=>{
    blogList.set(req.body.title,req.body.blog);
    res.render("write1.ejs");
})

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/read",(req,res)=>{
    res.render("read1.ejs",{
        blogtitle:blogList.keys()
    });
})

app.get("/readRandom",(req,res)=>{
    var keys=blogList.keys();
    var arr=[];
    for(var key of keys){
        arr.push(key);
    }
    var rand=Math.floor(Math.random()*arr.length);
    if(arr.length>0){
        res.render("read1.ejs",{
            blogtitle:blogList.keys(),
            randTitle:arr[rand],
            randBlog:blogList.get(arr[rand])
        })
    }
    else{
        res.render("read1.ejs",{
            blogtitle:blogList.keys()
        });
    }
})

app.post("/readblogs",(req,res)=>{
    const key=req.body.blogname;
    res.send({
        blog:blogList.get(key),
        heading:key
    });
})

app.get("/write",(req,res)=>{
    res.render("write1.ejs");
})


app.listen(port,()=>{
    console.log("listening at port 3000")
})

