import express from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';
import editoras from './editorasRoutes.js';

const routes = (app) => {
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo:"hello world"})
    })

    app.use(
        express.json(),
        livros,
        autores,
        editoras
    )


}

export default routes