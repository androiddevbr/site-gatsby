import React from "react"
import styled from "styled-components"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Navigation />
    <NotFoundTextGoup>
      <h1>Ops!</h1>
      <p>Parece que você está tentando acessar uma página que não existe 🤔</p>
    </NotFoundTextGoup>
  </Layout>
)

const NotFoundTextGoup = styled.div`
  padding: 160px 0 80px 60px;
  position: relative;
`

export default NotFoundPage
