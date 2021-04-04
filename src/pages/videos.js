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

const YoutubePage = () => {
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
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3UIetA7QQJNyt25BXcUALA&maxResults=6&order=date&type=video&key=${process.env.GATSBY_GOOGLE_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [setData])

  return (
    <Layout>
      <SEO title="Vídeos" />
      <Navigation />
      <YoutubeWrapper>
        <Container>
          <h1>Vídeos</h1>
          {data && (
            <>
              <p>
                Meetups, talks e lives que aconteceram no nosso{" "}
                <a href="https://www.youtube.com/channel/UC3UIetA7QQJNyt25BXcUALA">
                  YouTube
                </a>{" "}
              </p>
              <CardsContainer>
                {(data.items || []).map((item) => (
                  <CardItem key={item.id.videoId}>
                    <a
                      href={`http://www.youtube.com/watch?v=${item.id.videoId}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Card>
                        <div style={{ height: "200px" }}>
                          <CardImage
                            src={item.snippet.thumbnails.high.url}
                          />
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
                            }).format(new Date(item.snippet.publishedAt))}
                          </p>
                          <h4
                            style={{
                              margin: "2px 0",
                              fontSize: "20px",
                              height: "62px",
                              overflow: "hidden",
                            }}
                          >
                            {item.snippet.title}
                          </h4>
                          <p
                            style={{
                              marginBottom: "8px",
                              color: theme.color.accent,
                            }}
                          >
                            {item.snippet.description}
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
            href="https://www.youtube.com/channel/UC3UIetA7QQJNyt25BXcUALA"
            rel="noreferrer"
            target="_blank"
          >
            Ver mais vídeos
          </SecondaryButton>
        </Container>
      </YoutubeWrapper>
      <Footer />
    </Layout>
  )
}

export default YoutubePage

const YoutubeWrapper = styled.div`
  padding: 160px 0 80px 0;
  position: relative;
  margin: 0;
`
