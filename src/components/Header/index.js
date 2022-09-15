import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import SideBar from '../SideBar'
import {
  HeaderMainContainer,
  HeaderWebsiteLogo,
  HeaderLink,
  HeaderIconsContainer,
  ThemeButton,
  ReactLightModeIcon,
  ReactDarkModeIcon,
  HamburgerMenuContainer,
  ReactHamburgerMenuIcon,
  SmallDevicesLogoutButton,
  ReactLogoutIcon,
  UserProfileContainer,
  UserProfileImage,
  MediumDevicesLogoutButton,
  PopupMainContainer,
  PopupHeading,
  PopupButtonsContainer,
  PopupCancelButton,
  PopupConfirmButton,
  PopupHamburgerMenu,
  HamburgerMenuCloseButtonContainer,
  HamburgerCloseButton,
  HamburgerMenuListContainer,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const headerWebSiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const hamburgerMenuLogoutButtonColor = isDarkTheme ? '#ffffff' : '#000000'
      const mediumLogoutButtonColor = isDarkTheme ? '#ffffff' : '#3b82f6'
      const popupHeading = isDarkTheme ? '#ffffff' : '#00306e'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onChangeTheme = () => {
        changeTheme()
      }

      return (
        <HeaderMainContainer color={bgColor}>
          <HeaderLink to="/">
            <HeaderWebsiteLogo src={headerWebSiteLogo} alt="channel logo" />
          </HeaderLink>
          <HeaderIconsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? <ReactLightModeIcon /> : <ReactDarkModeIcon />}
            </ThemeButton>
            <HamburgerMenuContainer>
              <Popup
                modal
                trigger={
                  <ReactHamburgerMenuIcon
                    color={hamburgerMenuLogoutButtonColor}
                  />
                }
              >
                {close => (
                  <PopupHamburgerMenu color={bgColor}>
                    <HamburgerMenuCloseButtonContainer>
                      <HamburgerCloseButton
                        color={hamburgerMenuLogoutButtonColor}
                        onClick={() => close()}
                      />
                    </HamburgerMenuCloseButtonContainer>
                    <HamburgerMenuListContainer>
                      {/* <SideBar /> */}
                    </HamburgerMenuListContainer>
                  </PopupHamburgerMenu>
                )}
              </Popup>
            </HamburgerMenuContainer>
            <UserProfileContainer>
              <UserProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </UserProfileContainer>
            <Popup
              modal
              trigger={
                <SmallDevicesLogoutButton type="button">
                  <ReactLogoutIcon color={hamburgerMenuLogoutButtonColor} />
                </SmallDevicesLogoutButton>
              }
            >
              {close => (
                <PopupMainContainer color={bgColor}>
                  <PopupHeading color={popupHeading}>
                    Are you sure want to logout?
                  </PopupHeading>
                  <PopupButtonsContainer>
                    <PopupCancelButton onClick={() => close()}>
                      Cancel
                    </PopupCancelButton>
                    <PopupConfirmButton onClick={onClickLogout}>
                      Confirm
                    </PopupConfirmButton>
                  </PopupButtonsContainer>
                </PopupMainContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <MediumDevicesLogoutButton
                  type="button"
                  color={mediumLogoutButtonColor}
                >
                  Logout
                </MediumDevicesLogoutButton>
              }
            >
              {close => (
                <PopupMainContainer color={bgColor}>
                  <PopupHeading color={popupHeading}>
                    Are you sure want to logout?
                  </PopupHeading>
                  <PopupButtonsContainer>
                    <PopupCancelButton onClick={() => close()}>
                      Cancel
                    </PopupCancelButton>
                    <PopupConfirmButton onClick={onClickLogout}>
                      Confirm
                    </PopupConfirmButton>
                  </PopupButtonsContainer>
                </PopupMainContainer>
              )}
            </Popup>
          </HeaderIconsContainer>
        </HeaderMainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
