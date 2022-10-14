import express from 'express';
import { encodeXText } from 'nodemailer/lib/shared';
import livros from './livrosRoutes.js';

const routes = (app) => {
    app.route('/').get((req,res)=>{
        res.status(200).send({message:"Hello World"})
    })


    app.use(
        express.json(),
        livros
    )
}

export default routes