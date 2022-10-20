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

    static listarEditoraPorId = (req,res)=>{
        const id = req.params.id

        editoras.findById(id,(err)=>{
            if(err){
                res.status(400).send({message:`Editora nao encontrada ${err.message}`})
            }else{
                res.status(400).json(editoras)
            }
        })
    }
    
    static excluirEditora = (req,res)=>{
        const id = req.params.id

        editoras.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({message: `editora excluida com sucesso`})
            } else {
                res.status(400).send({message:`Erro ao encontrar editora ${err.message}`})
            }
        })
    }

}

export default EditoraController