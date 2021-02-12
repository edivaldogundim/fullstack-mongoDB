const express = require('express')
const app = express()
const mongoose =require('mongoose')
const cors =require ('cors')
const bodyParser = require('body-parser')

app.use(express.json())

 require("./src/db/models/Comentarios")
 const Comentarios = mongoose.model('comentarios')

 require('./src/db/models/Produto');
const Produto = mongoose.model("produto");

require("./src/db/connect")

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/produto', async(req, res) => {
    const produtoResponse = await Produto.find();
    const produtoJson = await produtoResponse;

    return res.json(produtoJson);
});
app.get('/comentarios',async(req,res)=>{
   const comentariosResponse = await Comentarios.find()
   const comentariosJson = await comentariosResponse

   return res.json(comentariosJson)

});
app.post('/comentarios',async(req,res)=>{
    const novoComentarios = new Comentario({
        nome:req.body.nome,
        mensagem:req.body.mensagem
    });
    novoComentarios.save()
    res.json({menssage:"Mensagem recebida!",comentarios:novoComentarios})
})

app.listen(3334)