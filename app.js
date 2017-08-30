const express = require('express');
const app = express();
const models = require("./models");
const port = process.env.PORT || 3000;

models.users.findOne().then(function (users) {
    console.log(users);
  });








app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
