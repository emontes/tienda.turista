import * as React from "react"
import { ProductCard } from "./product-card"
import styled from "styled-components"

// To optimize LCP we mark the first product card as eager so the image gets loaded faster
export function ProductListing({ products = [] }) {
  return (
    <Wrapper>
      {products.map((p, index) => (
        <ProductCard product={p} key={p.id} eager={index === 0} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: var(--product-grid);
  place-items: center;
  gap: var(--size-gutter-raw);
  padding: 2rem; var(--size-gutter-raw);
`
