import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideos from '../HomeVideos'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeMainContainer,
  HomeSideBarContainer,
  HomeSoloContainer,
  HomeTopBanner,
  HomeBannerLeftSideContainer,
  HomeCompanyLogo,
  HomeTopBannerText,
  GetItNowButton,
  CancelButtonContainer,
  BannerCancelButton,
  HomeBannerCloseButton,
  HomeSearchContainer,
  SearchInputElement,
  SearchIconButton,
  SearchIcon,
  LoadingContainer,
  HomeFailureNoResultsContainer,
  HomeFailureNoResultsImage,
  FailureNoResultsHeading,
  FailureNoResultsDescription,
  RetryButton,
  SuccessContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  noSearchResults: 'NO_SEARCH_RESULTS',
}

class Home extends Component {
  state = {
    homeApiStatus: apiStatusConstants.initial,
    userSearch: '',
    homeVideosList: [],
    isBannerVisible: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({homeApiStatus: apiStatusConstants.inProgress})
    const {userSearch} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${userSearch}`

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
          homeApiStatus: apiStatusConstants.success,
          homeVideosList: updatedData,
        })
      } else {
        this.setState({homeApiStatus: apiStatusConstants.noSearchResults})
      }
    } else {
      this.setState({homeApiStatus: apiStatusConstants.failure})
    }
  }

  onCloseHideBanner = () => {
    this.setState({isBannerVisible: false})
  }

  getHomeBanner = () => (
    <HomeTopBanner data-testid="banner">
      <HomeBannerLeftSideContainer>
        <HomeCompanyLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <HomeTopBannerText>
          Buy Nxt Watch Premium prepaid plans with UPI
        </HomeTopBannerText>
        <GetItNowButton>GET IT NOW</GetItNowButton>
      </HomeBannerLeftSideContainer>
      <CancelButtonContainer>
        <BannerCancelButton
          type="button"
          data-testid="close"
          onClick={this.onCloseHideBanner}
        >
          <HomeBannerCloseButton />
        </BannerCancelButton>
      </CancelButtonContainer>
    </HomeTopBanner>
  )

  onChangeSearchInput = event => {
    this.setState({userSearch: event.target.value})
  }

  onClickSearch = () => {
    this.getHomeVideos()
  }

  getSearchBar = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const {userSearch} = this.state

        const searchContainerBorder = isDarkTheme ? '#383838' : '#94a3b8'
        const searchInputColor = isDarkTheme ? '#606060' : '#94a3b8'
        const searchInputBorderColor = isDarkTheme ? '#383838' : '#94a3b8'
        const searchButtonBorderColor = isDarkTheme ? '#383838' : '#94a3b8'
        const searchButtonBgColor = isDarkTheme ? '#909090' : '#cbd5e1'
        return (
          <HomeSearchContainer color={searchContainerBorder}>
            <SearchInputElement
              type="search"
              value={userSearch}
              onChange={this.onChangeSearchInput}
              placeholder="Search"
              color={searchInputColor}
              borderColor={searchInputBorderColor}
            />
            <SearchIconButton
              type="button"
              data-testid="searchButton"
              onClick={this.onClickSearch}
              color={searchButtonBorderColor}
              bgColor={searchButtonBgColor}
            >
              <SearchIcon />
            </SearchIconButton>
          </HomeSearchContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  getLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadingContainer>
  )

  onClickRetry = () => {
    this.getHomeVideos()
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
          <HomeFailureNoResultsContainer>
            <HomeFailureNoResultsImage src={failureImage} alt="failure view" />
            <FailureNoResultsHeading color={failureHeadingColor}>
              Oops! Something Went Wrong
            </FailureNoResultsHeading>
            <FailureNoResultsDescription color={failureDescriptionColor}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureNoResultsDescription>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </HomeFailureNoResultsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  getNoResultsView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        const headingDescriptionColor = isDarkTheme ? '#94a3b8' : '#1e293b'

        return (
          <HomeFailureNoResultsContainer>
            <HomeFailureNoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureNoResultsHeading color={headingColor}>
              No Search results found
            </FailureNoResultsHeading>
            <FailureNoResultsDescription color={headingDescriptionColor}>
              Try different key words or remove search filter
            </FailureNoResultsDescription>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </HomeFailureNoResultsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  getSuccessView = () => {
    const {homeVideosList} = this.state

    return (
      <SuccessContainer>
        {homeVideosList.map(eachVideo => (
          <HomeVideos key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </SuccessContainer>
    )
  }

  getAllHomeViews = () => {
    const {homeApiStatus} = this.state

    switch (homeApiStatus) {
      case apiStatusConstants.inProgress:
        return this.getLoadingView()
      case apiStatusConstants.success:
        return this.getSuccessView()
      case apiStatusConstants.failure:
        return this.getFailureView()
      case apiStatusConstants.noSearchResults:
        return this.getNoResultsView()
      default:
        return null
    }
  }

  render() {
    const {isBannerVisible} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const homeMainBgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <>
              <Header />
              <HomeMainContainer>
                <HomeSideBarContainer>
                  <SideBar />
                </HomeSideBarContainer>
                <HomeSoloContainer color={homeMainBgColor} data-testid="home">
                  {isBannerVisible && this.getHomeBanner()}
                  {this.getSearchBar()}
                  {this.getAllHomeViews()}
                </HomeSoloContainer>
              </HomeMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
