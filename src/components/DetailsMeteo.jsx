import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import MeteoFuturo from "./MeteoFuturo";

const DetailsMeteo = () => {
  const { lat, lon } = useParams(); // Recupera latitudine e longitudine dalla URL
  const [meteo, setMeteo] = useState(null);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeteo = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=599a59aed7c82919d443857ec935af6c`
        );
        const resp = await response.json();

        if (resp.cod === 200) {
          console.log(resp);
          setMeteo(resp); // Salviamo i dati meteo
          setError("");
        } else {
          setError("Impossibile recuperare i dati del meteo.");
        }
      } catch (err) {
        setError(
          "Si è verificato un errore durante il caricamento dei dati meteo.",
          err
        );
      }
    };

    fetchMeteo(); // Esegui la chiamata API quando la pagina viene caricata
  }, [lat, lon]); // Dipende dai parametri lat e lon

  if (error) {
    return <div>{error}</div>;
  }
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(); // funzione dove ho bestemmiato per capire come convertire i kelvin in centigradi
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        {meteo ? (
          <Card
            className="mb-2 justify-content-center"
            style={{
              width: "400px",
              border: "solid 1px blue",
              boxShadow: "5px 2px 15px #9fadc1"
            }}
          >
            <Card.Header>
              <strong>
                {meteo.name} - {meteo.sys.country} -
                <cite style={{ fontFamily: "light" }}> Temperatura Live:</cite>
                <strong style={{ color: "blue" }}>
                  {" "}
                  {kelvinToCelsius(meteo.main.temp)}°C
                </strong>
              </strong>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                Meteo oggi a <strong> {meteo.name}</strong>
              </Card.Title>
              <Card.Text>
                Temperatura minima:{" "}
                <strong style={{ color: "blue" }}>
                  {kelvinToCelsius(meteo.main.temp_min)}°C
                </strong>
              </Card.Text>
              <Card.Text>
                Temperatura massima:{" "}
                <strong style={{ color: "red" }}>
                  {kelvinToCelsius(meteo.main.temp_max)}°C
                </strong>
              </Card.Text>
              <Card.Text>
                Umidità:{" "}
                <strong style={{ color: "gray" }}>
                  {" "}
                  {meteo.main.humidity}%
                </strong>
              </Card.Text>
              <Card.Text>
                Previsione: <strong> {meteo.weather[0].description}</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <p>Caricamento...</p>
        )}
      </div>
      <MeteoFuturo lat={lat} lon={lon} />
    </>
  );
};
export default DetailsMeteo;
