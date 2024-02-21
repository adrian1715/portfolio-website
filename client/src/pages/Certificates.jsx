import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { links } from "../App";
import { toLinkFormatter } from "../utils/toLinkFormatter";

export const courses = {
  alura: [
    "PHP: conceitos, lidando com dados, loops e mais",
    "Avançando com PHP: Arrays, Strings, Função e Web",
    "Orientação a Objetos com PHP: Classes, métodos e atributos",
    "Avançando com Orientação a Objetos com PHP: Herança, Polimorfismo e Interfaces",
    "PHP: manipulando coleções com Arrays",
    "PHP Exception: tratamento de erros",
    "PHP Composer: Dependências, Autoload e Publicação",
    "PHP e PDO: trabalhando ocm banco de dados",
    "SQL com MySQL: manipule e consulte dados",
    "DoctrineORM: acesse o banco com Mapeamento Objeto-Relacional",
    "Consultas SQL: avançando no SQL com MySQL",
    "Expressões Regulares: capturando textos de forma mágica",
    "HTTP: Entendendo a web por baixo dos panos",
    "PHP e MySQL: Criando uma webapp",
    "PHP Strings: Operações e expressões regulares",
    "PHP I/O: trabalhando com arquivos e streams",
    "jQuery: domine a biblioteca mais popular do mercado parte 1",
    "jQuery: avance na biblioteca mais popular do mercado parte 2",
    "Hábitos: da produtividade às metas pessoas",
    "Linux Onboarding: usando a CLI de uma forma rápida e prática",
    "Foco: trazendo mais resultados para o dia a dia",
  ],
  youtube: [
    { name: "HTML e CSS para iniciantes", author: "RB Tech" },
    { name: "Banco de Dados MySQL", author: "Curso em Vídeo" },
  ],
  udemy: [
    { name: "Introdução ao Inbound Marketing", author: "RD University" },
    {
      name: "Aprenda Linguagem C - Fundamentos para a Lógica de Programação",
      author: "One Day code",
    },
    {
      name: "HTML5: Primeiros passos na carreira de Desenvolvedor",
      author: "Marnei Cardoso",
    },
    { name: "Introdução à Linguagem HTML", author: "Diego Mariano" },
    { name: "Web Design for Web Developers", author: "Jonas Schmedtmann" },
    {
      name: "Introdução ao Inbound Marketing",
      author: "Daniel Tapias Morales, serfrontend Cursos",
    },
    { name: "Web Development Bootcamp", author: "Colt Steele" },
    { name: "React The Complete Guide", author: "Maximilan Schwarzmüller" },
  ],
  symfonyCasts: [
    "Symfony: Level 1",
    "Symfony: Level 2",
    "Symfony: Level 3",
    "Symfony: Level 4",
    "Symfony: Best Practices",
    "Fixtures with Alice",
    "PhpStorm",
  ],
};

export default function Certificates() {
  const { items } = links.filter((link) => link.path === "/certificates")[0];

  return (
    <>
      <h1>Certificates</h1>
      {items.map((item) => (
        <Fragment key={item}>
          <h2>{item}</h2>
          <ul>
            {courses[item[0].toLowerCase() + item.substring(1)].map(
              (course, i) =>
                typeof course === "object" ? (
                  <li key={i}>
                    <Link to={course.name}>{`${toLinkFormatter(
                      course.name
                    )} - ${course.author}`}</Link>
                  </li>
                ) : (
                  <li key={i}>
                    <Link to={course}>{course}</Link>
                  </li>
                )
            )}
          </ul>
        </Fragment>
      ))}
    </>
  );
}
