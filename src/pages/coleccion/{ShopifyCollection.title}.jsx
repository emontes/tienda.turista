import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
import { Seo } from "../../components/seo"
import slugify from "@sindresorhus/slugify"
import { MoreButton } from "../../components/more-button"
// import { title } from "../index.module.css"

export default function Products({
  data: { products },
  pageContext: { title },
}) {
  return (
    <Layout>
      <Seo title={`${title} products`} />
      {/* <h1 className={title}>{vendor}</h1> */}
      <h1>{title}</h1>
      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <MoreButton to={`/search?v=${slugify(title)}#more`}>
          More Products
        </MoreButton>
      )}
    </Layout>
  )
}

export const query = graphql`
  query($title: String!) {
    products: allShopifyProduct(
      filter: { collections: { elemMatch: { title: { eq: $title } } } }
      sort: { fields: publishedAt, order: DESC }
      limit: 24
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
