import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/header.css";


export default function Header() {
  return (
    <Navbar expand={"lg"} class="navbar">
      <Container>
        
        <Navbar.Toggle aria-controls="minhanav" />
        <Navbar.Collapse className="justify-content-between"
          id="minhanav"
          style={{
            justifyContent: "space-between",
            width: "100%",
            alignSelf: "stretch",
          }}
        >
          <Navbar.Brand as={Link} to="/"><img class="logo" src="liberty.png"></img></Navbar.Brand>
          <Navbar.Text class="navbartext" as={Link} to="/">
            Inicial
          </Navbar.Text>
         <Navbar.Text class="navbartext" as={Link} to="/sobre">
            Sobre
          </Navbar.Text> 
          <Navbar.Text class="navbartext" as={Link} to="/principios">
            Principios
          </Navbar.Text>
          <Navbar.Text class="navbartext" as={Link} to="/info">
            API
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
