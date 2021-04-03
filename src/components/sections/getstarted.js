import React, { useState } from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"

import { Container, Section } from "../global"

const GetStarted = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [result, setResult] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    const names = name.split(" ")
    const data = await addToMailchimp(email, {
      FNAME: names.shift() || "",
      LNAME: names.join(" "),
    })
    setResult({ ...data, success: data.result === "success" })
    setTimeout(() => setResult({}), 5000)
  }

  return (
    <StyledSection>
      <GetStartedContainer>
        <GetStartedTitle>Assine a nossa Newsletter!</GetStartedTitle>
        <NewsletterForm onSubmit={handleSubmit} netlify>
          <NewsletterInput
            required
            placeholder="Nome"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <NewsletterInput
            required
            placeholder="E-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <NewsletterButton>Cadastrar</NewsletterButton>
        </NewsletterForm>
        <Subtitle
          success={result.success}
          style={{ display: (result.msg || "").length > 0 ? "block" : "none" }}
          dangerouslySetInnerHTML={{ __html: result.msg }}
        />
        <FormSubtitle>
          Enviamos os links mais importantes enviados pelo Slack e as novidades
          do Android e da Comunidade
        </FormSubtitle>
      </GetStartedContainer>
    </StyledSection>
  )
}

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
  width: 60%;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
    width: 80%;
  }
`

const FormSubtitle = styled.span`
  ${(props) => props.theme.font_size.xxsmall}
  padding: 0 20px;
  text-align: center;
`

const NewsletterInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  margin-right: 12px;
  &:focus {
    box-shadow: inset ${(props) => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    display: block;
    width: 100%;
    margin-right: 0px;
  }
`

const NewsletterButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.div`
  ${(props) => props.theme.font_size.small}
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 14px;
  transition: display 1s ease-in-out;
  color: ${(props) =>
    props.success ? props.theme.color.green : props.theme.color.red};
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    padding: 16px;
    text-align: center;
  }
`
