import styled from "styled-components"

export const CardsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 0 -1rem;
`

export const CardItem = styled.li`
  padding: 1rem;
  width: 33.3333%;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 50%;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 100%;
  }
`

export const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 10px 8px -8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const CardContent = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.color.background.light};
`

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  vertical-align: middle;
  object-fit: cover;
  object-position: center;
`