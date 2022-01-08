import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import Collections from "../components/Collections"
import HeroSlider from "../components/HeroSlider"
import Services from "../components/Services"
import BottomBanner from "../components/bottom-banner"

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
      <Collections />
      <Services />
      <ProductListing products={data?.shopifyCollection?.products} />
      <BottomBanner />
    </Layout>
  )
}
