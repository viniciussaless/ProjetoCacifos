const express = require('express');
const app = express();
const connection = require('./models/db'); // Arquivo de conexão MySQL
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos do diretório node_modules
app.use('/node_modules', express.static('node_modules'));

const { render } = require('ejs');
var idUtilizador;

app.get('/', (req, res) => {
  model = {
    
  }
  res.render('login', model);
})

app.get('/index', (req, res) => {
  if(idUtilizador == null){
      res.redirect("/");
   }
   else{
      res.render("index");
   }
});

app.get('/cacifos', (req, res) => {
  if(idUtilizador == null){
      res.redirect("/");
   }
   else{
      res.render("cacifos");
   }
});

app.get('/permissoes', (req, res) => {
  if(idUtilizador == null){
      res.redirect("/");
   }
   else{
      res.render("permissoes");
   }
});

app.get('/utilizadores', (req, res) => {
  if(idUtilizador == null){
      res.redirect("/");
   }
   else{
      res.render("utilizadores");
   }
});

app.get('/estatisticas', (req, res) => {
  if(idUtilizador == null){
      res.redirect("/");
   }
   else{
      res.render("estatisticas");
   }
});

app.post('/login', (req, res) => { //rota para pegar o email e password do login
  const email = req.body.email;
  const password = req.body.password;
  // console.log(email);
  // console.log(password);
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
      }
      else {
        model = {
          message : "Dados Inválidos!"
        }
        
        res.render('login', model);
      }
    }
  });
});


app.use(express.static('public')); //definição da pasta com arquivos estaticos

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
