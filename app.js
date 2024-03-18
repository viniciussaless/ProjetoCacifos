const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
const { render } = require('ejs');
const connection = require('./models/db'); // Arquivo de conexão MySQL
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('login');
});


app.post('/login', (req, res) => { //rota para pegar o email e password do login
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    connection.query("SELECT IdUtilizador, email_utilizador, password_utilizadores FROM utilizadores WHERE email_utilizador = ? AND password_utilizadores = ?", [email, password], function (err, results, fields) {
      if (err) {
        console.log(err);
        res.status(500).send("Erro na consulta");
      } else {
        if(results.length > 0) {
            const dbEmail = results[0].email_utilizador;
            const dbPassword = results[0].password_utilizadores;
            res.redirect("/index"); // Corrigido o redirecionamento
        } else {
           
            res.status(401).send("Email ou senha incorretos");
        }
    }
    });
});

app.get('/index', (req, res) => {
    res.render("index");
});


app.use(express.static('public')); //definição da pasta com arquivos estaticos

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
