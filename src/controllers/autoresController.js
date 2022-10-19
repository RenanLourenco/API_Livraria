import autores from "../models/Autor.js"


class AutorController {

    static listarAutores = (req,res)=>{
        autores.find((err,autores)=>{
            res.status(200).json(autores)
        })
    }

    static cadastrarAutor = (req,res)=>{
        let autor = new autores(req.body)

        autor.save((err)=>{

            if(err){
                res.status(500).send({message: `${err.message} falha ao cadastrar o Autor`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req,res)=>{
        const id = req.params.id
        
        autores.findByIdAndUpdate(id, {$set: req.body},(err) => {
            if(!err){
                res.status(200).send({message:"Autor atualizado com sucesso"})
            }else{
                res.status(500).send({message:"ERRO AO ATUALIZAR" + err.message})
            }
        })

    }

    


    static listarAutorPorId = (req,res)=>{
        const id = req.params.id

        autores.findById(id,(err,livros)=>{
            if(err){
                res.status(400).send({message:`${err} id nao encontrado`})
            }else{
                res.status(200).send(livros)
            }


        })
    }

    static excluirAutor = (req,res)=>{
        const id = req.params.id

        autores.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({message:"autor foi excluido com sucesso"})
            } else {
                res.status(400).send({message:`${err.message}`})
            }
        })
    }





}


export default AutorController