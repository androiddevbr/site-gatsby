import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHandHoldingHeart,
  faComments,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { Container } from "../components/global"
import Footer from "../components/sections/footer"
import theme from "../styles/theme"

const DiversityPage = () => (
  <Layout>
    <SEO title="Diversidade & Inclusão" />
    <Navigation />
    <DiversityWrapper>
      <Container>
        <h1>Diversidade & Inclusão</h1>
        <div style={{ display: "flex" }}>
          <DiversityItem>
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              size="5x"
              color={theme.color.secondary}
            />
            <DiversitySubtitle>Acolhimento</DiversitySubtitle>
            <p>
              Nós adotamos a política de tolerância zero para assédio,
              perseguições ou discriminações e respeitamos os limites e
              identidade das pessoas.
            </p>
          </DiversityItem>
          <DiversityItem>
            <FontAwesomeIcon
              icon={faComments}
              size="5x"
              color={theme.color.secondary}
            />
            <DiversitySubtitle>Segurança</DiversitySubtitle>
            <p>
              Cultivamos uma rede de suporte e encorajamento para todos e suas
              variadas formas de expressão de maneira responsável.
            </p>
          </DiversityItem>
          <DiversityItem>
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="5x"
              color={theme.color.secondary}
            />
            <DiversitySubtitle>Boa conduta</DiversitySubtitle>
            <p>
              Prezamos pelo bom senso e pela boa conduta, por isso temos um
              código de conduta que deve ser seguido a risca sob pena de
              expulsão da comunidade.{" "}
              <Link to="/codigo-de-conduta">Veja aqui</Link>
            </p>
          </DiversityItem>
        </div>
        <h3>A nossa comunidade deve ser um lugar seguro para TODOS!</h3>
      </Container>
    </DiversityWrapper>
    <Footer />
  </Layout>
)

export default DiversityPage

const DiversityWrapper = styled.div`
  padding: 160px 0 80px 0;
  position: relative;
  margin: 0;
`

const DiversityItem = styled.div`
  padding-right: 20px;
`

const DiversitySubtitle = styled.h4`
  margin-bottom: 12px;
`
