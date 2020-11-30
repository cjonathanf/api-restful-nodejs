const app = require('./config/express')();
const port = app.get('port');

// RODANDO NOSSA APLICACAO NA PORTA SETADA
app.listen(port, () => {

    console.log(`Servidor rodando  na porta ${port}`)
})