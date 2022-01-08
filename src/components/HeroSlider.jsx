import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styled from "styled-components"
import { Link } from "gatsby"
import DataSlider from "../constants/home-slides"

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
      {DataSlider.map((item) => {
        return (
          <div className="slide" key={item.id}>
            {item.image}
            <div className="hero-container">
              <Centro
                leth2={item.leth2}
                leth3={item.leth3}
                leth4={item.leth4}
                linkText={item.linkText}
                linkGo={item.linkGo}
              />
            </div>
          </div>
        )
      })}
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
    /* background: linear-gradient(
      to bottom right,
      rgba(0, 0, 255, 0.3),
      rgba(255, 255, 255, 0.2)
    ); */
  }

  .bg-radius {
    background: var(--white);
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
