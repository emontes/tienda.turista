import * as React from "react"
import { StoreContext } from "../context/store-context"
import styled from "styled-components"

export function AddToCart({ variantId, quantity, available, ...props }) {
  const { addVariantToCart, loading } = React.useContext(StoreContext)

  function addToCart(e) {
    e.preventDefault()
    addVariantToCart(variantId, quantity)
  }

  return (
    <Wrapper
      type="submit"
      onClick={addToCart}
      disabled={!available || loading}
      {...props}
    >
      {available ? "Agregar al Carrito" : "Sin Existencias"}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  color: var(--text-color-inverted);
  background-color: var(--primary);
  align-self: flex-end;
  padding: var(--space-sm) var(--space-xl);
  border-radius: var(--radius-md);
  font-weight: var(--bold);
  align-items: center;
  height: var(--size-input);
  justify-content: center;
  transition: var(--transition);

  :hover {
    box-shadow: var(--shadow);
  }
`
