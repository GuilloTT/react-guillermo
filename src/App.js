import './App.css';
import "core-js/actual";
import Header from './componentes/Header';
import Destacado from './componentes/Destacado';
import Promos from './componentes/Promos';
import Footer from './componentes/Footer';

function App() {




  return (
    
    <div className= "container-fluid fondo_naranja">      
    <Header/>
    <hr/>
    <Destacado/>
    <hr/>
    <Promos/>
    <hr/>
    <Footer/>
    </div>
    
  );
}

export default App;
