import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import styled from "styled-components"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "destacados" }) {
      products {
        ...ProductCard
      }
    }
  }
`
function Hero(props) {
  return (
    <Wrapper>
      <h1 className="intro">Bienvenido a la Tienda del Turista</h1>
    </Wrapper>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}

const Wrapper = styled.div`
  padding-left: var(--size-gutter-raw);
  padding-right: var(--size-gutter-raw);
  padding-top: var(--space-lg);
  padding-bottom: var(--space-3xl);
  max-width: 76ch;

  .intro {
    padding-bottom: var(--space-lg);
    line-height: var(--dense);
    font-size: var(--text-display);
    color: var(--text-color-secondary);
  }
`
