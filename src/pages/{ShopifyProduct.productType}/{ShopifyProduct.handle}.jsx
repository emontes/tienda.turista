import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../components/layout"
import isEqual from "lodash.isequal"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import { StoreContext } from "../../context/store-context"
import { AddToCart } from "../../components/add-to-cart"
import { NumericInput } from "../../components/numeric-input"
import { formatPrice } from "../../utils/format-price"
import { Seo } from "../../components/seo"
import { CgChevronRight as ChevronIcon } from "react-icons/cg"
import {
  productBox,
  container,
  header,
  productImageWrapper,
  productImageList,
  productImageListItem,
  scrollForMore,
  noImagePreview,
  optionsWrapper,
  priceValue,
  selectVariant,
  labelFont,
  breadcrumb,
  tagList,
  addToCartStyle,
  metaSection,
  productDescription,
} from "./product-page.module.css"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import device from "../../assets/themes/device"

export default function Product({ data: { product, suggestions } }) {
  const {
    options,
    variants,
    collections,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    descriptionHtml,
    images,
    images: [firstImage],
  } = product
  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? []

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  const handleOptionChange = (index, event) => {
    const value = event.target.value

    if (value === "") {
      return
    }

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }

    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    setVariant({ ...selectedVariant })
  }

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  )

  const hasVariants = variants.length > 1
  const hasImages = images.length > 0
  const hasMultipleImages = true || images.length > 1
  const sliderSettings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,

    dots: true,
    pauseOnHover: true,
  }
  return (
    <Layout>
      {firstImage ? (
        <Seo
          title={title}
          description={description.substring(0, 250)}
          image={getSrc(firstImage.gatsbyImageData)}
        />
      ) : undefined}
      <Wrapper>
        <div className="product-box" style={{ marginBottom: "2rem" }}>
          {hasImages && (
            <Slider className="slider" {...sliderSettings}>
              {images.map((image, index) => {
                return (
                  <div className="slide" key={index}>
                    <GatsbyImage
                      objectFit="cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      alt={
                        image.altText
                          ? image.altText
                          : `Imagen del Producto ${title} #${index + 1}`
                      }
                      image={image.gatsbyImageData}
                      className="product-image"
                    />
                  </div>
                )
              })}
            </Slider>
          )}
          {!hasImages && (
            <span className="no-image-preview">No tiene imagen</span>
          )}
          <div>
            <div className="breadcrumb">
              <Link to={product.productTypeSlug}>{product.productType}</Link>
              <ChevronIcon size={12} />
            </div>
            <h1 className="header">{title}</h1>

            <div className="price-options-wrapper">
              <h2 className="price-value">
                <span>{price}</span>
              </h2>
              <fieldset className="options-wrapper">
                {hasVariants &&
                  options.map(({ id, name, values }, index) => {
                    const { image } = variant

                    return (
                      <div key={id}>
                        <div className="select-variant" key={id}>
                          <select
                            aria-label="Variants"
                            onChange={(event) =>
                              handleOptionChange(index, event)
                            }
                          >
                            {/* <option value="">{`Selecciona ${name}`}</option> */}
                            {values.map((value) => (
                              <option value={value} key={`${name}-${value}`}>
                                {value}
                              </option>
                            ))}
                          </select>
                        </div>
                        {image && (
                          <GatsbyImage
                            image={variant.image.gatsbyImageData}
                            alt="image"
                            className="product-image"
                          />
                        )}
                      </div>
                    )
                  })}
              </fieldset>
            </div>
            <div className="add-to-cart-style">
              <NumericInput
                aria-label="Quantity"
                onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                onChange={(event) => setQuantity(event.currentTarget.value)}
                value={quantity}
                min="1"
                max="20"
              />
              <AddToCart
                variantId={productVariant.storefrontId}
                quantity={quantity}
                available={available}
              />
            </div>
            <div className={metaSection}>
              <span className="label-font">Colección</span>
              <span className="tag-list">
                {product.collections.map((collection, index) => {
                  return (
                    <Link to={`/coleccion/${collection.handle}`} key={index}>
                      {collection.title}
                    </Link>
                  )
                })}
              </span>
              <span className="label-font">Etiquetas</span>
              <span className="tag-list">
                {product.tags.map((tag, index) => (
                  <Link to={`/search?t=${tag}`} key={index}>
                    {tag}
                  </Link>
                ))}
              </span>
            </div>
          </div>
        </div>
        {/* <p className={productDescription}>{description}</p> */}

        <div
          className={productDescription}
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  padding: var(--size-gutter-raw);
  .product-box {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: var(--space-3xl);
    @media ${device.tablet} {
      grid-template-columns: 1fr 2fr;
    }
    @media ${device.laptop} {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .slider {
    width: 90vw;
    margin: 0 auto;
    @media ${device.tablet} {
      width: 45vw;
    }
    @media ${device.tablet} {
      width: 35vw;
    }
  }

  .product-image {
    transition: all 1s;
    :hover {
      box-shadow: var(--dark-shadow);
      transform: scale(1.5);
    }
  }

  .header {
    font-size: var(--text-display);
    font-weight: var(--bold);
    margin-bottom: var(--space-xl);
    line-height: var(--dense);
  }

  .productDescription {
    font-size: var(--text-prose);
  }

  .no-image-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    font-size: var(--text-lg);
  }

  .price-options-wrapper {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .price-value > span {
    font-size: var(--text-display);
    font-weight: var(--bold);
    line-height: var(--dense);
    color: var(--primary);
  }

  .price-value {
    padding: var(--space-lg) 0;
  }

  .options-wrapper {
    display: grid;
    grid-template-columns: var(--product-grid);
    gap: var(--space-lg);
    padding-bottom: var(--space-lg);
  }

  .add-to-cart-style {
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: var(--space-lg);
    @media ${device.tablet} {
      grid-template-columns: min-content max-content;
    }
  }

  .select-variant {
    background-color: var(--input-background);
    border-radius: var(--radius-md);
    cursor: pointer;
    margin-top: var(--space-md);
    min-width: 24ch;
    position: relative;
  }

  .select-variant select {
    appearance: none;
    background-color: transparent;
    border: none;
    color: var(--input-text);
    cursor: inherit;
    font-size: var(--text-md);
    font-weight: var(--medium);
    height: var(--size-input);
    margin: 0;
    padding: var(--space-sm) var(--space-lg);
    padding-right: var(--space-2xl);
    width: 100%;
  }

  .select-variant::after {
    background-image: url("data:image/svg+xml,%3Csvg fill='none' height='8' viewBox='0 0 13 8' width='13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m6.87794 7.56356c-.19939.23023-.55654.23024-.75593 0l-5.400738-6.23623c-.280438-.32383-.050412-.82733.377968-.82733h10.80146c.4284 0 .6584.5035.378.82733z' fill='%2378757a'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    content: "";
    height: 8px;
    position: absolute;
    right: var(--space-lg);
    top: 50%;
    transform: translateY(-50%);
    width: 13px;
    pointer-events: none;
  }

  .label-font {
    font-size: var(--space-lg);
    line-height: var(--space-xl);
    padding-right: var(--space-md);
    color: var(--text-color-secondary);
  }

  .tag-list {
    margin-bottom: 5px;
    a {
      font-weight: var(--semibold);
      color: var(--text-color-secondary);
      margin-right: var(--space-md);
      border: 1px solid #e5e5e5;
      padding: 2px 5px;
      transition: all 0.3s;
      :hover {
        color: var(--white);
        background: var(--grey-90);
      }
    }
  }

  .breadcrumb {
    color: var(--text-color-secondary);
    font-size: var(--text-sm);
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .breadcrumb a:hover {
    color: var(--text-color);
    text-decoration: underline;
  }

  .metaSection {
    padding-top: var(--space-3xl);
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: baseline;
  }
`

export const query = graphql`
  query($id: String!, $productType: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      descriptionHtml
      productType
      productTypeSlug: gatsbyPath(
        # filePath: "/productos/{ShopifyProduct.productType}"
        filePath: "/{ShopifyProduct.productType}"
      )
      collections {
        handle
        title
      }
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        # altText
        id
        gatsbyImageData(layout: CONSTRAINED, width: 640, aspectRatio: 1)
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        image {
          gatsbyImageData
        }
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
        id
      }
    }
    suggestions: allShopifyProduct(
      limit: 3
      filter: { productType: { eq: $productType }, id: { ne: $id } }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`
