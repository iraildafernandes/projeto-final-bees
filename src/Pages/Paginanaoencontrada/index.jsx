import { Link } from "react-router-dom";
import "./styles.css";
import Links from "../../Components/Links";


function PaginaNaoEncontrada(){
    return(
        <div className="notfound">

            <h1>Página Não Encontrada!</h1>

            <Links to={"/"}>
                Inicio
            </Links>
        </div>
    );
}

export default PaginaNaoEncontrada;