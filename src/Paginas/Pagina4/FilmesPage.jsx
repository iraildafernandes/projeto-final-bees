import React, { useEffect, useState } from "react";
import axios from "axios";
import './FilmesPage.css';

function FilmesPage() {
    const [filme, setFilme] = useState(null)
    useEffect(()=> {
        axios.get(`https://api-equipe-6.onrender.com/itens`)
            .then(response => {
                console.log(response.data)
                setFilme(response.data)
                console.log(filme)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    if (!filme) {
        return(
        <h2>CARREGANDO...</h2>
        )
    }

    return(

        //HEADER
        <div> 
            <h1>Filmes Inspiradores</h1>
            <div className="default">
                <div className="imagem">
                    <img src={filme.data[0].capa}  alt="" width={300} />
                </div>
                <div className="texts">
                    <h2>{filme.data[0].titulo}</h2>
                    <span>
                    {filme.data[0].sinopse}
                    </span>
                </div>
            </div>

            <div className="default">
                <div className="imagem">
                    <img src={filme.data[1].capa}  alt="" width={300} />
                </div>
                <div className="texts">
                    <h2>{filme.data[1].titulo}</h2>
                    <span>
                    {filme.data[1].sinopse}
                    </span>
                </div>
            </div>

            <div className="default">
                <div className="imagem">
                    <img src={filme.data[2].capa}  alt="" width={300} />
                </div>
                <div className="texts">
                    <h2>{filme.data[2].titulo}</h2>
                    <span>
                    {filme.data[2].sinopse}
                    </span>
                </div>
            </div>

            <div className="default">
                <div className="imagem">
                    <img src={filme.data[3].capa}  alt="" width={300} />
                </div>
                <div className="texts">
                    <h2>{filme.data[3].titulo}</h2>
                    <span>
                    {filme.data[3].sinopse}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FilmesPage;

//FOOTER