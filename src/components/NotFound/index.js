import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundMainContainer,
  NotFoundSideBarContainer,
  NotFoundSoloContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const notFoundHeading = isDarkTheme ? '#ffffff' : '#000000'
      const notFoundDescription = isDarkTheme ? '#f4f4f4' : '#1e293b'

      return (
        <>
          <Header />
          <NotFoundMainContainer>
            <NotFoundSideBarContainer>
              {/* <SideBar /> */}
            </NotFoundSideBarContainer>
            <NotFoundSoloContainer color={notFoundBgColor}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading color={notFoundHeading}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription color={notFoundDescription}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundSoloContainer>
          </NotFoundMainContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
