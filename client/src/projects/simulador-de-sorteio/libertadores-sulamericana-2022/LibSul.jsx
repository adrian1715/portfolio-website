import { useEffect } from "react";
import styles from "./LibSul.module.css";
import Head from "react-helmet";

export default function LibSul() {
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
        <title>Simulador de sorteio</title>
        <link
          rel="icon"
          href="../../../../images/Simulador de Sorteio - Times/libertadores logo.png"
        />
      </Head>

      <div id="libertadores" className={styles.libertadores}>
        <h1>Simulador de Sorteio</h1>
        <div class="container">
          <img
            src="../../../../images/Simulador de Sorteio - Times/libertadores logo.png"
            alt="libertadores logo"
            class="img-fluid d-inline-block"
            style="max-height: 40px"
          />
          <h2 class="d-inline-block">Libertadores</h2>
          <h3>Potes</h3>
          <div
            id="potes"
            class="row justify-content-center justify-content-md-between"
          >
            <ul
              id="pote-1"
              class="pote justify-content-center text-lg-center col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <p>
                <b>Pote 1</b>
              </p>
              <li id="a1A" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/palmeiras.png"
                  alt="palmeiras"
                  class="escudos"
                />
                <span>
                  Palmeiras
                  <b class="ml-1 d-block d-md-inline-block">(Grupo A)</b>
                </span>
              </li>
              <li id="a1B" class="Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/river plate.png"
                  alt="river plate"
                  class="escudos"
                />
                <span>River Plate</span>
              </li>
              <li id="a1C" class="Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/boca juniors.png"
                  alt="boca juniors"
                  class="escudos"
                />
                <span>Boca Juniors</span>
              </li>
              <li id="a1D" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/flamengo.png"
                  alt="flamengo"
                  class="escudos"
                />
                <span>Flamengo</span>
              </li>
              <li id="a1E" class="Uruguai">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/nacional.png"
                  alt="nacional uru"
                  class="escudos nacional-uru"
                />
                <span>Nacional</span>
              </li>
              <li id="a1F" class="Uruguai">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/peñarol.png"
                  alt="peñarol"
                  class="escudos"
                />
                <span>Peñarol</span>
              </li>
              <li id="a1G" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/atlético-mg.png"
                  alt="galo mineiro"
                  class="escudos"
                />
                <span>Atlético Mineiro</span>
              </li>
              <li id="a1H" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/cap.png"
                  alt="CAP"
                  class="escudos"
                />
                <span>Athletico Paranaense</span>
              </li>
            </ul>

            <ul
              id="pote-2"
              class="pote justify-content-center text-lg-center col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <p>
                <b>Pote 2</b>
              </p>
              <li id="b2A" class="Paraguai">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/cerro porteño.png"
                  alt="cerro porteño"
                  class="escudos"
                />
                <span>Cerro Porteño</span>
              </li>
              <li id="b2B" class="Paraguai">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/libertad.png"
                  alt="libertad par"
                  class="escudos"
                />
                <span>Libertad</span>
              </li>
              <li id="b2C" class="Equador">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/independiente del valle.png"
                  alt="independiente del valle"
                  class="escudos"
                />
                <span>Independiente del Valle</span>
              </li>
              <li id="b2D" class="Chile">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/universidad católica.png"
                  alt="universidad católica"
                  class="escudos"
                />
                <span>Universidad Católica</span>
              </li>
              <li id="b2E" class="Equador">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/emelec.png"
                  alt="emelec"
                  class="escudos"
                />
                <span>Emelec</span>
              </li>
              <li id="b2F" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/corinthians.png"
                  alt="corinthians"
                  class="escudos"
                />
                <span>Corinthians</span>
              </li>
              <li id="b2G" class="Chile">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/colo-colo.png"
                  alt="colo-colo"
                  class="escudos"
                />
                <span>Colo-Colo</span>
              </li>
              <li id="b2H" class="Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/vélez sarsfield.png"
                  alt="vélez sarsfield"
                  class="escudos"
                />
                <span>Vélez Sarsfield</span>
              </li>
            </ul>

            <ul
              id="pote-3"
              class="pote justify-content-center text-lg-center col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <p>
                <b>Pote 3</b>
              </p>
              <li id="c3A" class="Peru">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/sporting cristal.png"
                  alt="sporting cristal"
                  class="escudos"
                />
                <span>Sporting Cristal</span>
              </li>
              <li id="c3B" class="Colômbia">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/deportivo cali.png"
                  alt="deportivo cali"
                  class="escudos"
                />
                <span>Deportivo Cali</span>
              </li>
              <li id="c3C" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/rb bragantino.png"
                  alt="red bull bragantino"
                  class="escudos"
                />
                <span>Red Bull Bragantino</span>
              </li>
              <li id="c3D" class="Venezuela">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/deportivo táchira.png"
                  alt="deportivo táchira"
                  class="escudos"
                />
                <span>Deportivo Táchira</span>
              </li>
              <li id="c3E" class="Peru">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/alianza lima.png"
                  alt="alianza lima"
                  class="escudos"
                />
                <span>Alianza Lima</span>
              </li>
              <li id="c3F" class="Colômbia">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/tolima.png"
                  alt="tolima"
                  class="escudos"
                />
                <span>Desportes Tolima</span>
              </li>
              <li id="c3G" class="Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/colón.png"
                  alt="colón"
                  class="escudos"
                />
                <span>Colón</span>
              </li>
              <li id="c3H" class="Venezuela">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/caracas.png"
                  alt="caracas escudo"
                  class="escudos"
                />
                <span>Caracas</span>
              </li>
            </ul>

            <ul
              id="pote-4"
              class="pote justify-content-center text-lg-center col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <p>
                <b>Pote 4</b>
              </p>
              <li id="d4A" class="Bolivia">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/always ready.png"
                  alt="always ready escudo"
                  class="escudos"
                />
                <span>Always Ready</span>
              </li>
              <li id="d4B" class="Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/talleres.png"
                  alt="talleres escudo"
                  class="escudos"
                />
                <span>Talleres</span>
              </li>
              <li id="d4C" class="Bolivia">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/independiente petrolero.png"
                  alt="independiente petrolero"
                  class="escudos"
                />
                <span>Independiente Petrolero</span>
              </li>
              <li id="d4D" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/fortaleza.png"
                  alt="fortaleza escudo"
                  class="escudos"
                />
                <span>Fortaleza</span>
              </li>
              <li id="d4E" class="pré-libertadores Paraguai">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/olimpia.png"
                  alt="olimpia escudo"
                  class="escudos"
                />
                <span>Olimpia</span>
              </li>
              <li id="d4F" class="pré-libertadores Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/estudiantes.png"
                  alt="estudiantes escudo"
                  class="escudos"
                />
                <span>Estudiantes</span>
              </li>
              <li id="d4G" class="pré-libertadores Bolivia">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/the strongest.png"
                  alt="the strongest escudo"
                  class="escudos"
                />
                <span>The Strongest</span>
              </li>
              <li id="d4H" class="pré-libertadores Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Libertadores/américa-mg.png"
                  alt="américa mg"
                  class="escudos"
                />
                <span>América Mineiro</span>
              </li>
            </ul>
          </div>

          <br />

          <div class="row">
            <span class="mr-2 d-flex align-items-center">
              Escolha uma opção:
            </span>
            <button
              id="time-liberta"
              class="btn btn-outline-primary col-2 mr-2"
            >
              Sortear time
            </button>
            <button
              id="tudo-liberta"
              class="btn btn-outline-success col-2 mr-2"
            >
              Sortear tudo
            </button>
            <button id="limpar" class="btn btn-outline-danger col-2 mr-2">
              Limpar
            </button>
          </div>

          <br />
          <br />

          <h3>Grupos</h3>
          <div id="grupos">
            <div class="row">
              <ul id="grupo-A" class="grupos col-6 col-md-4 col-lg-3">
                <li id="A1" style="list-style: none"></li>
                <li id="A2"></li>
                <li id="A3"></li>
                <li id="A4"></li>
              </ul>

              <ul id="grupo-B" class="grupos col-6 col-md-4 col-lg-3">
                <li id="B1"></li>
                <li id="B2"></li>
                <li id="B3"></li>
                <li id="B4"></li>
              </ul>

              <ul id="grupo-C" class="grupos col-6 col-md-4 col-lg-3">
                <li id="C1"></li>
                <li id="C2"></li>
                <li id="C3"></li>
                <li id="C4"></li>
              </ul>

              <ul id="grupo-D" class="grupos col-6 col-md-4 col-lg-3">
                <li id="D1"></li>
                <li id="D2"></li>
                <li id="D3"></li>
                <li id="D4"></li>
              </ul>

              <ul id="grupo-E" class="grupos col-6 col-md-4 col-lg-3">
                <li id="E1"></li>
                <li id="E2"></li>
                <li id="E3"></li>
                <li id="E4"></li>
              </ul>

              <ul id="grupo-F" class="grupos col-6 col-md-4 col-lg-3">
                <li id="F1"></li>
                <li id="F2"></li>
                <li id="F3"></li>
                <li id="F4"></li>
              </ul>

              <ul id="grupo-G" class="grupos col-6 col-md-4 col-lg-3">
                <li id="G1"></li>
                <li id="G2"></li>
                <li id="G3"></li>
                <li id="G4"></li>
              </ul>

              <ul id="grupo-H" class="grupos col-6 col-md-4 col-lg-3">
                <li id="H1"></li>
                <li id="H2"></li>
                <li id="H3"></li>
                <li id="H4"></li>
              </ul>
            </div>
          </div>
          <br />
          <a href="#sul-americana" class="badge badge-primary border">
            Sul-Americana
          </a>
        </div>
      </div>
      <div class="transição"></div>
      <div id="sul-americana">
        <h1>Simulador de Sorteio</h1>
        <div class="container">
          <img
            src="../../../../images/Simulador de Sorteio - Times/sul-americana logo.png"
            alt="sul-americana logo"
            class="img-fluid d-inline-block pb-2"
            style="max-height: 40px"
          />
          <h2 id="sula-logo" class="d-inline-block">
            Sul-Americana
          </h2>
          <h3>Potes</h3>
          <div
            id="potes"
            class="row justify-content-center justify-content-md-between"
          >
            <ul
              id="pote-1"
              class="pote justify-content-center text-lg-center col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <p>
                <b>Pote 1</b>
              </p>
              <li id="sulaa1A" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/santos.png"
                  alt="santos escudo"
                  class="escudos"
                />
                <span>Santos</span>
              </li>
              <li id="sulaa1B" class="Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/independiente.png"
                  alt="independiente"
                  class="escudos"
                />
                <span>Independiente</span>
              </li>
              <li id="sulaa1C" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/spfc.png"
                  alt="são paulo escudo"
                  class="escudos"
                />
                <span>São Paulo</span>
              </li>
              <li id="sulaa1D" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/internacional.png"
                  alt="internacional"
                  class="escudos"
                />
                <span>Internacional</span>
              </li>
              <li id="sulaa1E" class="Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/racing.png"
                  alt="racing"
                  class="escudos"
                />
                <span>Racing</span>
              </li>
              <li id="sulaa1F" class="Equador">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/ldu.png"
                  alt="ldu quito"
                  class="escudos"
                />
                <span>LDU</span>
              </li>
              <li id="sulaa1G" class="Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/lanús.png"
                  alt="lanús"
                  class="escudos"
                />
                <span>Lanús</span>
              </li>
              <li id="sulaa1H" class="Colombia">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/junior.png"
                  alt="junior barrinquilla"
                  class="escudos"
                />
                <span>Junior</span>
              </li>
            </ul>

            <ul
              id="pote-2"
              class="pote justify-content-center text-lg-center col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <p>
                <b>Pote 2</b>
              </p>
              <li id="sulab2A" class="Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/defensa y justicia.png"
                  alt="defensa y justicia"
                  class="escudos"
                />
                <span>Defensa y Justicia</span>
              </li>
              <li id="sulab2B" class="Bolivia">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/jorge wilstermann.png"
                  alt="jorge wiltermann escudo"
                  class="escudos"
                />
                <span>Jorge Wilstermann</span>
              </li>
              <li id="sulab2C" class="Colombia">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/independiente medellin.png"
                  alt="independiente medellin"
                  class="escudos"
                />
                <span>Independiente Medellín</span>
              </li>
              <li id="sulab2D" class="Peru">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/melgar.png"
                  alt="melgar"
                  class="escudos"
                />
                <span>Melgar</span>
              </li>
              <li id="sulab2E" class="Uruguai">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/montevideo wanderers.png"
                  alt="montevideo wanderers"
                  class="escudos"
                />
                <span>Montevideo Wanderers</span>
              </li>
              <li id="sulab2F" class="Bolivia">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/oriente petrolero.png"
                  alt="oriente petrolero escudo"
                  class="escudos"
                />
                <span>Oriente Petrolero</span>
              </li>
              <li id="sulab2G" class="Venezuela">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/deportivo la guaira.png"
                  alt="deportivo la guaira"
                  class="escudos"
                />
                <span>Deportivo La Guaira</span>
              </li>
              <li id="sulab2H" class="Chile">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/union la calera.png"
                  alt="union la calera"
                  class="escudos"
                />
                <span>Unión La Calera</span>
              </li>
            </ul>

            <ul
              id="pote-3"
              class="pote justify-content-center text-lg-center col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <p>
                <b>Pote 3</b>
              </p>
              <li id="sulac3A" class="Uruguai">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/river plate.png"
                  alt="river plate uruguay"
                  class="escudos"
                />
                <span>River Plate</span>
              </li>
              <li id="sulac3B" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/atlético-go.png"
                  alt="atlético goianiense"
                  class="escudos"
                />
                <span>Atlético Goianiense</span>
              </li>
              <li id="sulac3C" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/ceará.png"
                  alt="sulaceará escudo"
                  class="escudos"
                />
                <span>Ceará</span>
              </li>
              <li id="sulac3D" class="Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/banfield.png"
                  alt="banfield"
                  class="escudos"
                />
                <span>Banfield</span>
              </li>
              <li id="sulac3E" class="Venezuela">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/metropolitanos.png"
                  alt="metropolitanos escudo"
                  class="escudos"
                />
                <span>Metropolitanos</span>
              </li>
              <li id="sulac3F" class="Argentina">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/union santa fe.png"
                  alt="union santa fe"
                  class="escudos"
                />
                <span>Unión Santa Fe</span>
              </li>
              <li id="sulac3G" class="Peru">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/ayacucho.png"
                  alt="ayacucho"
                  class="escudos"
                />
                <span>Ayacucho</span>
              </li>
              <li id="sulac3H" class="Equador">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/9 de octubre.png"
                  alt="9 de octubre escudo"
                  class="escudos"
                />
                <span>9 de Octubre</span>
              </li>
            </ul>

            <ul
              id="pote-4"
              class="pote justify-content-center text-lg-center col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <p>
                <b>Pote 4</b>
              </p>
              <li id="sulad4A" class="Chile">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/antofagasta.png"
                  alt="antofagasta"
                  class="escudos"
                />
                <span>Antofagasta</span>
              </li>
              <li id="sulad4B" class="Paraguai">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/guaireña.png"
                  alt="guaireña escudo"
                  class="escudos"
                />
                <span>Guaireña</span>
              </li>
              <li id="sulad4C" class="Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/cuiabá.png"
                  alt="cuiabá escudo"
                  class="escudos"
                />
                <span>Cuiabá</span>
              </li>
              <li id="sulad4D" class="Paraguai">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/general caballero.png"
                  alt="general caballero escudo"
                  class="escudos"
                />
                <span>General Caballero</span>
              </li>
              <li id="sulad4E" class="pré-libertadores Brasil">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/fluminense.png"
                  alt="fluminense escudo"
                  class="escudos"
                />
                <span>Fluminense</span>
              </li>
              <li id="sulad4F" class="pré-libertadores Chile">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/everton.png"
                  alt="everton chile escudo"
                  class="escudos"
                />
                <span>Everton</span>
              </li>
              <li id="sulad4G" class="pré-libertadores Equador">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/universidad católica.png"
                  alt="unverisidad católica ecuador escudo"
                  class="escudos"
                />
                <span>Universidad Católica</span>
              </li>
              <li id="sulad4H" class="pré-libertadores Equador">
                <img
                  src="../../../../images/Simulador de Sorteio - Times/Sul-Americana/barcelona sc.png"
                  alt="barcelona de guayaquill escudo"
                  class="escudos"
                />
                <span>Barcelona SC</span>
              </li>
            </ul>
          </div>

          <br />

          <div class="row">
            <span class="mr-2 d-flex align-items-center">
              Escolha uma opção:
            </span>
            <button id="time-sula" class="btn btn-outline-primary col-2 mr-2">
              Sortear time
            </button>
            <button id="tudo-sula" class="btn btn-outline-success col-2 mr-2">
              Sortear tudo
            </button>
            <button id="limpar-sula" class="btn btn-outline-danger col-2 mr-2">
              Limpar
            </button>
          </div>

          <br />
          <br />

          <h3>Grupos</h3>
          <div id="grupos">
            <div class="row">
              <ul id="sula-grupo-A" class="grupos col-6 col-md-4 col-lg-3">
                <li id="sula-A1"></li>
                <li id="sula-A2"></li>
                <li id="sula-A3"></li>
                <li id="sula-A4"></li>
              </ul>

              <ul id="sula-grupo-B" class="grupos col-6 col-md-4 col-lg-3">
                <li id="sula-B1"></li>
                <li id="sula-B2"></li>
                <li id="sula-B3"></li>
                <li id="sula-B4"></li>
              </ul>

              <ul id="sula-grupo-C" class="grupos col-6 col-md-4 col-lg-3">
                <li id="sula-C1"></li>
                <li id="sula-C2"></li>
                <li id="sula-C3"></li>
                <li id="sula-C4"></li>
              </ul>

              <ul id="sula-grupo-D" class="grupos col-6 col-md-4 col-lg-3">
                <li id="sula-D1"></li>
                <li id="sula-D2"></li>
                <li id="sula-D3"></li>
                <li id="sula-D4"></li>
              </ul>

              <ul id="sula-grupo-E" class="grupos col-6 col-md-4 col-lg-3">
                <li id="sula-E1"></li>
                <li id="sula-E2"></li>
                <li id="sula-E3"></li>
                <li id="sula-E4"></li>
              </ul>

              <ul id="sula-grupo-F" class="grupos col-6 col-md-4 col-lg-3">
                <li id="sula-F1"></li>
                <li id="sula-F2"></li>
                <li id="sula-F3"></li>
                <li id="sula-F4"></li>
              </ul>

              <ul id="sula-grupo-G" class="grupos col-6 col-md-4 col-lg-3">
                <li id="sula-G1"></li>
                <li id="sula-G2"></li>
                <li id="sula-G3"></li>
                <li id="sula-G4"></li>
              </ul>

              <ul id="sula-grupo-H" class="grupos col-6 col-md-4 col-lg-3">
                <li id="sula-H1"></li>
                <li id="sula-H2"></li>
                <li id="sula-H3"></li>
                <li id="sula-H4"></li>
              </ul>
            </div>
            <br />
            <a href="#libertadores" class="badge badge-danger border">
              Libertadores
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
