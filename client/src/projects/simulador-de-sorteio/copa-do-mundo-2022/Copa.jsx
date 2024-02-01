import React, { useEffect } from "react";
import styles from "./Copa.module.css";
import Head from "react-helmet";

export default function Copa() {
  async function imports() {
    try {
      await import("./app");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    imports();
  }, []);

  return (
    <>
      <Head>
        <title>Sorteador da Copa</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/pt/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
        />
      </Head>

      <h1 id="topo">Simulador de Sorteio</h1>
      <div class={`container ${styles.body}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
          alt="copa do mundo 2022"
          class="img-fluid d-inline-block"
          style="max-height: 40px"
        />
        <h2 class="d-inline-block">Copa do Mundo Qatar 2022</h2>
        <h3>Potes</h3>
        <div
          id="potes"
          class="row justify-content-center justify-content-md-between"
        >
          <ul
            id="pote-1"
            class="pote justify-content-center text-lg-center col-8 col-sm-6 col-md-4 col-lg-3"
          >
            <p>
              <b>Pote 1</b>
            </p>
            <li id="a1A" class="asia">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/qatar.png"
                alt="Qatar"
                class={styles.escudos}
              />
              <span>
                Qatar<b class="ml-1 d-block d-md-inline-block">(Grupo A)</b>
              </span>
            </li>
            <li id="a1B" class="america-do-sul">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/brasil.png"
                alt="Brasil"
                class={styles.escudos}
              />
              <span>Brasil</span>
            </li>
            <li id="a1C" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/bélgica.jpg"
                alt="Bélgica"
                class={styles.escudos}
              />
              <span>Bélgica</span>
            </li>
            <li id="a1D" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/frança.png"
                alt="França"
                class={styles.escudos}
              />
              <span>França</span>
            </li>
            <li id="a1E" class="america-do-sul">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/argentina.png"
                alt="Argentina"
                class={styles.escudos}
              />
              <span>Argentina</span>
            </li>
            <li id="a1F" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/inglaterra.png"
                alt="Inglaterra"
                class={styles.escudos}
              />
              <span>Inglaterra</span>
            </li>
            <li id="a1G" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/espanha.png"
                alt="Espanha"
                class={styles.escudos}
              />
              <span>Espanha</span>
            </li>
            <li id="a1H" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/portugal.png"
                alt="Portugal"
                class={styles.escudos}
              />
              <span>Portugal</span>
            </li>
          </ul>

          <ul
            id="pote-2"
            class="pote justify-content-center text-lg-center col-8 col-sm-6 col-md-4 col-lg-3"
          >
            <p>
              <b>Pote 2</b>
            </p>
            <li id="b2A" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/holanda.png"
                alt="Holanda"
                class={styles.escudos}
              />
              <span>Holanda</span>
            </li>
            <li id="b2B" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/alemanha.png"
                alt="Alemanha"
                class={styles.escudos}
              />
              <span>Alemanha</span>
            </li>
            <li id="b2C" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/dinamarca.png"
                alt="Dinamarca"
                class={styles.escudos}
              />
              <span>Dinamarca</span>
            </li>
            <li id="b2D" class="america-do-norte">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/méxico.jpg"
                alt="México"
                class={styles.escudos}
              />
              <span>México</span>
            </li>
            <li id="b2E" class="america-do-norte">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/estados unidos.png"
                alt="Estados Unidos"
                class={styles.escudos}
              />
              <span>Estados Unidos</span>
            </li>
            <li id="b2F" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/suíça.png"
                alt="Suíça"
                class={`${styles.suica} ${styles.escudos}`}
              />
              <span>Suíça</span>
            </li>
            <li id="b2G" class="america-do-sul">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/uruguai.png"
                alt="Uruguai"
                class={styles.escudos}
              />
              <span>Uruguai</span>
            </li>
            <li id="b2H" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/croácia.png"
                alt="Croácia"
                class={styles.escudos}
              />
              <span>Croácia</span>
            </li>
          </ul>

          <ul
            id="pote-3"
            class="pote justify-content-center text-lg-center col-8 col-sm-6 col-md-4 col-lg-3"
          >
            <p>
              <b>Pote 3</b>
            </p>
            <li id="c3A" class="africa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/senegal.png"
                alt="Senegal"
                class={styles.escudos}
              />
              <span>Senegal</span>
            </li>
            <li id="c3B" class="asia">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/irã.png"
                alt="Irã"
                class={styles.escudos}
              />
              <span>Irã</span>
            </li>
            <li id="c3C" class="asia">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/japão.jpg"
                alt="Japão"
                class={styles.escudos}
              />
              <span>Japão</span>
            </li>
            <li id="c3D" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/sérvia.png"
                alt="Sérvia"
                class={styles.escudos}
              />
              <span>Sérvia</span>
            </li>
            <li id="c3E" class="europa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/polônia.png"
                alt="Polônia"
                class={styles.escudos}
              />
              <span>Polônia</span>
            </li>
            <li id="c3F" class="asia">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/coréia do sul.png"
                alt="Coréia do Sul"
                class={styles.escudos}
              />
              <span>Coréia do Sul</span>
            </li>
            <li id="c3G" class="africa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/marrocos.jpg"
                alt="Marrocos"
                class={styles.escudos}
              />
              <span>Marrocos</span>
            </li>
            <li id="c3H" class="africa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/tunísia.png"
                alt="Tunísia"
                class={styles.escudos}
              />
              <span>Tunísia</span>
            </li>
          </ul>

          <ul
            id="pote-4"
            class="pote justify-content-center text-lg-center col-8 col-sm-6 col-md-4 col-lg-3"
          >
            <p>
              <b>Pote 4</b>
            </p>
            <li id="d4A" class="america-do-norte">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/canada.png"
                alt="Canada"
                class={styles.escudos}
              />
              <span>Canadá</span>
            </li>
            <li id="d4B" class="america-do-sul">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/equador.png"
                alt="Equador"
                class={styles.escudos}
              />
              <span>Equador</span>
            </li>
            <li id="d4C" class="asia">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/arábia saudita.png"
                alt="Arábia Saudita"
                class={styles.escudos}
              />
              <span>Arábia Saudita</span>
            </li>
            <li id="d4D" class="africa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/gana.png"
                alt="Gana"
                class={styles.escudos}
              />
              <span>Gana</span>
            </li>
            <li id="d4E" class="africa">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/camarões.png"
                alt="Camarões"
                class={styles.escudos}
              />
              <span>Camarões</span>
            </li>
            <li id="d4F" class="repescagem">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/nova rica.png"
                alt="Nova Rica"
                class={styles.escudos}
              />
              <span>Nova Zelândia/Costa Rica</span>
            </li>
            <li id="d4G" class="repescagem">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/perustrália.png"
                alt="Perustrália"
                class={styles.escudos}
              />
              <span>Peru/Austrália</span>
            </li>
            <li id="d4H" class="europa repescagem">
              <img
                src="../../../../images/Simulador de Sorteio - Times/Copa do Mundo/europa 4.jpg"
                alt="Europa"
                class={styles.escudos}
              />
              <span>País de Gales/Escócia/Ucrânia</span>
            </li>
          </ul>
        </div>

        <br />

        <div class="row">
          <span class="mr-2 d-flex align-items-center">
            Escolha uma opção:{" "}
          </span>
          <button id="time-copa" class="btn btn-outline-primary col-2 mr-2">
            Sortear time
          </button>
          <button id="tudo-copa" class="btn btn-outline-success col-2 mr-2">
            Sortear tudo
          </button>
          <button id="limpar" class="btn btn-outline-danger col-2 mr-2">
            Limpar
          </button>

          <a
            href="#grupos"
            id="ver-grupos"
            class="btn btn-outline-light ml-auto mr-4 col-sm-2"
            style="text-decoration: none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
            Ver todos os grupos
          </a>
        </div>

        <br />
        <br />

        <h3>Grupos</h3>
        <div id="grupos">
          <div class="row">
            <ul id="grupo-A" class="grupos col-6 col-md-4 col-lg-3">
              <li class="A1" style="list-style: none"></li>
              <li class="A2"></li>
              <li class="A3"></li>
              <li class="A4"></li>

              <div class="jogos">
                <p>
                  <b>Jogos:</b>
                </p>
                <p class="">
                  <span class="A1">A1</span> x <span class="A2">A2</span>
                </p>
                <p class="rodada-1">
                  <span class="A3">A3</span> x <span class="A4">A4</span>
                </p>

                <p class="">
                  <span class="A1">A1</span> x <span class="A3">A3</span>
                </p>
                <p class="rodada-2">
                  <span class="A4">A4</span> x <span class="A2">A2</span>
                </p>

                <p class="">
                  <span class="A4">A4</span> x <span class="A1">A1</span>
                </p>
                <p class="rodada-3">
                  <span class="A2">A2</span> x <span class="A3">A3</span>
                </p>
              </div>
            </ul>

            <ul id="grupo-B" class="grupos col-6 col-md-4 col-lg-3">
              <li class="B1"></li>
              <li class="B2"></li>
              <li class="B3"></li>
              <li class="B4"></li>

              <div class="jogos">
                <p>
                  <b>Jogos:</b>
                </p>
                <p>
                  <span class="B1">B1</span> x <span class="B2">B2</span>
                </p>
                <p class="rodada-1">
                  <span class="B3">B3</span> x <span class="B4">B4</span>
                </p>

                <p>
                  <span class="B1">B1</span> x <span class="B3">B3</span>
                </p>
                <p class="rodada-2">
                  <span class="B4">B4</span> x <span class="B2">B2</span>
                </p>

                <p>
                  <span class="B4">B4</span> x <span class="B1">B1</span>
                </p>
                <p class="rodada-3">
                  <span class="B2">B2</span> x <span class="B3">B3</span>
                </p>
              </div>
            </ul>

            <ul id="grupo-C" class="grupos col-6 col-md-4 col-lg-3">
              <li class="C1"></li>
              <li class="C2"></li>
              <li class="C3"></li>
              <li class="C4"></li>

              <div class="jogos">
                <p>
                  <b>Jogos:</b>
                </p>
                <p>
                  <span class="C1">C1</span> x <span class="C2">C2</span>
                </p>
                <p class="rodada-1">
                  <span class="C3">C3</span> x <span class="C4">C4</span>
                </p>

                <p>
                  <span class="C1">C1</span> x <span class="C3">C3</span>
                </p>
                <p class="rodada-2">
                  <span class="C4">C4</span> x <span class="C2">C2</span>
                </p>

                <p>
                  <span class="C4">C4</span> x <span class="C1">C1</span>
                </p>
                <p class="rodada-3">
                  <span class="C2">C2</span> x <span class="C3">C3</span>
                </p>
              </div>
            </ul>

            <ul id="grupo-D" class="grupos col-6 col-md-4 col-lg-3">
              <li class="D1"></li>
              <li class="D2"></li>
              <li class="D3"></li>
              <li class="D4"></li>

              <div class="jogos">
                <p>
                  <b>Jogos:</b>
                </p>
                <p>
                  <span class="D1">D1</span> x <span class="D2">D2</span>
                </p>
                <p class="rodada-1">
                  <span class="D3">D3</span> x <span class="D4">D4</span>
                </p>

                <p>
                  <span class="D1">D1</span> x <span class="D3">D3</span>
                </p>
                <p class="rodada-2">
                  <span class="D4">D4</span> x <span class="D2">D2</span>
                </p>

                <p>
                  <span class="D4">D4</span> x <span class="D1">D1</span>
                </p>
                <p class="rodada-3">
                  <span class="D2">D2</span> x <span class="D3">D3</span>
                </p>
              </div>
            </ul>

            <ul id="grupo-E" class="grupos col-6 col-md-4 col-lg-3">
              <li class="E1"></li>
              <li class="E2"></li>
              <li class="E3"></li>
              <li class="E4"></li>

              <div class="jogos">
                <p>
                  <b>Jogos:</b>
                </p>
                <p>
                  <span class="E1">E1</span> x <span class="E2">E2</span>
                </p>
                <p class="rodada-1">
                  <span class="E3">E3</span> x <span class="E4">E4</span>
                </p>

                <p>
                  <span class="E1">E1</span> x <span class="E3">E3</span>
                </p>
                <p class="rodada-2">
                  <span class="E4">E4</span> x <span class="E2">E2</span>
                </p>

                <p>
                  <span class="E4">E4</span> x <span class="E1">E1</span>
                </p>
                <p class="rodada-3">
                  <span class="E2">E2</span> x <span class="E3">E3</span>
                </p>
              </div>
            </ul>

            <ul id="grupo-F" class="grupos col-6 col-md-4 col-lg-3">
              <li class="F1"></li>
              <li class="F2"></li>
              <li class="F3"></li>
              <li class="F4"></li>

              <div class="jogos">
                <p>
                  <b>Jogos:</b>
                </p>
                <p>
                  <span class="F1">F1</span> x <span class="F2">F2</span>
                </p>
                <p class="rodada-1">
                  <span class="F3">F3</span> x <span class="F4">F4</span>
                </p>

                <p>
                  <span class="F1">F1</span> x <span class="F3">F3</span>
                </p>
                <p class="rodada-2">
                  <span class="F4">F4</span> x <span class="F2">F2</span>
                </p>

                <p>
                  <span class="F4">F4</span> x <span class="F1">F1</span>
                </p>
                <p class="rodada-3">
                  <span class="F2">F2</span> x <span class="F3">F3</span>
                </p>
              </div>
            </ul>

            <ul id="grupo-G" class="grupos col-6 col-md-4 col-lg-3">
              <li class="G1"></li>
              <li class="G2"></li>
              <li class="G3"></li>
              <li class="G4"></li>

              <div class="jogos">
                <p>
                  <b>Jogos:</b>
                </p>
                <p>
                  <span class="G1">G1</span> x <span class="G2">G2</span>
                </p>
                <p class="rodada-1">
                  <span class="G3">G3</span> x <span class="G4">G4</span>
                </p>

                <p>
                  <span class="G1">G1</span> x <span class="G3">G3</span>
                </p>
                <p class="rodada-2">
                  <span class="G4">G4</span> x <span class="G2">G2</span>
                </p>

                <p>
                  <span class="G4">G4</span> x <span class="G1">G1</span>
                </p>
                <p class="rodada-3">
                  <span class="G2">G2</span> x <span class="G3">G3</span>
                </p>
              </div>
            </ul>

            <ul id="grupo-H" class="grupos col-6 col-md-4 col-lg-3">
              <li class="H1"></li>
              <li class="H2"></li>
              <li class="H3"></li>
              <li class="H4"></li>

              <div class="jogos">
                <p>
                  <b>Jogos:</b>
                </p>
                <p>
                  <span class="H1">H1</span> x <span class="H2">H2</span>
                </p>
                <p class="rodada-1">
                  <span class="H3">H3</span> x <span class="H4">H4</span>
                </p>

                <p>
                  <span class="H1">H1</span> x <span class="H3">H3</span>
                </p>
                <p class="rodada-2">
                  <span class="H4">H4</span> x <span class="H2">H2</span>
                </p>

                <p>
                  <span class="H4">H4</span> x <span class="H1">H1</span>
                </p>
                <p class="rodada-3">
                  <span class="H2">H2</span> x <span class="H3">H3</span>
                </p>
              </div>
            </ul>
          </div>
        </div>

        <div class="row">
          <a href="#topo" id="volta-topo" class="btn btn-outline-light ml-auto">
            Voltar ao topo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
