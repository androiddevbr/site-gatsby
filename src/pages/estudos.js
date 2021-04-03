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

const ContributePage = () => (
  <StaticQuery
    query={graphql`
      {
        githubRepository(id: { eq: "__github__repository__2" }) {
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
        <SEO title="Como contribuir" />
        <Navigation />
        <ContributeWrapper>
          <Container>
            <ReactMarkdownWithHtml
              plugins={[gfm]}
              children={updateLinks(
                githubRepository.object.text,
                githubRepository.name
              )}
              allowDangerousHtml
            />
          </Container>
        </ContributeWrapper>
        <Footer />
      </Layout>
    )}
  />
)

export default ContributePage

const ContributeWrapper = styled.div`
  padding: 160px 0 80px 0;
  position: relative;
  margin: 0;
`
