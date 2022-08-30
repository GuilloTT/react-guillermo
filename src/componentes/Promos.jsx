import React from "react";
import Promos1 from "./images/consejos-viajar-vacaciones-1036520.jpg";
import Promos2 from "./images/Mejores-Agencias-de-Viajes-en-Buenos-Aires-Argentina.jpg";

const Promos = () => {
return (
    <div className="container p-5">
        <h1 className="titulo">CONOCE NUEVOS LUGARES</h1>
        <div className="row align-items-start">
            <div className="col"></div>
            <img src={Promos1} alt="Promo1" className="img-fluid rounded" />
        </div>
        <h2 className="subtitulo">LUGARES QUE NUNCA CONOCISTE</h2>
        <div className="row">
            <div className="col"></div>
            <img src={Promos2} alt="Promo2" className="img-fluid rounded" />
        </div>
    </div>
)

}


export default  Promos;

