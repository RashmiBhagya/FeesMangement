const mongoose = require('mongoose');
const { stringify } = require('querystring');

const postSchema = new mongoose.Schema({

        IDNum :{
            type : String,
            required:true
        },
        Name:{
            type:String,
            required:true
        },
        course:{
            type : String ,
            required:true
        },

        CourseFee:{
            type : String ,
            required:true
        },

        Date:{
            type : String ,
            required:true
        }



});

module.exports = mongoose.model('Posts',postSchema);