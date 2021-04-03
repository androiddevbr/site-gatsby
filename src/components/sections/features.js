import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="iniciativas">
    <StyledContainer>
      <Subtitle>INICIATIVAS</Subtitle>
      <SectionTitle>Participe da comunidade!</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Mural de vagas</FeatureTitle>
          <FeatureText>
            Diversas <Link to="/vagas">vagas</Link> Android para todos os
            níveis, no Brasil e no mundo, presencial ou remoto.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Medium</FeatureTitle>
          <FeatureText>
            Diversos <Link to="/medium">posts</Link> sobre desenvolvimento
            Android para qualquer nível de conhecimento.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Slack</FeatureTitle>
          <FeatureText>
            Diversos canais para comunicação, dúvidas técnicas, ajuda na
            carreira, anúncios da comunidade, etc.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Podcast</FeatureTitle>
          <FeatureText>
            <Link to="/podcast">Episódios</Link> sobre diversos assuntos
            relacionados a desenvolvimento Android.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Newsletter</FeatureTitle>
          <FeatureText>
            Informativos mensais sobre novidades e eventos de desenvolvimento
            Android.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Materiais de estudo</FeatureTitle>
          <FeatureText>
            Lista de sugestões de{" "}
            <Link to="/estudos">materiais para estudo</Link> da plataforma
            Android. Para todos os níveis.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
