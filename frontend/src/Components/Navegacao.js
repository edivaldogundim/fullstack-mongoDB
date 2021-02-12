import React from 'react';
import Logo from './Logo.png';

 class Navegacao extends React.Component {
   render() {
      return (

         <header className="navbar">

   <div class="container-fluid bg-danger">
      <nav class="nav nav-pills nav-fill ">
         <a class="nav-item nav-link" href="Navegacao"><img width="100px" src={Logo} alt="Full Stack Eletro"/></a>
         <a class="nav-item nav-link text-white" href="Produtos">Produtos</a>
         <a class="nav-item nav-link text-white" href="Loja">Nossas lojas</a>
         <a class="nav-item nav-link text-white" href="Contato">Fale conosco</a>
      </nav>
   </div>

            <div className="main">
               <h2>Sejam bem vindos!</h2>
               <p>Aqui em nossa loja <b>progamador tem desconto...</b></p>
            </div>

         </header>

      )
   }
}

export default Navegacao;