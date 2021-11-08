const path = require('path');

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const graphqlHttp = require('express-graphql');

const graphqlSchema = require('graphql/schema');
const graphqlResolver = require('graphql/resolvers');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  '/graphgl', 
  graphqlHttp({
  schema: graphqlSchema,
  rootValue: graphqlResolver
}));

app.use(errorController.get404);


let port = process.env.PORT
if (port == null || port == ''){
    port = 8080
} 


mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    app.listen(port, () => {
      console.log(
        `Server is running on port ${port}`
      )
    })
  })
  .catch(err => console.log(err))
// 1-27-20 1.00:59 ? 