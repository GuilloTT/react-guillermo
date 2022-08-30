import React from "react";
import logo from "./images/7.png";

const Header = () => {

return (
    <div className="container">
        <ul className="nav d-flex align-items-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#"><img src={logo} width = "70"  alt="avion" /></a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#">Vuelos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#">Paquetes</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#">Alojamientos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#">Contacto</a>
  </li>
</ul>
    </div>
)

}


export default  Header;

