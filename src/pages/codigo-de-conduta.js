import React from "react"

import styled from "styled-components"
import ReactMarkdownWithHtml from "react-markdown/with-html"
import gfm from "remark-gfm"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { Container } from "../components/global"
import { updateLinks } from "../utils"
import Footer from "../components/sections/footer"
import { graphql, StaticQuery } from "gatsby"

const CoCPage = () => (
  <StaticQuery
    query={graphql`
      {
        githubRepository(id: { eq: "__github__repository__0" }) {
          name
          object {
            text
          }
          id
        }
      }
    `}
    render={({ githubRepository }) => (
      <Layout>
        <SEO title="Código de conduta" />
        <Navigation />
        <CoCWrapper>
          <Container>
            <h1>Código de Conduta | Android Dev BR</h1>
            <ReactMarkdownWithHtml
              plugins={[gfm]}
              children={updateLinks(
                decodeURIComponent(githubRepository.object.text),
                githubRepository.name
              )}
              allowDangerousHtml
            />
          </Container>
        </CoCWrapper>
        <Footer />
      </Layout>
    )}
  />
)

export default CoCPage

const CoCWrapper = styled.div`
  padding: 160px 0 80px 0;
  position: relative;
  margin: 0;
`
