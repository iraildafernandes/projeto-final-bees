import Links from "../Links";
import "./styles.css";

import prosp from "../../img/prosp-logo.png";
import bees from "../../img/bees-logo.png";

function Footer(){
    return(
        <footer>
            <div className="area-patrocinios">
                <a href="https://prosper.tech/" target="_blank"> 
                    <img src={prosp} alt="prosp" title="prosp" />
                </a>
                
                <a href="https://mybees.com.br/" target="_blank"> 
                    <img src={bees} alt="bees" title="bees" />
                </a>
            </div>

            <Links to={"/contato"}>
                apoie o nosso projeto
            </Links>
        </footer>
    );
}

export default Footer;