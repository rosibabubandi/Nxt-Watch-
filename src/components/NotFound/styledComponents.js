import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`
export const NotFoundSideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
  }
`

export const NotFoundSoloContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 10px;
  text-align: center;
  background-color: ${props => props.color};
  @media screen and (min-width: 767px) {
    width: 75vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-grow: 1;
    background-color: ${props => props.color};
    align-self: center;
  }
`

export const NotFoundImage = styled.img`
  height: 60%;
  width: 50%;
  margin: 7px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
`
