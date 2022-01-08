import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"

import HeroSlider from "../components/HeroSlider"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "destacados" }) {
      products {
        ...ProductCard
      }
    }
  }
`

export default function IndexPage({ data }) {
  return (
    <Layout>
      <HeroSlider />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
