const express = require('express');
const app = express();
const connection = require('./models/db'); // Arquivo de conexão MySQL
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { render } = require('ejs');
var idUtilizador;

app.get('/', (req, res) => {
  res.redirect('/login');
});

// Rota GET para renderizar a página de login
app.get('/login', (req, res) => {
  res.render('login'); // Renderiza o arquivo de template 'login.ejs'
});

app.get('/index', (req, res) => {
  if(idUtilizador == null){
    res.redirect("/");
  }
  else{
    res.render("index");
  }
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
        const dbidUtilizador = results[0].IdUtilizador;
        idUtilizador = dbidUtilizador;
        console.log(idUtilizador);
        const dbEmail = results[0].email_utilizador;
        const dbPassword = results[0].password_utilizadores;
        res.redirect("/index"); // Corrigido o redirecionamento
      } else {
         
        res.status(401).send("Email ou senha incorretos");
      }
    }
  });
});


app.use(express.static('public')); //definição da pasta com arquivos estaticos

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
