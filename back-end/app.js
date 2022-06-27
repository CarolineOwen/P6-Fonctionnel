const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const { addAbortSignal } = require('stream');


const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://Carolinadelavega1:vega2022.@cluster1.thg0nym.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie, toptip !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  const app = express();

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


 app.use(bodyParser.json()); 
 app.use('/api/sauces', stuffRoutes);
app.use('/api/auth', userRoutes);
module.exports= app;