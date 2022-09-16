import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

export const SidebarMainContainer = styled.div`
  height: 100%;
  width: 100vw;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 767px) {
    height: 90vh;
    width: 25vw;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
    padding: 10px;
  }
`
export const RoutesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  align-self: center;
  @media screen and (min-width: 767px) {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
  }
`

export const EachRouteContainer = styled.div`
  width: 80vw;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  text-align: center;
  @media screen and (min-width: 767px) {
    width: 25vw;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`
export const SidebarLink = styled(Link)`
  text-decoration: none;
`
export const ReactHomeIcon = styled(AiFillHome)`
  color: ${props => props.color};
  font-size: 25px;
  margin-right: 20px;
`

export const ReactTrendingIcon = styled(HiFire)`
  color: ${props => props.color};
  font-size: 25px;
  margin-right: 20px;
`
export const ReactGamingIcon = styled(SiYoutubegaming)`
  color: ${props => props.color};
  font-size: 25px;
  margin-right: 20px;
`

export const ReactAddPlayListIcon = styled(CgPlayListAdd)`
  color: ${props => props.color};
  font-size: 25px;
  margin-right: 20px;
`
export const RouteNameText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => props.weight};
  color: ${props => props.color};
`
export const ContactUsContainer = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: flex-end;
    padding: 10px;
  }
`
export const ContactUsText = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const SocialMediaContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const SocialMediaTypeImage = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 5px;
`
export const ContactUsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color};
  max-width: 75%;
  line-height: 20px;
`
