import { useEffect } from "react";
import styles from "./LibSul.module.css";
import Head from "react-helmet";
import Pote from "../components/Pote";
import Group from "../components/Group";
import libertadoresLogo from "../assets/libertadores/libertadores-logo.png";
import sulamericanaLogo from "../assets/sulamericana/sulamericana-logo.png";

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
    document.getElementById("root").classList.add(styles.body);

    return () => {
      document.getElementById("root").classList.remove(styles.body);
    };
  }, []);

  const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const potesLibertadores = [
    [
      "Palmeiras",
      "River Plate",
      "Boca Juniors",
      "Flamengo",
      "Nacional",
      "Peñarol",
      "Atlético Mineiro",
      "Athletico Paranaense",
    ],
    [
      "Cerro Porteño",
      "Libertad",
      "Independiente del Valle",
      "Universidad Católica",
      "Emelec",
      "Corinthians",
      "Colo-Colo",
      "Vélez Sarsfield",
    ],
    [
      "Sporting Cristal",
      "Deportivo Cali",
      "Red Bull Bragantino",
      "Deportivo Táchira",
      "Alianza Lima",
      "Tolima",
      "Colón",
      "Caracas",
    ],
    [
      "Always Ready",
      "Talleres",
      "Independiente Petrolero",
      "Fortaleza",
      "Olimpia",
      "Estudiantes",
      "The Strongest",
      "América Mineiro",
    ],
  ];
  const potesSulamericana = [
    [
      "Santos",
      "Independiente",
      "São Paulo",
      "Internacional",
      "Racing",
      "LDU",
      "Lanús",
      "Junior",
    ],
    [
      "Defensa y Justicia",
      "Jorge Wilstermann",
      "Independiente Medellín",
      "Melgar",
      "Montevideo Wanderers",
      "Oriente Petrolero",
      "Deportivo La Guaira",
      "Unión La Calera",
    ],
    [
      "River Plate",
      "Atlético Goianiense",
      "Ceará",
      "Banfield",
      "Metropolitanos",
      "Unión Santa Fé",
      "Ayacucho",
      "9 de Octubre",
    ],
    [
      "Antofagasta",
      "Guaireña",
      "Cuiabá",
      "General Caballero",
      "Fluminense",
      "Everton",
      "Universidad Católica",
      "Barcelona SC",
    ],
  ];

  return (
    <>
      <Head>
        <title>Simulador de sorteio</title>
        <link
          rel="icon"
          href="../../../../images/Simulador de Sorteio - Times/libertadores logo.png"
        />
      </Head>

      <div id="libertadores" className="pb-3">
        <h1 className="text-center">Simulador de Sorteio</h1>
        <img
          src={libertadoresLogo}
          alt="libertadores logo"
          className="img-fluid d-inline-block"
          style={{ maxHeight: "40px" }}
        />
        <h2 className="d-inline-block mt-4 mb-3">Libertadores</h2>
        <h3>Potes</h3>
        <div
          id="potes"
          className="row justify-content-center justify-content-md-between"
        >
          {potesLibertadores.map((teams, i) => (
            <Pote key={i} teams={teams} pote={i + 1} copa="libertadores" />
          ))}
        </div>

        <br />

        <div className="row">
          <span className="me-2 d-flex align-items-center">
            Escolha uma opção:
          </span>
          <button
            id="time-liberta"
            className="btn btn-outline-primary col-2 me-2"
          >
            Sortear time
          </button>
          <button
            id="tudo-liberta"
            className="btn btn-outline-success col-2 me-2"
          >
            Sortear tudo
          </button>
          <button id="limpar" className="btn btn-outline-danger col-2 me-2">
            Limpar
          </button>
        </div>

        <br />
        <br />

        <h3>Grupos</h3>
        <div id="grupos">
          <div className="row">
            {groups.map((group) => (
              <Group key={group} group={group} />
            ))}
          </div>
        </div>

        <br />

        <a
          href="#sul-americana"
          className="badge bg-primary border text-decoration-none"
        >
          Sul-Americana
        </a>
      </div>

      <div className={styles.transicao}></div>

      <div id="sul-americana">
        <img
          src={sulamericanaLogo}
          alt="sul-americana logo"
          className="img-fluid d-inline-block pb-2"
          style={{ maxHeight: "40px" }}
        />
        <h2 id="sula-logo" className="d-inline-block my-3">
          Sul-Americana
        </h2>
        <h3>Potes</h3>
        <div
          id="potes"
          className="row justify-content-center justify-content-md-between"
        >
          {potesSulamericana.map((teams, i) => (
            <Pote key={i} teams={teams} pote={i + 1} copa="sulamericana" />
          ))}
        </div>

        <br />

        <div className="row">
          <span className="me-2 d-flex align-items-center">
            Escolha uma opção:
          </span>
          <button id="time-sula" className="btn btn-outline-primary col-2 me-2">
            Sortear time
          </button>
          <button id="tudo-sula" className="btn btn-outline-success col-2 me-2">
            Sortear tudo
          </button>
          <button
            id="limpar-sula"
            className="btn btn-outline-danger col-2 me-2"
          >
            Limpar
          </button>
        </div>

        <br />
        <br />

        <h3>Grupos</h3>
        <div id="grupos">
          <div className="row">
            {groups.map((group) => (
              <Group key={group} group={group} copa="sulamericana" />
            ))}
          </div>
          <br />
          <a
            href="#libertadores"
            className="badge bg-danger border text-decoration-none"
          >
            Libertadores
          </a>
        </div>
      </div>
    </>
  );
}
