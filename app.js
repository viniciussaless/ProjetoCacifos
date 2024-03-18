const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/login', (req, res) => {
    res.send('Olá, mundo!');
});


app.use(express.static('public')); //definição da pasta com arquivos estaticos

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
