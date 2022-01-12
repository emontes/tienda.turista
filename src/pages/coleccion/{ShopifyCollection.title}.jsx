import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
import { Seo } from "../../components/seo"
import slugify from "@sindresorhus/slugify"
import { MoreButton } from "../../components/more-button"
import styled from "styled-components"

export default function Products({
  data: { collection, products },
  pageContext: { title },
}) {
  return (
    <Layout>
      <Seo title={`${title} products`} />
      {/* <h1 className={title}>{vendor}</h1> */}
      <Title>{title}</Title>
      <Subtitle>{collection.description}</Subtitle>
      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <MoreButton to={`/search?v=${slugify(title)}#more`}>
          More Products
        </MoreButton>
      )}
    </Layout>
  )
}

const Title = styled.h1`
  font-size: var(--text-display);
  font-weight: var(--bold);
  margin: 1rem 2rem 0;
`
const Subtitle = styled.h2`
  font-size: var(--tex-prose);
  font-weight: var(--bold);
  color: var(--text-color-secondary);
  margin: 0 2rem;
`

export const query = graphql`
  query($title: String!) {
    collection: shopifyCollection(title: { eq: $title }) {
      title
      description
    }
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
