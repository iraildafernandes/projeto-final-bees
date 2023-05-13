import { useState } from "react";
import "./styles.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <div className="container">
       
        <h2>
          Buscamos promover a transformação social atráves da educação.
          Contribuímos com a alfabetização digital por meio de capitações
          realizadas para nossos alunos e aproximando parceiros interessados em
          nossas causas, oferenendo oportunidades.
        </h2>

        <form className="form" onSubmit={() => {}}>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contato;
