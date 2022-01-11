import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import device from "../assets/themes/device"
const query = graphql`
  {
    collections: allShopifyCollection {
      nodes {
        title
        description
        handle
        image {
          gatsbyImageData
        }
      }
    }
  }
`

const Collections = () => {
  const data = useStaticQuery(query)

  return (
    <Wrapper>
      {data.collections.nodes.map((item, index) => {
        const image = getImage(item.image)
        if (image) {
          return (
            <div key={index} className="collection">
              <GatsbyImage image={image} alt={item.name} className="image" />
              <div className="container">
                <div className="title-box">
                  <div className="title">{item.title}</div>
                  <div className="sub-title">{item.description}</div>
                  <Link className="link" to={`/coleccion/${item.handle}`}>
                    Ver
                  </Link>
                </div>
              </div>
            </div>
          )
        } else {
          return null
        }
      })}
    </Wrapper>
  )
}

export default Collections

const Wrapper = styled.div`
  padding: 3rem 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }

  .collection {
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
    :hover {
      box-shadow: var(--light-shadow);
      .image {
        transform: scale(1.2);
        filter: blur(3px) brightness(50%);
      }
    }
    @media ${device.tablet} {
      width: 31%;
    }
  }
  .image {
    height: 100%;

    transition: all 0.5s;
  }
  .container {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .title-box {
    width: 70%;
    background: rgba(255, 255, 255, 0.9);
    text-align: right;
    padding: 0.5rem 1rem;
  }
  .title {
    font-size: 1.4rem;
    font-weight: 700;
  }
  .sub-title {
    font-size: 1.2rem;
  }
  .link {
    padding: 2px 1rem;
    border-radius: 40%;
    color: var(--primary);
    font-size: 1.4rem;
    background: rgba(255, 255, 255, 0.8);
    margin-bottom: 5px;

    transition: all 0.2s;
    :hover {
      box-shadow: var(--shadow);
    }
  }
`
