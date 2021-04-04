import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faGithub,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Comunidade</span>
        <ul>
          <li>
            <Link to="/comunidade">Quem Somos</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/diversidade-inclusao">Diversidade & Inclusão</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/codigo-de-conduta">Código de Conduta</Link>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Acompanhe nas redes</span>
        <ul>
          <FooterIcon>
            <a href="https://www.linkedin.com/company/android-dev-br">
              <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
            </a>
          </FooterIcon>
          <FooterIcon>
            <a href="https://www.instagram.com/androiddevbr/">
              <FontAwesomeIcon icon={faInstagram} size={"2x"} />
            </a>
          </FooterIcon>
          <FooterIcon>
            <a href="https://www.facebook.com/AndroidDevBrOrg/">
              <FontAwesomeIcon icon={faFacebook} size={"2x"} />
            </a>
          </FooterIcon>
          <FooterIcon>
            <a href="https://twitter.com/AndroidDevBROrg">
              <FontAwesomeIcon icon={faTwitter} size={"2x"} />
            </a>
          </FooterIcon>
          <FooterIcon>
            <a href="https://t.me/androiddevbr">
              <FontAwesomeIcon icon={faTelegram} size={"2x"} />
            </a>
          </FooterIcon>
          <FooterIcon>
            <a href="https://github.com/androiddevbr">
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </a>
          </FooterIcon>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <BrandContainer>
      <Logo>Android Dev BR</Logo>
      <FooterCredit>
        <p>
          Ícones por{" "}
          <a href="https://fontawesome.com/" rel="noreferrer" target="_blank">
            FontAwesome
          </a>
        </p>
        <p>
          Illustrações por{" "}
          <a
            href="https://storyset.com/mobile"
            rel="noreferrer"
            target="_blank"
          >
            Freepik Storyset
          </a>
        </p>
        <p>
          A imagem do Android foi criada pelo{" "}
          <a
            href="https://source.android.com/"
            rel="noreferrer"
            target="_blank"
          >
            Android Open Source Project
          </a>{" "}
          e foi usada de acordo com os termos da Licença{" "}
          <a
            href="https://creativecommons.org/licenses/by/2.5/"
            rel="noreferrer"
            target="_blank"
          >
            Creative Commons 2.5
          </a>
          .
        </p>
      </FooterCredit>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Logo = styled.div`
  font-family: ${(props) => props.theme.font.extrabold};
  ${(props) => props.theme.font_size.large};
  color: ${(props) => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    color: ${(props) => props.theme.color.black.regular};
    li {
      font-family: ${(props) => props.theme.font.normal};
      font-size: 15px;
      display: inline;
      margin-right: 12px;
    }
  }
`

const FooterIcon = styled.li`
  width: 30px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-bottom: 12px;
  }
`

const FooterCredit = styled.span`
  margin-top: 12px;
  text-align: end;

  > p {
    ${(props) => props.theme.font_size.xxxsmall}
    margin: 8px 0 0;
  }
`

export default Footer
