import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CloudSun } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
function TopBar() {
  return (
    <>
      <Navbar expand="md" className="topbarcol">
        <Container fluid>
          <NavLink to="/" className="nav-link">
            <CloudSun style={{ width: "1.3em", height: "2em" }} />
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/Home" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/weather/" className="nav-link">
                Meteo
              </NavLink>
              <NavLink to="/Utilities" className="nav-link">
                Utilità
              </NavLink>
            </Nav>
            <Nav className="ms-auto my-1 my-lg-0" navbarScroll>
              <NavLink to="/Contatti" className="nav-link me-2">
                Contatti & Lic.
              </NavLink>
              <Button variant="success" className="px-3">
                Accedi
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
