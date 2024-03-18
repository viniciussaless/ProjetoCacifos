const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
const { render } = require('ejs');
const { redirect } = require('express/lib/response');


app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render("login");
});

app.get('/index', (req, res) => {
    res.render("index");
});


app.use(express.static('public')); //definição da pasta com arquivos estaticos

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
