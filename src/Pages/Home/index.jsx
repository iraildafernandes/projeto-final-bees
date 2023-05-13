import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Links from "../../Components/Links";
import "./styles.css";

import quadro from "../../img/lovelace-ada.png";
import Footer from "../../Components/Footer";

function Home(){
    return(
        <>
            <Header />

            <main>
                <div className="area-principal">
                    <div className="conteudo-principal">
                        <h1>Fortalecendo a presença feminina na área da tecnologia.</h1>
                        <Links to={"/trilhas"}>
                            aprenda programar
                        </Links>
                    </div>

                    <div className="imagem-principal">
                        <img src={quadro} alt="" title="" />
                    </div>
                </div>
            </main>

            <section className="area-cards-opcoes">
                <div className="cards-opcoes">
                    <Link to={"/trilhas"}>
                        <img src={quadro} alt="teste" title="teste" />
                    </Link>

                    <p>Trilhas Techs</p>
                </div>

                <div className="cards-opcoes">
                    <Link to={"/mulheresquebrilham"}>
                        <img src={quadro} alt="teste" title="teste" />
                    </Link>

                    <p>Mulheres que brilham</p>
                </div>
                
                <div className="cards-opcoes">
                    <Link to={"/filmes"}>
                        <img src={quadro} alt="teste" title="teste" />
                    </Link>

                    <p>Se inspire</p>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;