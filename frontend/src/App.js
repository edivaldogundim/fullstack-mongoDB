import React from 'react';
import './Components/Estilo.css';
import Navegacao from './Components/Navegacao';
import Contato from './Components/Contato';
import Loja from './Components/Loja';
import Produtos from './Components/Produtos';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Swuit, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/"><Navegacao /></Route>
        <Route exact path="/Navegacao"><Navegacao /></Route>
        <Route exact path="/Contato"><Contato /></Route>
        <Route exact path="/Loja"><Loja /></Route>
        <Route exact path="/Produtos"><Produtos /></Route>
        <Footer />

      </div>
    </Router>
  )
};

export default App;