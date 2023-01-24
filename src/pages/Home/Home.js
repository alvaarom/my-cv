import React from "react";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import perfil from "../../assets/perfil.jpeg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <HeaderNavbar />
      <Container className="body">
        <Image src={perfil} roundedCircle={true} width={200} height={200} />
        <h4>Developer Full-Stack</h4>
        <p className="text">
          Detallista y meticuloso. Apasionado por la tecnología y motivado por
          los retos y el trabajo en equipo.
        </p>
        <Container className="contenedor">
          <ProfileCard title={"LENGUAJES"} description={["Javascript"]} />
          <ProfileCard
            title={"FRONTEND"}
            description={["HTML", "CSS", "React", "ReactNative"]}
          />
          <ProfileCard
            title={"BACKEND"}
            description={["Node", "Express", "Sequelize"]}
          />
          <ProfileCard
            title={"BASE DE DATOS"}
            description={["MySQL", "SQLite"]}
          />
          <ProfileCard
            title={"HERRAMIENTAS"}
            description={["Docker", "Git", "Jira"]}
          />
        </Container>

        <p>Soy un apasionado por la tecnologia y me encanta aprender</p>
        <p className="textBold">¿Queres saber mas sobre mi?</p>
        <div className="redes">
          <a
            href="https://www.linkedin.com/in/alvaromalvestiti/"
            target={"_blank"}
          >
            <Image src={linkedin} />
          </a>
          <a href="https://github.com/alvaarom" target={"_blank"}>
            <Image src={github} />
          </a>
        </div>
      </Container>
    </>
  );
}
