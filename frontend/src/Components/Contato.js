
import React from 'react';
import Email from './Email.png';
import Whats from './Whats.png';
import {useState, useEffect} from 'react'; 
import Logo from './Logo.png';

   function Navegacao(){
      const [mensagens, setMensagens ] = useState([]);
      const [render, setRender] = useState(false);
      const [msg, setMsg] = useState(false);
      const [name, setName] = useState(' ');
      const [message, setMessage] = useState(' ');
    
      React.useEffect(async () => {
         const url = "http://localhost:4000/comentarios";
         const response = await fetch(url);
         setMensagens(await response.json());
     }, [render]);
 
      async function envioMensagem(event) {
            event.preventDefault();            
                      
            const url = "http://localhost:4000/comentarios";
            let form = {
               nome: name,
               mensagem: message,
               }
            fetch(url, {
               method: "POST",
               headers: { 'Content-Type': 'application/json'},

               body: JSON.stringify(form)
             }).then((response) => response.json()).then((dados) => {
               setMsg(dados);
         
            
            });
            setRender(!render);
            setTimeout(() =>{
              setMsg(true)
            }, 3000);

      
            }


      return (
         <div>
            <header className="navbar">
            <div class="container-fluid bg-danger">
         <nav class="nav nav-pills nav-fill ">
         <a class="nav-item nav-link" href="Navegacao"><img width="100px" src={Logo} alt="Full Stack Eletro"/></a>
         <a class="nav-item nav-link text-white" href="Produtos">Produtos</a>
         <a class="nav-item nav-link text-white" href="Loja">Nossas lojas</a>
         <a class="nav-item nav-link text-white" href="Contato">Fale conosco</a>
         </nav>
   </div>

            </header>

            <h1 className="text-danger">Contato</h1><br />

            <div onSubmit={envioMensagem} className="container">
               <div class="row ml-5">
                  <img src={Email} alt="Email" width="50px"/>
                  <div className="col">ed@fullstackeletro.com</div>

                  <img src={Whats} alt="Whats" width="50px"/>
                  <div className="col">(11)99999-9999</div>
               </div><br ></br>

               <div className="col">
                  <div className="input-group">
                     <form>
                        <label for="nome">Nome</label>
                        <input type="text" className="form-control w-400 px-2" name="nome" placeholder="Seu nome..."  value={name} onChange={event=>setName(event.target.value)}></input><br />
                        <label for="Mensagem">Mensagem</label>
                        <input type="Mensagem" className="form-control w-400 px-2" name="mensagem" placeholder="Seu email..." value={message} onChange={event=>setMessage(event.target.value)}></input><br />
                        <button type="submit" class="btn btn-danger  m-1">Enviar</button>
                     </form>
                  </div>
               </div>
            </div>
          
        {    
            msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
              Mensagem recebida, e enviada para apuração!
            </div>
          }

          <div className="col-lg-8 mx-auto">
            <div>
                  <div >
                    
                      {mensagens.map((item) =>{
                          return(
              
                              <div key={item.idcoment}>
                                  <div>
                                      Data: {item.data}
                                  </div>
                                  <div>
                                      Nome: {item.nome}
                                  </div>
                                  <div>
                                     {item.nome} Digitou: {item.mensagem}
                                  </div>
                                  <br/><br/>
                              </div>
                          )            
                      })}
                  </div>
              </div>
            </div>
         </div>
      );
 }


export default Navegacao;
