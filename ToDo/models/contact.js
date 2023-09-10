const mongoose = require('mongoose');

// creating Schema
const Schema = new mongoose.Schema({
    content:{
        type:"String",
        required:true
    },
    status:{
        type:"String",
        required:true
    },
   
});

// exporting our Schema here contacts name will be displayed in database
const Contact = mongoose.model('contacts',Schema);

module.exports=Contact;