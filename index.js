const express = require('express')
const app = express();
const mongoose = require('mongoose');
const PORT = 8080;
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Testing API...Completed");
});


//mongoDB Connection
mongoose.connect("mongodb+srv://2k19cse020:xm2NJ7d9Whc52mDj@backenddbapi.9s19jxg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDBAPI").then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
        console.log(`Port is listening on ${PORT}`);
    });
})
.catch(()=>{
    console.log("Not Connected to DB");
})
