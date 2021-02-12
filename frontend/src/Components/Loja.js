import React from 'react';
import Logo from './Logo.png';

class Loja extends React.Component{
   render(){
return(
  
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


<h1 className="text-danger">Nossas Lojas</h1>

<table className="table bg-light">
        <thead>
            <tr>
                <th>Rio de Janeiro</th>
                <th>São Paulo</th>
                <th>Santa Catarina</th>
            </tr>
            <tr>
                <th>Avenida Presidente Vargas, 5000</th>
                <th>Avenida Paulista, 985</th>
                <th>Rua Major &Aacute;vila, 370</th>
            </tr>
            <tr>
                <th>10 &ordm; andar</th>
                <th>3 &ordm; andar</th>
                <th>Vila Mariana</th>
            </tr>
            <tr>
            <th>Centro</th>
            <th>Jardins</th>
            <th>(47) 5555-5555</th>
            </tr>
            <tr>
                <th>(21) 3333-3333</th>
                <th>(21) 3333-3333</th>
                <th></th>
            </tr>
        </thead>
</table>
</header>
</div>

)
}  
}

export default Loja;