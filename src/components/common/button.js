import styled from "styled-components"

export const SecondaryButton = styled.a`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.color.secondary};
  border-radius: 4px;
  padding: 20px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  display: table;
  margin-top: 20px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
