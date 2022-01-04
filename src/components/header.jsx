import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import Logo from "../icons/icon"
import { Navigation } from "./navigation"
import { CartButton } from "./cart-button"
import SearchIcon from "../icons/search"
import { Toast } from "./toast"
import styled from "styled-components"

export function Header() {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <Wrapper>
      <header className="header">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <Navigation className="nav" />
        <Link to="/search" className="searchButton">
          <SearchIcon />
        </Link>
        <CartButton quantity={quantity} />
      </header>
      <Toast show={loading || didJustAddToCart}>
        {!didJustAddToCart ? (
          "Actualizando…"
        ) : (
          <>
            Agregado al carrito{" "}
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z"
                fill="#fff"
              />
              <path
                d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                fill="#fff"
              />
              <path
                d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z"
                fill="#fff"
              />
            </svg>
          </>
        )}
      </Toast>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 1;
  top: 0;

  .header {
    display: grid;
    width: 100%;
    padding: var(--size-gap) var(--size-gutter);
    grid-template-columns: var(--size-input) 1fr min-content min-content;
    grid-template-areas: "logo nada searchButton cartButton" "navHeader navHeader navHeader navHeader";
    align-items: center;
    background-color: var(--background);
  }

  .header::after {
    grid-area: navHeader;
    content: "";
    display: block;
    width: var(--space-2xl);
    z-index: 1;
    align-self: stretch;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
    justify-self: flex-end;
  }

  @media (min-width: 640px) {
    .header {
      grid-template-areas: "logo navHeader searchButton cartButton";
    }
  }

  .logo {
    height: 2.4rem;
    display: flex;
    grid-area: logo;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .logo:hover {
    border: 1px solid var(--primary);
    box-shadow: var(--shadow);
  }

  .nav {
    grid-area: navHeader;
    align-self: stretch;
  }

  .searchButton {
    color: var(--text-color-secondary);
    grid-area: searchButton;
    width: var(--size-input);
    height: var(--size-input);
    display: grid;
    place-items: center;
  }

  .searchButton:hover {
    color: var(--text-color);
  }

  .searchButton[aria-current="page"] {
    color: var(--primary);
  }
`
