import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../logo.svg";
import "./HeaderNavbar.css";

function HeaderNavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="50"
            height="50"
            className="App-logo"
            alt="logo"
          />
          Alvaro Malvestiti
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/certificates">Certificados</Nav.Link>
            <NavDropdown title="Contacto" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.linkedin.com/in/alvaromalvestiti/"
                target={"_blank"}
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://github.com/alvaarom"
                target={"_blank"}
              >
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;
