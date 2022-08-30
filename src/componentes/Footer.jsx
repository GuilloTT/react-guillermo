import React from "react";
import facebook from "./images/SM-RRSS-04.png";
import instagram from "./images/SM-RRSS-03.png";
import twitter from "./images/SM-RRSS-01.png";

const Footer = () => {

return (
    <div className=" row fondo_azul">
    <div className="container text-white p-3">

        <hr />
        <div className="row ">
            <p>Todos los derechos reservados por @</p>
            <div className="col-md-11 text-end">
                <img src={facebook} width="40" alt="facebook" />
                <img src={instagram} width="40" alt="instagram" />
                <img src={twitter} width="40" alt="twitter" />

            </div>
        </div>


    </div>
    </div>
)

}


export default  Footer;

