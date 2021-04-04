import React, { useEffect, useState } from "react"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

import { faPoll } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import theme from "../../styles/theme"
import { SecondaryButton } from "./button"
import styled from "styled-components"

const Modal = () => {
  const hasOpened = localStorage.getItem("opened_modal")
  const [open, setOpen] = useState(!hasOpened)
  const closeModal = () => setOpen(false)

  useEffect(() => {
    localStorage.setItem("opened_modal", true)
  }, [setOpen])

  return (
    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <CloseButton onClick={closeModal}>&times;</CloseButton>
      <h3 style={{ margin: "8px 0" }}>
        <FontAwesomeIcon
          icon={faPoll}
          color={theme.color.secondary}
          style={{ marginRight: 8 }}
        />{" "}
        Participe da nossa Pesquisa!
      </h3>
      <p>
        Anualmente, a comunidade Android Dev BR realiza uma pesquisa para
        entender o panorama do mercado de desenvolvimento Android no Brasil e no
        exterior. Então se você trabalha com Android, pedimos que responda o
        nosso formulário de forma honesta e coerente.
      </p>
      <HideOnSm>
        <span role="img" aria-label="Atenção">
          ⚠️
        </span>{" "}
        <strong>IMPORTANTE:</strong> Como sempre, a pesquisa é completamente
        anônima e fazemos questão de preservar a identidade de todo mundo que
        responde.
      </HideOnSm>
      <hr />
      <p>
        Você pode ver também o resultado da pesquisa do ano passado no nosso{" "}
        <a
          href="http://panorama.androiddevbr.org/"
          rel="noreferrer"
          target="_blank"
        >
          panorama
        </a>
        .
      </p>
      <SecondaryButton
        href="https://forms.gle/P8VSJJbZLGtjjgp28"
        target="_blank"
        style={{ float: "right", marginTop: 0 }}
      >
        Responder pesquisa
      </SecondaryButton>
    </Popup>
  )
}

export default Modal

const CloseButton = styled.button`
  position: absolute;
  right: 18px;
  top: 12px;
  ${(props) => props.theme.font_size.regular}
`

const HideOnSm = styled.p`
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    display: none;
  }
`
