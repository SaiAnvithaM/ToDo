# ToDo Project Overview

A simple TODO Application using Node.js as backend:
Here are the files included in the project:
1.index.js: This is the JavaScript file that handles the functionality of the todo list,such as adding task, deleting tasks.
2.views_folder/home.ejs : This is the ejs file is a template for generating dynamic HTML content using JavaScript.
3.assets/css: This is the style sheet used for styling the HTML content.
4.config/mongoose.js : This file is used for the process of interacting with MongoDB by providing middlewares.
5.models/contact.js : This file is for defining the structure and properties of MongoDB.

User have to enter their tasks they need to do according to their schedule. After clicking the ADD TASK button, the task is added into the list which appear in the UI and also details will be stored in the database(Here Robo 3T is used)  along with the id.Id of every task plays major role while deleting the tasks.Tasks get deleted using the unique id's which are generated automatically and that reflects in the UI.
