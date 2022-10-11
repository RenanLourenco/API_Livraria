const http = require('http')
const port = 3000;

const rotas = {
    '/':'Hello World',
    '/livros':'entrei pagina livros',
    '/autores':'entrei na pagina autores',
    '/editoras':'entrei na pagina editoras'
}

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'})
    res.end(rotas[req.url])
})


server.listen(port,()=>{
    console.log("Listen server at the http://localhost:"+ port)
})