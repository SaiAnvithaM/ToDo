const express = require('express');
const path = require('path');
const port = 5000;

// database
const db = require('./config/mongoose');
// ToDo Schema
const ToDoSchema = require('./models/contact');

// firing express
const app = express();


// setting up views folder

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views_folder'));
app.use(express.urlencoded());
app.use(express.static('assets'));






app.get('/', function(req, res){


    ToDoSchema.find({}, function(err, description){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title: "ToDo App",
            description_list: description
        });

    })
  
})
app.post('/create-task', function(req, res){
   
    
    ToDoSchema.create({
        content: req.body.content,
        status: req.body.status
        // date: req.body.date
    }, function(err, newDescription){
        if(err){console.log('Error in creating a contact!')
            return;}
            console.log('******', newDescription);
            return res.redirect('back');
    })
  

});

// setting up server
app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Server is running on Port', port);
})



//for deleting a list  

app.get('/delete-contact/', function(req, res){
    console.log(req.query);
    let id = req.query.id

    ToDoSchema.findOneAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }
        return res.redirect('back');
    })


   
});