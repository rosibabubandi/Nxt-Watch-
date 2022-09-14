import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {MdOutlineLightMode, MdOutlineDarkMode, MdClose} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

export const HeaderMainContainer = styled.nav`
  height: 10vh;
  width: 100vw;
  background-color: ${props => props.color};
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`
export const HeaderWebsiteLogo = styled.img`
  height: 50px;
  max-width: 110px;
  @media screen and (min-width: 767px) {
    height: 50px;
    max-width: 110px;
  }
`
export const HeaderIconsContainer = styled.div`
  display: flex;
`
export const HeaderLink = styled(Link)`
  text-decoration: none;
`
export const ThemeButton = styled.button`
  height: 30px;
  width: 30px;
  background-color: inherit;
  border-width: 0px;
  outline: none;
`
export const ReactLightModeIcon = styled(MdOutlineLightMode)`
  font-size: 20px;
  color: #ffffff;
`
export const ReactDarkModeIcon = styled(MdOutlineDarkMode)`
  font-size: 20px;
  color: #000000;
`
export const HamburgerMenuContainer = styled.div`
  display: flex;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const ReactHamburgerMenuIcon = styled(GiHamburgerMenu)`
  font-size: 20px;
  color: ${props => props.color};
  margin: 7px;
`
export const ReactLogoutIcon = styled(FiLogOut)`
  font-size: 20px;
  color: ${props => props.color};
`

export const UserProfileContainer = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
  }
`

export const UserProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin: 7px;
`
export const SmallDevicesLogoutButton = styled.button`
  height: 30px;
  width: 30px;
  background-color: inherit;
  border-width: 0px;
  outline: none;
  display: flex;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const MediumDevicesLogoutButton = styled.button`
  display: none;
  @media screen and (min-width: 767px) {
    height: 35px;
    width: 100px;
    background-color: inherit;
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
    font-family: 'Roboto';
    border-radius: 7px;
  }
`

export const PopupMainContainer = styled.div`
  height: 30vh;
  width: 30vw;
  background-color: ${props => props.color};
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PopupHeading = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const PopupButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const PopupCancelButton = styled.button`
  height: 35px;
  width: 85px;
  background-color: inherit;
  border-radius: 5px;
  border: 1px solid #383838;
  font-family: 'Roboto';
  color: #383838;
`

export const PopupConfirmButton = styled.button`
  height: 35px;
  width: 85px;
  background-color: #3b82f6;
  border-radius: 5px;
  border: none;
  font-family: 'Roboto';
  color: #ffffff;
`
export const PopupHamburgerMenu = styled.div`
  height: 100vh;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`
export const HamburgerMenuCloseButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
`
export const HamburgerCloseButton = styled(MdClose)`
  font-size: 20px;
  color: ${props => props.color};
`
export const HamburgerMenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 10px;
`
