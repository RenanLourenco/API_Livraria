import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/Livro.js';
import routes from './routes/index.js';




db.on("error",console.log.bind(console,'Erro de conexão'))
db.once("open", ()=>{
    console.log('conexao com o banco foi um sucesso')
})




const app = express();
app.use(express.json())

routes(app);
// const livros = [
//     {id:1, "titulo":"Senhor dos Aneis"},
//     {id:2, "titulo":"Hobbit"}
// ]




export default app