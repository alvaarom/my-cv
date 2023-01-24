import React from "react";
import Container from "react-bootstrap/Container";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import CertificatesCard from "../../components/CertificatesCard/CertificatesCard";
import { certificates } from "../../data/certificates";
import { map } from "lodash";
import "./Certificates.css";

export default function Certificates() {
  return (
    <>
      <HeaderNavbar />
      <Container className="certificates">
        <h4>Certificados</h4>
        {map(certificates, (certificate, index) => (
          <CertificatesCard key={index} data={certificate} />
        ))}
      </Container>
    </>
  );
}
