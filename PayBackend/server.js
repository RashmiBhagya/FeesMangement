const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

//import routes
const postRoutes = require('./routes/posts');

//app midleware
app.use(bodyParser.json());
app.use(cors());

//route midleware
app.use(postRoutes);

const PORT = 8000;
const DBURL = 'mongodb+srv://RB:RB123@paymentapp.kfqsg.mongodb.net/StudentsFees?retryWrites=true&w=majority';

mongoose.connect(DBURL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT,() =>{

    console.log('App is running on ${PORT}');
});