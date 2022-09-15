const express = require("express");
require("./configure");
const app = express();
const Products = require("./products");
app.use(express.json());



app.post("/create", async (req, resp) => {
    let data = new Products(req.body);
    let result = await data.save();
    console.log(result)
    resp.send(result);
});

app.get("/alldata", async (req, resp) => {
    let data = await Products.find();
    resp.send(data);
})

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await Products.deleteOne(req.params);
    resp.send(data)
});

app.put("/update/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Products.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    resp.send(data)
})


app.get("/search/:key",async(req,resp)=>{
    console.log(req.params.key);
    let data = await Products.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}},
                // {price:{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);
})

app.listen(5000);