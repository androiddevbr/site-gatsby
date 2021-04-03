import React from "react"
import styled from "styled-components"
import Image from "../components/common/image"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { Container } from "../components/global"
import Footer from "../components/sections/footer"

const ComunityPage = () => (
  <Layout>
    <SEO title="Comunidade" />
    <Navigation />
    <CommunityWrapper>
      <Container>
        <CommunityGroup>
          <TextContainer>
            <h1>Quem Somos?</h1>
            <p>
              <strong>
                Uma comunidade brasileira para troca de experiências e
                aprendizado Android
              </strong>
              <br />
              <br />
              Somos uma comunidade para profissionais e estudantes do
              desenvolvimento Android. <br /> Nenhuma experiência prévia é
              necesssária para fazer parte. <br />
              Nosso objetivo é levantar conteúdos e discussões relevantes dentro
              do própósito da comunidade.
            </p>
          </TextContainer>
          <Image />
        </CommunityGroup>
      </Container>
    </CommunityWrapper>
    <Footer />
  </Layout>
)

export default ComunityPage

const CommunityWrapper = styled.div`
  padding: 160px 0 80px 0;
  position: relative;
  margin: 0;
`

const CommunityGroup = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column-reverse;
  }
`

const TextContainer = styled.div`
  flex-grow: 0.4;
  margin-left: 24px;
`
