import React from "react";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import perfil from "../../assets/perfil.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <HeaderNavbar />
      <Container className="body">
        <Image src={perfil} roundedCircle={true} width={200} height={200} />
        <h4>Developer Full-Stack</h4>
      </Container>
    </>
  );
}
