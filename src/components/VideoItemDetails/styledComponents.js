import styled from 'styled-components'

import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

export const VideoItemDetailsMainContainer = styled.div`
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
export const VideoItemDetailsSideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    width: 25vw;
    display: flex;
    height: 100vh;
    flex-shrink: 0;
  }
`
export const VideoItemDetailsSoloContainer = styled.div`
  width: 100vw;
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
export const LoadingContainer = styled.div`
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  height: 100%;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const FailureImage = styled.img`
  height: 30%;
  width: 60%;
  margin-bottom: 10px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-bottom: 10px;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
  margin-bottom: 10px;
`

export const RetryButton = styled.button`
  height: 35px;
  width: 90px;
  background-color: #4f46e5;
  border-width: 0px;
  color: #ffffff;
  border-radius: 5px;
  font-family: 'Roboto';
  cursor: pointer;
`
export const SuccessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 5px;
  @media screen and (min-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: 5px;
  }
`
export const TitleOfVideo = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
  line-height: 30px;
`
export const ViewsYearsLikesSavesCombinedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 767px) {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const ViewsYearsLikesSavesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const LikesSavesButton = styled.button`
  background-color: inherit;
  height: 35px;
  width: 100px;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;
`
export const ReactAddPlayListIcon = styled(CgPlayListAdd)`
  color: ${props => props.color};
  font-size: 25px;
`
export const ReactLikeIcon = styled(BiLike)`
  color: ${props => props.color};
  font-size: 25px;
`
export const ReactDisLikeIcon = styled(BiDislike)`
  color: ${props => props.color};
  font-size: 25px;
`
export const LikeDisLikeSaveText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 15px;
  margin-left: 10px;
`
export const Separator = styled.hr`
  border: 1px solid #64748b;
  width: 90%;
`
export const ChannelLogoNameScbscribersDescriptionContainer = styled.div`
  display: flex;
  text-align: left;
`
export const ChannelLogo = styled.img`
  margin-top: 15px;
  margin-right: 15px;
  height: 30px;
  width: 30px;
`
export const ChannelNameSubscribersDescriptionContainet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ViewsYearSubscribersText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  margin-right: 5px;
`
export const ChannelTitleDescriptionText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-right: 5px;
  line-height: 25px;
`
export const Dot = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
`
