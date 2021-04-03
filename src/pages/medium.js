import React, { useEffect, useState } from "react"

import styled from "styled-components"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { Container } from "../components/global"
import Footer from "../components/sections/footer"
import theme from "../styles/theme"
import {
  CardsContainer,
  CardContent,
  CardImage,
  Card,
  CardItem,
} from "../components/common/card"
import { SecondaryButton } from "../components/common/button"

const MediumPage = () => {
  const [data, setData] = useState({
    feed: {
      title: "",
      description: "",
      link: "",
    },
    items: [],
  })

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/android-dev-br&api_key=${process.env.RSS_TOKEN}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [setData])

  return (
    <Layout>
      <SEO title="Medium" />
      <Navigation />
      <MediumWrapper>
        <Container>
          <h1>Medium</h1>
          <p>{data.feed.description.replace("- Medium", "")}</p>
          <CardsContainer>
            {(data.items || []).map((item) => (
              <CardItem key={item.guid}>
                <a href={item.link} target="_blank">
                  <Card>
                    <div style={{ height: "200px" }}>
                      <CardImage src={item.thumbnail} />
                    </div>
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
                        }).format(new Date(item.pubDate))}
                      </p>
                      <h4
                        style={{
                          margin: "2px 0",
                          fontSize: "20px",
                          height: "62px",
                          overflow: "hidden",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          marginBottom: "8px",
                          color: theme.color.accent,
                        }}
                      >
                        {item.author}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </CardItem>
            ))}
          </CardsContainer>

          <SecondaryButton href={data.feed.link} target="_blank">
            Ver mais posts
          </SecondaryButton>
        </Container>
      </MediumWrapper>
      <Footer />
    </Layout>
  )
}

export default MediumPage

const MediumWrapper = styled.div`
  padding: 160px 0 80px 0;
  position: relative;
  margin: 0;
`