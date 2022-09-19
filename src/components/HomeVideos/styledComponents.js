import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const EachVideoContainer = styled.li`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  @media screen and (min-width: 767px) {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px;
  }
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const VideoImage = styled.img`
  height: 160px;
  width: 100%;
`
export const ChannelLogoAndTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
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
`
export const TitleOfVideo = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
`
export const ChannelNameAndViewYearCombinedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 767px) {
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
  @media screen and (min-width: 767px) {
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
