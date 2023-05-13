import Links from "../Links";
import "./styles.css";

import prosp from "../../img/prosp-logo.png";
import bees from "../../img/bees-logo.png";

function Footer(){
    return(
        <footer>
            <div className="area-patrocinios">
                <img src={prosp} alt="prosp" title="prosp" />
                <img src={bees} alt="bees" title="bees" />
            </div>

            <Links to={"/contato"}>
                apoie o nosso projeto
            </Links>
        </footer>
    );
}

export default Footer;