import { Col, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

const Contatti = () => {
  return (
    <>
      <div className="px-4">
        <footer>
          <Row className="justify-content-center mt-5">
            <Col xs={4}>
              <Row className="text-center">
                <h6 style={{ color: "#1c7300" }}>Seguici su...</h6>
                <Col className=" mb-4">
                  <Facebook className="mx-1" style={{ color: "blue" }} />
                  <Instagram className="mx-1" style={{ color: "red" }} />
                  <Twitter className="mx-1" style={{ color: "black" }} />
                </Col>
              </Row>
              <Row
                xs={1}
                sm={2}
                md={4}
                lg={4}
                className="justify-content-between"
              >
                <Col>
                  <Col className=" footer-links">
                    <p>
                      <a
                        href="#chisiamo"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#0e6b40" }}
                      >
                        Chi Siamo
                      </a>
                    </p>
                    <p>
                      <a
                        href="#Contattaci"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#0e6b40" }}
                      >
                        Contattaci
                      </a>
                    </p>
                    <p>
                      <a
                        href="#CondDuso"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#0e6b40" }}
                      >
                        Termini e Condizioni d&#39;uso
                      </a>
                    </p>
                  </Col>
                </Col>

                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a
                          href="#Business"
                          alt="footer link"
                          className="text-decoration-none"
                          style={{ color: "#0e6b40" }}
                        >
                          Business
                        </a>
                      </p>
                      <p>
                        <a
                          href="#Developers"
                          alt="footer link"
                          className="text-decoration-none"
                          style={{ color: "#0e6b40" }}
                        >
                          Developers
                        </a>
                      </p>
                      <p>
                        <a
                          href="#DoveSiamo"
                          alt="footer link"
                          className="text-decoration-none"
                          style={{ color: "#0e6b40" }}
                        >
                          Dove Siamo
                        </a>
                      </p>
                      <p>
                        <a
                          href="#Stampa"
                          alt="footer link"
                          className="text-decoration-none"
                          style={{ color: "#0e6b40" }}
                        >
                          Stampa
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a
                          href="#DiconoDiNoi"
                          alt="footer link"
                          className="text-decoration-none"
                          style={{ color: "#0e6b40" }}
                        >
                          Dicono di Noi
                        </a>
                      </p>
                      <p>
                        <a
                          href="#PrivcyAndCookie"
                          alt="footer link"
                          className="text-decoration-none "
                          style={{ color: "#0e6b40", fontSize: "13px" }}
                        >
                          Privacy and Cookie Policy
                        </a>
                      </p>
                      <p>
                        <a
                          href="#Consensi"
                          alt="footer link"
                          className="text-decoration-none"
                          style={{ color: "#0e6b40", fontSize: "12px" }}
                        >
                          Consensi GDPR
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </footer>
      </div>
    </>
  );
};
export default Contatti;
