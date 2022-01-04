import * as React from "react"
import Logo from "../icons/logo"
import styled from "styled-components"
import device from "../assets/themes/device"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"

export function Footer() {
  return (
    <Wrapper>
      <div className="left">
        <div className="logo-box">
          <Logo />
        </div>
      </div>
      <div className="right">
        <div className="social-links">
          {socialLinks.map((link) => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>

        <div className="links">
          <ul>
            <li className="footer__item">
              <Link to="/" className="link">
                Términos de Servicio
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="link">
                Política de Reembolso
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="link">
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </div>

        <div className="copyright">
          Tienda del Turista · Derechos Reservados &copy;{" "}
          {new Date().getFullYear()} ·{" "}
          <a href="https://turista.com.mx">Turista.com.mx</a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: var(--grey-90);
  padding: 3rem;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-start;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .logo-box {
    width: 12rem;
  }

  .social-links {
    margin-top: -2rem;

    display: flex;
    justify-content: space-around;
  }
  .social-link {
    font-size: 2.8rem;
    color: var(--secondary);
    transition: all 0.3s;
  }
  .social-link:hover {
    color: var(--white);
  }

  .footer__item {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  .link {
    color: var(-white);
    border-bottom: 2px solid var(--grey-50);
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.2s;
    :hover {
      color: var(--primary);
      transform: scale(1.1);
    }
  }
`
