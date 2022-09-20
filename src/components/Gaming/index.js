import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideos from '../GamingVideos'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingMainContainer,
  GamingSideBarContainer,
  GamingSoloContainer,
  GamingBannerContainer,
  GamingIconNameContainer,
  GamingIconContainer,
  GamingIcon,
  RouteText,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  SuccessContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingApiStatus: apiStatusConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({gamingApiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()

      if (data.total > 0) {
        const updatedData = data.videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          viewCount: eachVideo.view_count,
        }))

        this.setState({
          gamingApiStatus: apiStatusConstants.success,
          gamingVideosList: updatedData,
        })
      }
    } else {
      this.setState({gamingApiStatus: apiStatusConstants.failure})
    }
  }

  getLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadingContainer>
  )

  onClickRetry = () => {
    this.getGamingVideos()
  }

  getFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const failureHeadingColor = isDarkTheme ? '#ffffff' : '#000000'
        const failureDescriptionColor = isDarkTheme ? '#94a3b8' : '#1e293b'
        return (
          <FailureContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeading color={failureHeadingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription color={failureDescriptionColor}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  getSuccessView = () => {
    const {gamingVideosList} = this.state

    return (
      <SuccessContainer>
        {gamingVideosList.map(eachVideo => (
          <GamingVideos key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </SuccessContainer>
    )
  }

  getAllGamingViews = () => {
    const {gamingApiStatus} = this.state

    switch (gamingApiStatus) {
      case apiStatusConstants.inProgress:
        return this.getLoadingView()
      case apiStatusConstants.success:
        return this.getSuccessView()
      case apiStatusConstants.failure:
        return this.getFailureView()
      default:
        return null
    }
  }

  getGamingBanner = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bannerBgColor = isDarkTheme ? '#181818' : '#d7dfe9'
        const iconBgColor = isDarkTheme ? '#000000' : '#cbd5e1'
        const routeTextColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <GamingBannerContainer data-testid="banner" color={bannerBgColor}>
            <GamingIconNameContainer>
              <GamingIconContainer color={iconBgColor}>
                <GamingIcon />
              </GamingIconContainer>
              <RouteText color={routeTextColor}>Gaming</RouteText>
            </GamingIconNameContainer>
          </GamingBannerContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const gamingMainBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <GamingMainContainer>
                <GamingSideBarContainer>
                  <SideBar />
                </GamingSideBarContainer>
                <GamingSoloContainer
                  color={gamingMainBgColor}
                  data-testid="gaming"
                >
                  {this.getGamingBanner()}
                  {this.getAllGamingViews()}
                </GamingSoloContainer>
              </GamingMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
