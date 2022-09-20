import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideos from '../TrendingVideos'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideosMainContainer,
  SavedVideosSideBarContainer,
  SavedVideosSoloContainer,
  SavedVideosBannerContainer,
  SavedVideosIconNameContainer,
  SavedVideosIconContainer,
  TrendingIcon,
  RouteText,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  SuccessContainer,
} from './styledComponents'

const SavedVideos = () => {
  const getSavedVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideosList} = value

        return (
          <SuccessContainer>
            {savedVideosList.map(eachVideo => (
              <TrendingVideos key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </SuccessContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
  const getNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const noVideosHeadingColor = isDarkTheme ? '#ffffff' : '#000000'
        const noVideosDescriptionColor = isDarkTheme ? '#94a3b8' : '#1e293b'
        return (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideosHeading color={noVideosHeadingColor}>
              No saved videos found
            </NoVideosHeading>
            <NoVideosDescription color={noVideosDescriptionColor}>
              You can save your videos while watching them
            </NoVideosDescription>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
  const getSavedVideosBanner = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bannerBgColor = isDarkTheme ? '#181818' : '#d7dfe9'
        const iconBgColor = isDarkTheme ? '#000000' : '#cbd5e1'
        const routeTextColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <SavedVideosBannerContainer
            data-testid="banner"
            color={bannerBgColor}
          >
            <SavedVideosIconNameContainer>
              <SavedVideosIconContainer color={iconBgColor}>
                <TrendingIcon />
              </SavedVideosIconContainer>
              <RouteText color={routeTextColor}>Saved Videos</RouteText>
            </SavedVideosIconNameContainer>
          </SavedVideosBannerContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value

        const savedVideosCount = savedVideosList.length

        const savedVideosMainBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

        return (
          <>
            <Header />
            <SavedVideosMainContainer>
              <SavedVideosSideBarContainer>
                <SideBar />
              </SavedVideosSideBarContainer>
              <SavedVideosSoloContainer
                color={savedVideosMainBgColor}
                data-testid="savedVideos"
              >
                {getSavedVideosBanner()}
                {savedVideosCount > 0
                  ? getSavedVideosView()
                  : getNoVideosView()}
              </SavedVideosSoloContainer>
            </SavedVideosMainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
