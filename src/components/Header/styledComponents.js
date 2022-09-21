import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {MdClose} from 'react-icons/md'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

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
  align-items: center;
  padding: 10px;
  position: fixed;
`
export const HeaderWebsiteLogo = styled.img`
  height: 35px;
  max-width: 130px;
  cursor: pointer;
  @media screen and (min-width: 767px) {
    height: 40px;
    max-width: 180px;
    cursor: pointer;
  }
`
export const HeaderIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 150px;
  max-width: 400px;
`
export const HeaderLink = styled(Link)`
  text-decoration: none;
`
export const ThemeButton = styled.button`
  height: 35px;
  width: 35px;
  background-color: inherit;
  border-width: 0px;
  outline: none;
`
export const ReactLightModeIcon = styled(BsBrightnessHigh)`
  font-size: 25px;
  color: #ffffff;
  cursor: pointer;
  margin: 5px;
`
export const ReactDarkModeIcon = styled(BsMoon)`
  font-size: 25px;
  color: #000000;
  cursor: pointer;
  margin: 5px;
`
export const HamburgerMenuContainer = styled.div`
  display: flex;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const ReactHamburgerMenuIcon = styled(GiHamburgerMenu)`
  font-size: 30px;
  color: ${props => props.color};
  margin: 7px;
  cursor: pointer;
  margin: 5px;
`
export const ReactLogoutIcon = styled(FiLogOut)`
  font-size: 27px;
  color: ${props => props.color};
  cursor: pointer;
  margin: 5px;
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
  height: 50px;
  width: 50px;
  background-color: inherit;
  border-width: 0px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
    margin-right: 10px;
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
    font-family: 'Roboto';
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
`

export const PopupMainContainer = styled.div`
  height: 30vh;
  width: 80vw;
  background-color: ${props => props.color};
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  @media screen and (min-width: 767px) {
    height: 30vh;
    width: 25vw;
    background-color: ${props => props.color};
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;
  }
`

export const PopupHeading = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const PopupButtonsContainer = styled.div`
  width: 75%;
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
  cursor: pointer;
`

export const PopupConfirmButton = styled.button`
  height: 35px;
  width: 85px;
  background-color: #3b82f6;
  border-radius: 5px;
  border: none;
  font-family: 'Roboto';
  color: #ffffff;
  cursor: pointer;
`
export const PopupHamburgerMenu = styled.div`
  height: 95vh;
  width: 95vw;
  background-color: ${props => props.color};
  background-size: cover;
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
  cursor: pointer;
`
export const HamburgerMenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 10px;
`
