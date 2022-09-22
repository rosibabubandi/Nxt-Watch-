import styled from 'styled-components'

import {HiFire} from 'react-icons/hi'

export const SavedVideosMainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`
export const SavedVideosSideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    width: 25vw;
    display: flex;
    height: 100vh;
    flex-shrink: 0;
  }
`
export const SavedVideosSoloContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 10px;
  text-align: center;
  background-color: ${props => props.color};
  padding-top: 65px;
  @media screen and (min-width: 767px) {
    min-height: 100vh;
    width: 75vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 10px;
    background-color: ${props => props.color};
    align-self: center;
    padding-top: 55px;
    overflow-x: hidden;
  }
`
export const SavedVideosBannerContainer = styled.div`
  height: 110px;
  width: 100%;
  padding-left: 20px;
  background-color: ${props => props.color};
  display: flex;
`
export const SavedVideosIconNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
`
export const SavedVideosIconContainer = styled.div`
  height: 70px;
  width: 70px;
  background-color: ${props => props.color};
  border-radius: 40px;
  padding: 5px;
  margin-right: 20px;
`
export const TrendingIcon = styled(HiFire)`
  height: 50px;
  width: 50px;
  color: #ff0000;
`
export const RouteText = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: ${props => props.color};
  margin-left: 10px;
  @media screen and (min-width: 767px) {
    font-family: 'Roboto';
    font-size: 45px;
    color: ${props => props.color};
    margin-left: 20px;
  }
`
export const NoVideosContainer = styled.div`
  height: 100%;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const NoVideosImage = styled.img`
  height: 30%;
  width: 60%;
  margin-bottom: 10px;
`

export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-bottom: 10px;
`
export const NoVideosDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
  margin-bottom: 10px;
`
export const SuccessContainer = styled.ul`
  margin-left: 0px;
  list-style-type: none;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
