const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const dotEnv = require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));


app.get('/movies/:str', (req,res) => {
  const url = `http://www.omdbapi.com/?s=${req.params.str}&apikey=${process.env.OMDB_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      res.send(response.data); })
    .catch(err => console.log(err));
});

app.get('/movie/:title', (req, res) => {
  const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${req.params.title}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      res.send(response.data); })
    .catch(err => console.log(err));
});
module.exports = app;
