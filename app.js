const express = require('express');
const app = express();
const models = require("./models");
const port = process.env.PORT || 3000;

models.users.create({
    name:'2ndname',
    email:'2nd email',
    bio:'writing other bio'

}).then(function(newUser){
    console.log("new user", newUser);
})

models.users.findOne().then(function (users) {

    console.log("found other user",users);
  });








app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
