import editoras from '../models/Editora.js'


class EditoraController {
    static listarEditoras = (req,res)=>{
        editoras.find((err,editoras)=>{
            res.status(200).json(editoras)
        })
    }

    static cadastrarEditora = (req,res)=>{
        let editora = new editoras(req.body)

        editora.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} falha ao cadastrar editora`})
            }else{
                res.status(201).send(editora.toJSON())
            }
        })
    }
    
    static atualizarEditora = (req,res)=>{
        const id = req.params.id

        editoras.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({message:"Editora atualizada com sucesso"})
            }else{
                res.status(400).send({message:`erro ao atualizar editora ${err.message}`})
            }
        })
    }

    

}