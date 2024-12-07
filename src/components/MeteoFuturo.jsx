import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const MeteoFuturo = ({ lat, lon }) => {
  const [meteoProx, setMeteoProx] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeteoFut = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=599a59aed7c82919d443857ec935af6c`
        );
        const resp = await response.json();

        if (resp.cod === "200") {
          console.log(resp);
          setMeteoProx(resp); //  Salviamo i dati meteo
        } else {
          setError("Impossibile recuperare le previsioni meteo.");
        }
      } catch (err) {
        setError(
          "Si è verificato un errore durante il caricamento delle previsioni meteo.",
          err
        );
      }
    };

    fetchMeteoFut(); // Esegui la chiamata API per le previsioni
  }, [lat, lon]); // Dipende dai parametri lat e lon

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(); // funzione dove ho bestemmiato per capire come convertire i kelvin in centigradi
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5 mb-3">
      <h3>Previsioni meteo per le prossime ore...</h3>
      <Row className="justify-content-between">
        {meteoProx ? (
          meteoProx.list
            .filter((meteo, index) => index % 8 === 0) // Seleziona un giorno (24ore/3ore è 8.. quindi uno ogni 8 equivale a un giorno)
            .slice(0, 5) // Limita a 5 elementi richiesti dal compito
            .map((meteo, index) => (
              <Col key={index} md={2} className="mb-1">
                <Card
                  style={{
                    border: "solid 1px green",
                    backgroundColor: "#c9fff5",
                    boxShadow: "5px 2px 15px green"
                  }}
                >
                  <Card.Body>
                    <Card.Title style={{ fontSize: "10px" }}>
                      {meteo.dt_txt}
                      <hr />
                    </Card.Title>
                    <Card.Text as="cite">
                      Temperatura:{" "}
                      <strong style={{ color: "blue" }}>
                        {kelvinToCelsius(meteo.main.temp)}°C
                      </strong>
                    </Card.Text>
                    <Card.Text>
                      Umidità:{" "}
                      <strong style={{ color: "gray" }}>
                        {meteo.main.humidity}%
                      </strong>
                    </Card.Text>
                    <Card.Text>
                      <p className="specialSize">
                        Previsioni:{" "}
                        <strong>{meteo.weather[0].description}</strong>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
        ) : (
          <p>Caricamento delle previsioni...</p>
        )}
      </Row>
    </div>
  );
};

export default MeteoFuturo;
