import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {VscHome} from 'react-icons/vsc'
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
    width: 25vh;
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
  @media screen and (min-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
  }
`

export const EachRouteContainer = styled.div`
  width: 100%;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
`
export const HeaderLink = styled(Link)`
  text-decoration: none;
`
