import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";


function Links(props){
    return(
        <Link to={props.to} className="links">
            {props.children}
        </Link>
    );
}

export default Links;
