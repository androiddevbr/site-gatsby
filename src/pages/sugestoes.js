import React from "react"

import styled from "styled-components"
import ReactMarkdownWithHtml from "react-markdown/with-html"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { Container } from "../components/global"
import { updateLinks } from "../utils"
import Footer from "../components/sections/footer"
import { graphql, StaticQuery } from "gatsby"
import { SecondaryButton } from "../components/common/button"

const SuggestionsPage = () => (
  <StaticQuery
    query={graphql`
      {
        githubRepository(id: { eq: "__github__repository__4" }) {
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
        <SEO title="Sugestões de Temas" />
        <Navigation />
        <SuggestionWrapper>
          <Container>
            <ReactMarkdownWithHtml
              children={updateLinks(
                decodeURIComponent(githubRepository.object.text),
                githubRepository.name
              )}
              allowDangerousHtml
            />
            <SecondaryButton
              target="_blank"
              href="https://github.com/androiddevbr/sugestoes-temas/issues/new?assignees=orafaaraujo&labels=Backlog&template=tema-sugerido.md&title="
            >
              Sugerir tema
            </SecondaryButton>
          </Container>
        </SuggestionWrapper>
        <Footer />
      </Layout>
    )}
  />
)

export default SuggestionsPage

const SuggestionWrapper = styled.div`
  padding: 160px 0 80px 0;
  position: relative;
  margin: 0;
`
