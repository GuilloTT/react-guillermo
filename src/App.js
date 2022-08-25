import './App.css';

function App() {

let imagen = "kqXTUDbN";
let titulo = "Cuarto de Libra con Queso"
let calorias = "771 kcal"
let descripcion = "La belleza radica en la simpleza de las cosas. Una hamburguesa que no se anda con vueltas. La perfecta combinación entre la mejor carne 100% vacuna y dos quesos que lo rodean, junto con el toque del kétchup, mostaza y la cebolla fresca."

  return (
    <div className='container'>

      <div className='row'>
      </div>
        <div class= "col-md-4 offset-md-2">
          <img src={imagen} alt={titulo} className="img-fluid" />
        </div>

        <div clas="col-md-4"></div>

        <h1>{titulo} </h1>
        <p>{calorias}</p>
        <p>{descripcion}</p>



    
    </div>
    
  );
}

export default App;
