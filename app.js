const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use((req, res) => {

    res.json({ message: 'Votre requête a bien été reçue !' });

});

module.exports = app;