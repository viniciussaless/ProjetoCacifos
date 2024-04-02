const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const connection = require('./models/db'); // Arquivo de conexão MySQL
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Servir arquivos estáticos do diretório node_modules
app.use('/node_modules', express.static('node_modules'));



const { render } = require('ejs');
var idUtilizador;

app.get('/', (req, res) => {
    model = {

    }
    res.render('login', model);
})

app.get('/dados-grafico', (req, res) => {
    if (idUtilizador == null) {
        res.redirect("/");
    } else {
        connection.query('SELECT Energia FROM cacifos', (error, results, fields) => {
            if (error) {
                console.error('Erro ao consultar o banco de dados:', error);
                res.status(500).send('Erro ao consultar o banco de dados');
                return;
            }
            // Mapeia os resultados para obter apenas os valores de Energia
            const valoresEnergia = results.map(result => result.Energia);
            res.json(valoresEnergia);
            // console.log(valoresEnergia);
        });
    }
});


app.get('/cacifos', (req, res) => {
    if (idUtilizador == null) {
        res.redirect("/");
    } else {
        res.render("cacifos");
    }

});

app.get('/index', (req, res) => {
    if (idUtilizador == null) {
        res.redirect("/");
    } else {
        res.render("index");
    }

});

app.get('/permissoes', (req, res) => {
    if (idUtilizador == null) {
        res.redirect("/");
    } else {
        res.render("permissoes");
    }

});

app.get('/utilizadores', (req, res) => {
    if (idUtilizador == null) {
        res.redirect("/");
    } else {
        res.render("utilizadores");
    }

});

app.get('/estatisticas', (req, res) => {
    if (idUtilizador == null) {
        res.redirect("/");
    } else {
        res.render("estatisticas");
    }

});

//login website
app.post('/login', (req, res) => { //rota para pegar o email e password do login
    const email = req.body.email;
    const password = req.body.password;
    connection.query("SELECT IdUtilizador, email_utilizador, nome_utilizador,password_utilizadores FROM utilizadores WHERE email_utilizador = ? AND password_utilizadores = ?", [email, password], function(err, results, fields) {
        if (err) {
            console.log(err);
            res.status(500).send("Erro na consulta");
        } else {
            if (results.length > 0) {
                const dbidUtilizador = results[0].IdUtilizador;
                idUtilizador = dbidUtilizador;
                console.log(idUtilizador);
                const dbEmail = results[0].email_utilizador;
                const dbPassword = results[0].password_utilizadores;
                res.redirect("/index"); // Corrigido o redirecionamento
            } else {
                model = {
                    message: "Dados Inválidos!"
                }

                res.render('login', model);
            }
        }
    });
});

//login AppInventor

app.post('/loginapp', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    connection.query('SELECT email_utilizador, password_utilizadores FROM utilizadores WHERE email_utilizador = ? AND password_utilizadores = ?', [email, password], (err, row) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server error');
            return;
        }

        if (row) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid email or password');
        }
    });
});


app.use(express.static('public')); //definição da pasta com arquivos estaticos

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});