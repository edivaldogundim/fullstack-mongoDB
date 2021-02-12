import React from 'react';
import imagem3 from './pagamento.png';

class Footer extends React.Component{
   render(){
return(
  
   <div className="jumbotron">
   <div className="Footer">
      <footer>
         <p><b>Formas de pagamento:</b></p>
        <div className="imgcartao"> <img src={imagem3} alt="pagamento" width="100px"/></div>
         <p>&copy;Recode Pro</p>
       </footer>
    </div>
    </div>
   )
 }
};
export default Footer;