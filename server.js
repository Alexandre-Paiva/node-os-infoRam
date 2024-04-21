const http = require("http");
//End de host
const host = 'http://localhost';
//Porta de caesso 
const port = 3000;
// importação da função lógica
const stats = require("./pcRamUsage.js");

    http.createServer((req, res) => {
        var url = req.url;
            if (url === "/stats") {
                res.end(JSON.stringify(stats, null, 2));
            } else {
                res.end('<h1> Seja bem vindo ao sistema de monitoramento tabajara <h1>');
            }
    }).listen(port, ()=> console.log('Server in running'));
    