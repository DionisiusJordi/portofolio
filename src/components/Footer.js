import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/instagram.png';
import navIcon2 from '../assets/img/facebook.png';
import navIcon3 from '../assets/img/twitch.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <form />
          <Col>
            <p>©2022 Joichi. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}