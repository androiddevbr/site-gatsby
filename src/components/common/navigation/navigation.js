import React, { Component } from "react"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"

import { Container } from "../../global"
import {
  Nav,
  NavLink,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from "./style"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy currentClassName="active" mobile={mobile} offset={-64}>
        <NavLink to="/vagas">Vagas</NavLink>
        <NavLink to="/medium">Medium</NavLink>
        <NavLink to="/podcast">Podcast</NavLink>
        <NavLink to="/estudos">Materiais de Estudo</NavLink>
        <NavLink to="/sugestoes">Sugestões de Temas</NavLink>
        <NavLink to="/como-contribuir">Como Contribuir</NavLink>
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <StaticQuery
        query={graphql`
          query {
            logo: file(
              sourceInstanceName: { eq: "images" }
              name: { eq: "logo" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data) => (
          <Nav {...this.props} scrolled={this.state.hasScrolled} mobileMenuOpen={mobileMenuOpen}>
            <StyledContainer>
              <Brand>
                <Scrollspy
                  offset={-64}
                  item={["top"]}
                  currentClassName="active"
                >
                  <Link to="/" onClick={this.closeMobileMenu}>
                    <StyledImage fluid={data.logo.childImageSharp.fluid} />
                  </Link>
                </Scrollspy>
              </Brand>
              <Mobile>
                <button
                  onClick={this.toggleMobileMenu}
                  style={{ color: "black" }}
                >
                  {this.state.mobileMenuOpen ? (
                    <X size={24} alt="close menu" />
                  ) : (
                    <Menu size={24} alt="open menu" />
                  )}
                </button>
              </Mobile>

              <Mobile hide>{this.getNavList({})}</Mobile>
            </StyledContainer>
            <Mobile>
              {mobileMenuOpen && (
                <MobileMenu>
                  <Container>{this.getNavList({ mobile: true })}</Container>
                </MobileMenu>
              )}
            </Mobile>
          </Nav>
        )}
      />
    )
  }
}

const StyledImage = styled(Img)`
  width: 60px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 50px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 30px;
  }
`
