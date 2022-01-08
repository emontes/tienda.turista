import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

const HeroSlider = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
  }
  return (
    <Wrapper {...settings}>
      <div className="slide">
        <StaticImage
          className="hero-img"
          src="../assets/images/slider-1.png"
          alt="slider 1"
          placeholder="tracedSVG"
          layout="constrained"
        />
        <div className="hero-container">
          <Centro
            leth2="Tienda"
            leth3="Los Artículos que le encantan al Turista"
            leth4="Nuevos Artículos"
            linkText="Ver Productos"
            linkGo="/productos"
          />
        </div>
      </div>
      <div className="slide">
        <StaticImage
          className="hero-img"
          src="../assets/images/slider-2.png"
          alt="slider 2"
          placeholder="tracedSVG"
          layout="constrained"
        />
        <div className="hero-container">
          <Centro
            leth2="Tecno"
            leth3="Artículos Novedosos en Tecnología"
            leth4="Accesorios y más"
            linkText="Compra Ahora"
            linkGo="/productos/electronica"
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Centro = ({ leth2, leth3, leth4, linkText, linkGo }) => {
  return (
    <div className="bg-radius">
      <h2>{leth2}</h2>
      <div className="underline" />
      <h3>{leth3}</h3>
      <h4>{leth4}</h4>
      <Link className="btn" to={linkGo}>
        {linkText}
      </Link>
    </div>
  )
}
export default HeroSlider

const Wrapper = styled(Slider)`
  margin-bottom: 3rem;
  text-align: center;

  .hero-img {
    width: 100%;
    height: 59vh;
  }

  .slide {
    height: 59vh;
    position: relative;
  }

  .hero-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(
      to bottom right,
      rgba(0, 0, 255, 0.3),
      rgba(255, 255, 255, 0.2)
    );
  }

  .bg-radius {
    background: #fff;
    border-radius: 50%;
    margin-left: 5%;
    width: 23.2rem;
    min-height: 23.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: moveInLeft 1s;
  }

  h2 {
    font-weight: 700;
    font-size: 4rem;
    text-transform: uppercase;
  }
  .underline {
    border: 1px solid black;
    margin-top: -0.7rem;
    width: 60%;
  }
  h3 {
    margin-top: 0.8rem;
    font-weight: 500;
    line-height: 1;
  }
  h4 {
  }

  .btn {
    margin-top: 1.2rem;
    background: var(--primary);
    color: var(--white);
    border-radius: 3px;
    padding: 0.5rem 1rem;
    transition: all 0.2s;
    animation: moveInRight 2s;
    :hover {
      background: var(--white);
      color: var(--primary);
      box-shadow: var(--shadow);
    }
  }
`
