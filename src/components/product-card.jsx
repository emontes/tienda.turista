import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import { formatPrice } from "../utils/format-price"
import styled from "styled-components"

export function ProductCard({ product, eager }) {
  const {
    title,
    priceRangeV2,
    slug,
    images: [firstImage],
    vendor,
    storefrontImages,
  } = product

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  const defaultImageHeight = 200
  const defaultImageWidth = 200
  let storefrontImageData = {}
  if (storefrontImages) {
    const storefrontImage = storefrontImages.edges[0].node
    try {
      storefrontImageData = getShopifyImage({
        image: storefrontImage,
        layout: "fixed",
        width: defaultImageWidth,
        height: defaultImageHeight,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const hasImage =
    firstImage || Object.getOwnPropertyNames(storefrontImageData || {}).length

  return (
    <Wrapper to={slug} aria-label={`View ${title} product page`}>
      {hasImage ? (
        <div className="productImageStyle" data-name="product-image-box">
          <GatsbyImage
            alt={firstImage?.altText ?? title}
            image={firstImage?.gatsbyImageData ?? storefrontImageData}
            loading={eager ? "eager" : "lazy"}
          />
        </div>
      ) : (
        <div style={{ height: defaultImageHeight, width: defaultImageWidth }} />
      )}
      <div className="productDetailsStyle">
        <div className="productVendorStyle">{vendor}</div>
        <h2 as="h2" className="productHeadingStyle">
          {title}
        </h2>
        <div className="productPrice">{price}</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(Link)`
  max-width: 400px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: var(--space-md);
  transition: all 0.3s;
  :hover {
    box-shadow: var(--dark-shadow);
    transform: scale(1.1);
  }

  .productImageStyle {
    margin-bottom: var(--space-md);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .productDetailsStyle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: var(--semibold);
  }

  .productVendorStyle {
    font-size: var(--text-sm);
    color: var(--text-color-secondary);
  }

  .productHeadingStyle {
    width: 100%;
    font-size: var(--text-lg);
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--dense);
  }

  .productPrice {
    color: var(--text-color-secondary);
  }
`

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    slug: gatsbyPath(
      filePath: "/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
    )
    images {
      id
      altText
      gatsbyImageData(aspectRatio: 1, width: 640)
    }
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    vendor
  }
`
