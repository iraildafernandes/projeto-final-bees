import "./styles.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function MulheresBrilham() {
  return (
    <>
      <Header />
      <main className="principal-mulheres">
        <h1>Mulheres que brilham</h1>

        <div className="blocos-videos">
          <div className="bloco">
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/q7ncvX68fLA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>Ada, a mãe da programação.</p>
            </div>

            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/TWuGOLHer0o"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>Conheça Girls Who Code CEO Dr. Tarika Barrett.</p>
            </div>

            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/3Y8a3ko_sV0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>Katherine Johnson, a cientista negra que ajudou a Apolo 11 a chegar à Lua.
              </p>
            </div>
          </div>

          <div className="bloco">
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/Kd-TvkHj_aA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>
                Bell hooks (1952-2021) foi uma pensadora, professora, escritora e ativista negra norte-americana de grande importância, principalmente para o movimento antirracista e feminista.
              </p>
            </div>

            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/zfI8A9ZDrNI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>Mulheres e meninas negras em Tech!</p>
            </div>

            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/YBnNvETQBJ8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>
                PretaLab, uma organização que busca incentivar a participação de mulheres negras na área de tecnologia por meio de cursos e mentorias.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MulheresBrilham;
