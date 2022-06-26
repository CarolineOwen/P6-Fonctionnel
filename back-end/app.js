const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb+srv://Carolinadelavega1:vega2022.@cluster1.thg0nym.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie, toptip !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use((req, res, next)=>{
console.log('Requete reçue');
next();
});

app.use((req, res, next)=>{
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({message:'votre requete fonctionne bien bien !'});
    next();
});

app.use((req, res) => {
    console.log('réponse succes');
});

module.exports= app;