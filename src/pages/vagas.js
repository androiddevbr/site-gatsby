import React, { useEffect, useState } from "react"

import styled from "styled-components"
import { Octokit } from "@octokit/core"
import ReactMarkdownWithHtml from "react-markdown/with-html"
import gfm from "remark-gfm"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { Container } from "../components/global"
import { updateLinks } from "../utils"
import Footer from "../components/sections/footer"
import { graphql, StaticQuery } from "gatsby"
import {
  Card,
  CardContent,
  CardItem,
  CardsContainer,
} from "../components/common/card"
import theme from "../styles/theme"
import { SecondaryButton } from "../components/common/button"

const JobsPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const octokit = new Octokit({
      auth: process.env.GATSBY_GITHUB_TOKEN,
    })
    octokit
      .request("GET /repos/androiddevbr/vagas/issues", {
        state: "open",
        per_page: 12,
        sort: "created",
        direction: "desc",
      })
      .then((response) => {
        setData(response.data)
      })
  }, [setData])

  return (
    <StaticQuery
      query={graphql`
        {
          githubRepository(id: { eq: "__github__repository__3" }) {
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
          <SEO title="Vagas" />
          <Navigation />
          <JobsWrapper>
            <Container>
              <h1>Vagas</h1>
              <CardsContainer>
                {(data || []).map((item) => (
                  <CardItem key={item.id}>
                    <a href={item.html_url} rel="noreferrer" target="_blank">
                      <Card>
                        <CardContent>
                          <p
                            style={{
                              marginBottom: "8px",
                              fontSize: "12px",
                              color: theme.color.black.lightest,
                            }}
                          >
                            {new Intl.DateTimeFormat("pt-BR", {
                              dateStyle: "medium",
                            }).format(new Date(item.created_at))}
                          </p>
                          <h4
                            style={{
                              margin: "2px 0 12px",
                              fontSize: "20px",
                              height: "62px",
                              overflow: "hidden",
                            }}
                          >
                            {item.title}
                          </h4>
                          {item.labels.map((label) => (
                            <Chip key={label.id}>{label.name}</Chip>
                          ))}
                        </CardContent>
                      </Card>
                    </a>
                  </CardItem>
                ))}
              </CardsContainer>

              <SecondaryButton
                href="https://github.com/androiddevbr/vagas/issues"
                target="_blank"
                rel="noreferrer"
              >
                Ver mais vagas
              </SecondaryButton>

              <ReactMarkdownWithHtml
                plugins={[gfm]}
                children={updateLinks(
                  decodeURIComponent(githubRepository.object.text),
                  githubRepository.name
                )}
                allowDangerousHtml
              />
            </Container>
          </JobsWrapper>
          <Footer />
        </Layout>
      )}
    />
  )
}

export default JobsPage

const JobsWrapper = styled.div`
  padding: 160px 0 80px 0;
  position: relative;
  margin: 0;
`

const Chip = styled.div`
  display: inline-block;
  background: ${(props) => props.theme.color.green};
  padding: 4px 12px;
  border-radius: 32px;
  font-size: 10px;
  margin-right: 8px;
  margin-top: 8px;
  color: ${(props) => props.theme.color.accent};
`
