import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Index = () => {
  return (
    <Wrapper>
      <StaticImage
        className="hero-img"
        src="./bottom_banner.png"
        alt="Grandes Productos"
        placeholder="tracedSVG"
        layout="constrained"
      />
      <div className="container">
        <h2>Compre Nuevos Productos</h2>
        <h3>Con grandes Ahorros</h3>
        <h4>¡Accesorios, Estilos de Vida y Más!</h4>
      </div>
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.div`
  width: 95%;
  margin: 2rem auto;
  max-width: 1470px;
  position: relative;
  overflow: hidden;
  color: var(--grey-50);
  text-transform: capitalize;
  :hover {
    .hero-img {
      transform: scale(1.1);
    }
  }

  .hero-img {
    width: 100%;
    transition: all 1s;
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 3rem;
    display: flex;
    justify-content: center;

    flex-direction: column;
  }
  h2 {
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 2rem;
    width: 30rem;
  }
  h3 {
    margin-bottom: 2rem;
    width: 15rem;
    color: var(--primary);
    font-size: 1.8rem;
    font-weight: 700;
  }
  h4 {
    width: 16rem;
  }
`
