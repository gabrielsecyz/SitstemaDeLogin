const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = 3000;
let path = require('path');
const app = express();

let login = 'admin';
let senha = '123456';

app.use(session({secret:'gggdwgqrt237y3h7y32g23tygy'}));
app.use(bodyParser.urlencoded({extended: true}));


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/', (req,res) => {


    if(req.body.password == senha && req.body.login == login) {
        //login efetuado com sucesso!

        req.session.login = login;

        res.render('logado')

    } else {
        res.render('index');
    }
});

app.get('/', (req,res) => {

    if(req.session.login) {
        res.render('logado')
    } else {

    res.render('index');
    }
});

app.listen(port, () => {
    console.log('Servidor rodando !');
});