const express = require('express');
const app = express();

const rotas = require('./src/app/routes/routes');;

app.set('view engine', 'ejs')
app.set('views', 'src/app/views')
app.set('view options', { layout:'layout.ejs' })

app.use(express.static('public')); 

rotas(app);

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});