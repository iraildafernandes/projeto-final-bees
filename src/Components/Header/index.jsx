import { Link } from "react-router-dom";
import "./styles.css";

import logo from "../../img/logo.png";

function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <img src={logo} alt="logo" title="logo"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;