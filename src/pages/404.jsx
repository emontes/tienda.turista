import * as React from "react"
import { Layout } from "../components/layout"
import styled from "styled-components"
import Collections from "../components/Collections"

export default function NotFoundPage() {
  return (
    <Layout>
      <Wrapper>
        <h1 className="heading">Página no encontrada</h1>
        <p className="paragraph">Lo siento, no encontramos lo que buscas..</p>
        <p>Puedes Intentar buscar en nuestras colecciones</p>
        <Collections />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--size-gutter-raw);
  padding-right: var(--size-gutter-raw);
  margin-top: var(--space-2xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .heading {
    line-height: var(--dense);
    font-size: var(--text-display);
    font-weight: var(--bold);
  }

  .paragraph {
    font-size: var(--text-lg);
    margin-top: var(--space-2xl);
  }
`
