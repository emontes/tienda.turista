import React from "react"
import services from "../constants/services"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import device from "../assets/themes/device"
const Services = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/slider-1.png"
        alt="Services"
        placeholder="blurred"
        layout="constrained"
        className="bg-image"
      />
      <div className="hero-container">
        <div className="services">
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article key={id} className="service">
                {icon}
                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Services

const Wrapper = styled.section`
  position: relative;

  margin-top: 1rem;
  margin-bottom: 1rem;

  @media ${device.laptop} {
    -webkit- clip-path: polygon(0 6vh, 100% 0, 100% 58vh, 0 100%);
    clip-path: polygon(0 6vh, 100% 0, 100% 58vh, 0 100%);
  }

  .bg-image {
    width: 100vw;
  }

  .hero-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
      to bottom right,
      rgba(0, 89, 153, 0.8),
      rgba(199, 226, 222, 0.8)
    );
  }

  .services {
    padding: 0 2rem;

    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: stretch;
    > * {
      flex: 1;
    }
    @media ${device.tablet} {
      gap: 3rem;
    }
  }
  .service {
    background: var(--clr-white-transparency-8);
    padding: 0.8rem;
    border-radius: var(--radius-sm);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: all 0.2s;
    color: var(--grey-40);
    box-shadow: var(--light-shadow);
    @media ${device.tablet} {
      :not(:last-child) {
        margin-bottom: 0rem;
        padding: 1.8rem;
      }
    }
    :hover {
      background: var(--grey-40);
      color: var(--white);
      transform: translateY(-1rem) scale(1.03);
      box-shadow: var(--dark-shadow);
      .service-icon {
        color: var(--white);
      }
    }
  }
  .service-icon {
    font-size: 2rem;
    margin-bottom: 0;
    display: inline-block;
    color: var(--clr-primary-6);
    @media ${device.tablet} {
      font-size: 4rem;
    }
  }
`
