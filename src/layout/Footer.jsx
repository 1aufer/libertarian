import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import "../styles/footer.css";

export default function Footer() {

  const abreGoogleMaps = () => {
    window.open("https://www.google.com/maps/place/R.+Pero+Vaz+de+Caminha,+285+-+Costa+e+Silva,+Joinville+-+SC,+89218-520/@-26.2808302,-48.8705479,17z/data=!3m1!4b1!4m6!3m5!1s0x94deafe504dd2b5b:0x50f8a7c2fd97828f!8m2!3d-26.280835!4d-48.867973!16s%2Fg%2F11f3nhl76j?entry=ttu", "_blank");
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className="footer-section">
              <h4 className="text">Localização </h4>
              <button onClick={abreGoogleMaps}>Ver no Google Maps</button>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="footer-section">
              <h4 className="text">Redes sociais</h4>
              <ul className="social-links">     
                <li>
                  <a href="//facebook.com" target="_blank" rel="noopener noreferrer">
                    <img className="logo1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bTau4PYcn5UZUKTMS6J3AFMOhHxLbwTPBg&shttps://w7.pngwing.com/pngs/991/568/png-transparent-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="//instagram.com" target="_blank" rel="noopener noreferrer">
                    <img className="logo1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="Instagram" />
                  </a>
                </li>
                {/* Adicione mais redes sociais conforme necessário */}
              </ul>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="footer-section">
              <h4 className="text">Contato</h4>
              <a href="//whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img className="logo1" src="https://static.vecteezy.com/system/resources/previews/016/716/480/original/whatsapp-icon-free-png.png" alt="WhatsApp" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
