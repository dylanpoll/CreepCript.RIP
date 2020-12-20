import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import banner from "../assets/creep.png";
//import greetavi from "../assets/greetme.jpg";

const Styles = styled.div`
  .jumbo {
    object-fit: contain;
    background: #e7ad00;
    max-width: 100%;
    min-hieght: 1%;
    position: relative;
    z-index: 2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
  }
  .banner {

    z-index: 4;
    max-height: 100%;
    max-width: 80%;
    top: 0;
    position: absolute;
  }
`;
export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo mb-0">
      <div className="overlay"> </div>
      <Container>
      <img src={banner} alt="banner" className = "banner"/>
      </Container>
    </Jumbo>
  </Styles>
);
export default Jumbotron;
//      <img src={greetavi} alt="greeting" className = "greeting"/>