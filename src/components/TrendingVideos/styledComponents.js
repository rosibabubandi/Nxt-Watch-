import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const EachVideoContainer = styled.li`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  @media screen and (min-width: 576px) {
    width: 75vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    align-self: left;
    margin: 20px;
  }
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const VideoImage = styled.img`
  height: 200px;
  width: 90%;
  @media screen and (min-width: 576px) {
    height: 200px;
    width: 45%;
  }
`
export const ChannelLogoAndTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 576px) {
    width: 50%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const ChannelLogoContainer = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const ChannelLogo = styled.img`
  margin-top: 15px;
  margin-right: 15px;
  height: 30px;
  width: 30px;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media screen and (min-width: 576px) {
    margin-left: 15px;
    max-width: 90%;
  }
`
export const TitleOfVideo = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
  line-height: 30px;
`
export const ChannelNameAndViewYearCombinedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const ViewsYearContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ChannelNameViewsYearText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  margin-right: 5px;
`
export const FirstDotContainer = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const Dot = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
`
