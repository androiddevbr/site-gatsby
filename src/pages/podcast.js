import React, { useEffect, useState } from "react"

import styled from "styled-components"
import { SecondaryButton } from "../components/common/button"
import {
  Card,
  CardContent,
  CardItem,
  CardsContainer,
} from "../components/common/card"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { Container } from "../components/global"
import Footer from "../components/sections/footer"
import theme from "../styles/theme"
import { getTime } from "../utils"

const PodcastPage = () => {
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
      `https://api.rss2json.com/v1/api.json?rss_url=https://anchor.fm/s/1d9d1828/podcast/rss&api_key=${process.env.GATSBY_RSS_TOKEN}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
      })
  }, [setData])

  return (
    <Layout>
      <SEO title="Podcast" />
      <Navigation />
      <PodcastWrapper>
        <Container>
          <h1>Podcast</h1>

          {data && (
            <>
              <p>{data.feed.description}</p>
              <CardsContainer>
                {(data.items || []).map((item) => (
                  <CardItem key={item.guid}>
                    <a href={item.link} target="_blank" rel="noreferrer">
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
                          <p style={{ color: theme.color.accent }}>
                            {getTime(item.enclosure.duration)}
                          </p>
                        </CardContent>
                      </Card>
                    </a>
                  </CardItem>
                ))}
              </CardsContainer>
            </>
          )}
          <SecondaryButton
            href={data.feed.link}
            rel="noreferrer"
            target="_blank"
          >
            Ver mais episódios
          </SecondaryButton>
        </Container>
      </PodcastWrapper>
      <Footer />
    </Layout>
  )
}

export default PodcastPage

const PodcastWrapper = styled.div`
  padding: 160px 0 80px 0;
  position: relative;
  margin: 0;
`
