import React from "react"
import { Layout } from "../components/layout"
import styled from "styled-components"
// import Banner from "../components/Banner";
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
const PolicyTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, date },
      body,
    },
  } = data

  return (
    <Layout>
      <Wrapper>
        {/* post info */}
        <article>
          <h1>{title}</h1>

          <MDXRenderer>{body}</MDXRenderer>
          <p>Ultima actualización: {date}</p>
        </article>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  width: 85vw;
  margin: 0 auto;
  margin-bottom: 4rem;
  font-size: 1.1rem;
  white-space: pre-line;

  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 1.6rem;
    margin-top: 1.6rem;
  }
  p {
    margin-top: 1.1rem;
  }

  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
`

export default PolicyTemplate

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        slug
        title
      }
      body
    }
  }
`
