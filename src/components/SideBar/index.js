import NxtWatchContextContext from '../../context/NxtWatchContext'
import {
  SidebarMainContainer,
  RoutesContainer,
  EachRouteContainer,
  SidebarLink,
  ReactHomeIcon,
  ReactTrendingIcon,
  ReactGamingIcon,
  ReactAddPlayListIcon,
  RouteNameText,
  ContactUsContainer,
  ContactUsText,
  SocialMediaContainer,
  SocialMediaTypeImage,
  ContactUsDescription,
} from './styledComponents'

let activeRouterBaseStylesHome = []
let activeRouterBaseStylesTrending = []
let activeRouterBaseStylesGaming = []
let activeRouterBaseStylesSavedVideos = []

const SideBar = () => (
  <NxtWatchContextContext.Consumer>
    {value => {
      const {isDarkTheme, activeRoute, activeRouteName} = value

      const setActiveHomeRoute = () => {
        activeRoute('HOME')
      }

      const setActiveTrendingRoute = () => {
        activeRoute('TRENDING')
      }

      const setActiveGamingRoute = () => {
        activeRoute('GAMING')
      }

      const setActiveSavedVideosRoute = () => {
        activeRoute('SAVEDVIDEOS')
      }

      if (isDarkTheme) {
        activeRouterBaseStylesHome =
          activeRouteName === 'HOME'
            ? ['#1e293b', '#ff0000', '#ffffff', '500']
            : ['inherit', '#909090', '#ffffff', '200']
        activeRouterBaseStylesTrending =
          activeRouteName === 'TRENDING'
            ? ['#1e293b', '#ff0000', '#ffffff', '500']
            : ['inherit', '#909090', '#ffffff', '200']
        activeRouterBaseStylesGaming =
          activeRouteName === 'GAMING'
            ? ['#1e293b', '#ff0000', '#ffffff', '500']
            : ['inherit', '#909090', '#ffffff', '200']
        activeRouterBaseStylesSavedVideos =
          activeRouteName === 'SAVEDVIDEOS'
            ? ['#1e293b', '#ff0000', '#ffffff', '500']
            : ['inherit', '#909090', '#ffffff', '200']
      } else {
        activeRouterBaseStylesHome =
          activeRouteName === 'HOME'
            ? ['#cbd5e1', '#ff0b37', '#000000', '500']
            : ['inherit', '#313131', '#000000', '200']
        activeRouterBaseStylesTrending =
          activeRouteName === 'TRENDING'
            ? ['#cbd5e1', '#ff0b37', '#000000', '500']
            : ['inherit', '#313131', '#000000', '200']
        activeRouterBaseStylesGaming =
          activeRouteName === 'GAMING'
            ? ['#cbd5e1', '#ff0b37', '#000000', '500']
            : ['inherit', '#313131', '#000000', '200']
        activeRouterBaseStylesSavedVideos =
          activeRouteName === 'SAVEDVIDEOS'
            ? ['#cbd5e1', '#ff0b37', '#000000', '500']
            : ['inherit', '#313131', '#000000', '200']
      }

      const mainContainerBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const contactUsTextsColor = isDarkTheme ? '#ffffff' : '#212121'

      return (
        <SidebarMainContainer color={mainContainerBgColor}>
          <RoutesContainer>
            <SidebarLink to="/">
              <EachRouteContainer
                color={activeRouterBaseStylesHome[0]}
                onClick={setActiveHomeRoute}
              >
                <ReactHomeIcon color={activeRouterBaseStylesHome[1]} />
                <RouteNameText
                  color={activeRouterBaseStylesHome[2]}
                  weight={activeRouterBaseStylesHome[3]}
                >
                  Home
                </RouteNameText>
              </EachRouteContainer>
            </SidebarLink>
            <SidebarLink to="/trending">
              <EachRouteContainer
                color={activeRouterBaseStylesTrending[0]}
                onClick={setActiveTrendingRoute}
              >
                <ReactTrendingIcon color={activeRouterBaseStylesTrending[1]} />
                <RouteNameText
                  color={activeRouterBaseStylesTrending[2]}
                  weight={activeRouterBaseStylesTrending[3]}
                >
                  Trending
                </RouteNameText>
              </EachRouteContainer>
            </SidebarLink>
            <SidebarLink to="/gaming">
              <EachRouteContainer
                color={activeRouterBaseStylesGaming[0]}
                onClick={setActiveGamingRoute}
              >
                <ReactGamingIcon color={activeRouterBaseStylesGaming[1]} />
                <RouteNameText
                  color={activeRouterBaseStylesGaming[2]}
                  weight={activeRouterBaseStylesGaming[3]}
                >
                  Gaming
                </RouteNameText>
              </EachRouteContainer>
            </SidebarLink>
            <SidebarLink to="/saved-videos">
              <EachRouteContainer
                color={activeRouterBaseStylesSavedVideos[0]}
                onClick={setActiveSavedVideosRoute}
              >
                <ReactAddPlayListIcon
                  color={activeRouterBaseStylesSavedVideos[1]}
                />
                <RouteNameText
                  color={activeRouterBaseStylesSavedVideos[2]}
                  weight={activeRouterBaseStylesSavedVideos[3]}
                >
                  Saved videos
                </RouteNameText>
              </EachRouteContainer>
            </SidebarLink>
          </RoutesContainer>
          <ContactUsContainer>
            <ContactUsText color={contactUsTextsColor}>
              CONTACT US
            </ContactUsText>
            <SocialMediaContainer>
              <SocialMediaTypeImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaTypeImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaTypeImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <ContactUsDescription color={contactUsTextsColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUsContainer>
        </SidebarMainContainer>
      )
    }}
  </NxtWatchContextContext.Consumer>
)

export default SideBar
