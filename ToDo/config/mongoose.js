
const mongoose = require('mongoose');
const mongoDb=require('mongodb');
mongoose.connect('mongodb://127.0.0.1/27017',{useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false });  //contactList_dB is stored in database Collections
const db=mongoose.connection;

db.on('error',console.error.bind(console,"error have been occured"));
db.once('open',function(){
    console.log('connected to database');
})