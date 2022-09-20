import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideos from '../TrendingVideos'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingMainContainer,
  TrendingSideBarContainer,
  TrendingSoloContainer,
  TrendingBannerContainer,
  TrendingIconNameContainer,
  TrendingIconContainer,
  TrendingIcon,
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

class Trending extends Component {
  state = {
    trendingApiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({trendingApiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'

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
          channel: {
            name: eachVideo.channel.name,
            profileImageUrl: eachVideo.channel.profile_image_url,
          },
          viewCount: eachVideo.view_count,
          publishedAt: eachVideo.published_at,
        }))

        this.setState({
          trendingApiStatus: apiStatusConstants.success,
          trendingVideosList: updatedData,
        })
      }
    } else {
      this.setState({trendingApiStatus: apiStatusConstants.failure})
    }
  }

  getLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadingContainer>
  )

  onClickRetry = () => {
    this.getTrendingVideos()
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
    const {trendingVideosList} = this.state

    return (
      <SuccessContainer>
        {trendingVideosList.map(eachVideo => (
          <TrendingVideos key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </SuccessContainer>
    )
  }

  getAllTrendingViews = () => {
    const {trendingApiStatus} = this.state

    switch (trendingApiStatus) {
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

  getTrendingBanner = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bannerBgColor = isDarkTheme ? '#181818' : '#d7dfe9'
        const iconBgColor = isDarkTheme ? '#000000' : '#cbd5e1'
        const routeTextColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <TrendingBannerContainer data-testid="banner" color={bannerBgColor}>
            <TrendingIconNameContainer>
              <TrendingIconContainer color={iconBgColor}>
                <TrendingIcon />
              </TrendingIconContainer>
              <RouteText color={routeTextColor}>Trending</RouteText>
            </TrendingIconNameContainer>
          </TrendingBannerContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const trendingMainBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <TrendingMainContainer>
                <TrendingSideBarContainer>
                  <SideBar />
                </TrendingSideBarContainer>
                <TrendingSoloContainer
                  color={trendingMainBgColor}
                  data-testid="trending"
                >
                  {this.getTrendingBanner()}
                  {this.getAllTrendingViews()}
                </TrendingSoloContainer>
              </TrendingMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
