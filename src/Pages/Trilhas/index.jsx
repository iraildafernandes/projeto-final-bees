import React from "react";
import './styles.css';

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import Aline from "../../img/FTAline.jpg";
import Andressa from "../../img/ftAndressa.jpg";
import Ira from "../../img/FtIra.jpg";
import Linda from "../../img/FTLindad.jpg";
import Naty from "../../img/FTNaty.jpg";
import {BsLinkedin} from 'react-icons/bs';

function Trilhas() {

    return (
        <>
        <Header />
        <div class="trilhas">
            <div>
                <img className="Aline" src={Aline} alt="" />
                <h3>Aline Messias Koudou</h3>
                <a href="https://www.linkedin.com/in/aline-gon%C3%A7alo-messias-koudou-295510160/"> <BsLinkedin/></a>
                <p> Mulher preta de pele clara, 31 anos. Formada em Gestão de Recursos Humanos, Membro do Comitê de Diversidade. "Quando se nasce podre, ser estudioso é a maior rebeldia contra o sistema." </p>
            </div>
            
            <div>
                <img className="Andressa" src={Andressa} alt="" />
                <h3>Andressa Silva</h3>
                <a href="https://www.linkedin.com/mwlite/in/andressa-silva-4b55a4186/"><BsLinkedin/></a>
                <p> Estudante de ADS desde 2022, participante da trilha de React do BEES. 
Acredito na importância da educação e vi na tecnologia uma oportunidade de aprender coisas novas e me desenvolver profissionalmente. </p>
            </div>
           
            <div>
                <img className="Ira" src={Ira} alt="" />
                <h3>Irailda Fernandes</h3>
                <a href="https://www.linkedin.com/in/aline-gon%C3%A7alo-messias-koudou-295510160/"><BsLinkedin/></a>
                <p>Graduada em Administração de Empresas e cursando Análise e Desenvolvimento de Sistemas. 
Apaixonada por tecnologia e experiência do usuário, gosto de pensar com empatia e entender a relação entre tecnologia, negócios e pessoas. </p>
            </div>
            
            <div>
                <img className="Linda" src={Linda} alt="" />
                <h3>Linda Oliveira</h3>
                <a href="https://www.linkedin.com/in/lindaoliveira/"><BsLinkedin/></a>
                <p>Estudante de Sistemas de Informação, 25 anos.
Apaixonada por tecnologia e inovações. </p>
            </div>
            
            <div>
                <img className="Naty" src={Naty} alt="" />
                <h3>Nathalia Heloiza Santos</h3>
                <a href="https://www.linkedin.com/in/nathalia-heloiza-a04315b7/"><BsLinkedin/></a>
                <p>Estudante de Analise e Desenvolvimento de Sistema, tenho 29 anos.
Almejando realizar a transição de carreira, para esse mundo incrível da tecnologia. </p>
            </div>

        </div>

        <Footer />
        </>

    );
};

export default Trilhas;