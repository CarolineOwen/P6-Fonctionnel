const express = require('express');
const mongoose = require('mongoose');
const { addAbortSignal } = require('stream');
const app = express();

const stuffRoutes = require('./routes/stuff');

mongoose.connect('mongodb+srv://Carolinadelavega1:vega2022.@cluster1.thg0nym.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie, toptip !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.use(express.json());

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

 app.use('/api/sauces', stuffRoutes);

module.exports= app;