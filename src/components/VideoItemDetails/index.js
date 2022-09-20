import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  VideoItemDetailsMainContainer,
  VideoItemDetailsSideBarContainer,
  VideoItemDetailsSoloContainer,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  SuccessContainer,
  TitleOfVideo,
  ViewsYearsLikesSavesCombinedContainer,
  ViewsYearsLikesSavesContainer,
  ViewsYearSubscribersText,
  Dot,
  LikesSavesButton,
  ReactLikeIcon,
  ReactDisLikeIcon,
  ReactAddPlayListIcon,
  LikeDisLikeSaveText,
  Separator,
  ChannelLogoNameScbscribersDescriptionContainer,
  ChannelLogo,
  ChannelNameSubscribersDescriptionContainet,
  ChannelTitleDescriptionText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoItemApiStatus: apiStatusConstants.initial,
    completeVideoDetails: {},
    activeLikeOrDisLike: '',
    isSaved: false,
  }

  componentDidMount = () => {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({videoItemApiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const videoDetails = data.video_details

      const updatedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }

      this.setState({
        videoItemApiStatus: apiStatusConstants.success,
        completeVideoDetails: updatedData,
      })
    } else {
      this.setState({videoItemApiStatus: apiStatusConstants.failure})
    }
  }

  getLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadingContainer>
  )

  onClickRetry = () => {
    this.getVideoDetails()
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

  onClickLike = () => {
    this.setState({activeLikeOrDisLike: 'LIKE'})
  }

  onClickDisLike = () => {
    this.setState({activeLikeOrDisLike: 'DISLIKE'})
  }

  getSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, removeVideo, saveVideo} = value

        const {completeVideoDetails, activeLikeOrDisLike, isSaved} = this.state

        const {
          title,
          videoUrl,
          channel,
          viewCount,
          publishedAt,
          description,
        } = completeVideoDetails

        const {name, profileImageUrl, subscriberCount} = channel

        const videoChannelTitleDescriptionColor = isDarkTheme
          ? '#ffffff'
          : '#000000'
        const viewsDotYearsSubscribersTextColor = isDarkTheme
          ? '#64748b'
          : '#1e293b'

        const likeButtonColor =
          activeLikeOrDisLike === 'LIKE' ? '#2563eb' : '#64748b'
        const disLikeButtonColor =
          activeLikeOrDisLike === 'DISLIKE' ? '#2563eb' : '#64748b'
        const saveButtonTextColor = isSaved ? '#2563eb' : '#64748b'
        const saveButtonText = isSaved ? 'Saved' : 'Save'

        const uploadedAt = formatDistanceToNow(new Date(publishedAt)).split(' ')

        const uploadedDate = `${uploadedAt[1]} ${uploadedAt[2]} ago`

        const onClickSaveRemove = () => {
          if (isSaved) {
            removeVideo(completeVideoDetails)
          } else {
            saveVideo(completeVideoDetails)
          }
          this.setState(prevState => ({isSaved: !prevState.isSaved}))
        }

        return (
          <SuccessContainer>
            <ReactPlayer url={videoUrl} height="60vh" width="70vw" controls />
            <TitleOfVideo color={videoChannelTitleDescriptionColor}>
              {title}
            </TitleOfVideo>
            <ViewsYearsLikesSavesCombinedContainer>
              <ViewsYearsLikesSavesContainer>
                <ViewsYearSubscribersText
                  color={viewsDotYearsSubscribersTextColor}
                >{`${viewCount} views`}</ViewsYearSubscribersText>
                <Dot color={viewsDotYearsSubscribersTextColor}>.</Dot>
                <ViewsYearSubscribersText
                  color={viewsDotYearsSubscribersTextColor}
                >
                  {uploadedDate}
                </ViewsYearSubscribersText>
              </ViewsYearsLikesSavesContainer>
              <ViewsYearsLikesSavesContainer>
                <LikesSavesButton type="button" onClick={this.onClickLike}>
                  <ReactLikeIcon color={likeButtonColor} />
                  <LikeDisLikeSaveText color={likeButtonColor}>
                    Like
                  </LikeDisLikeSaveText>
                </LikesSavesButton>
                <LikesSavesButton type="button" onClick={this.onClickDisLike}>
                  <ReactDisLikeIcon color={disLikeButtonColor} />
                  <LikeDisLikeSaveText color={disLikeButtonColor}>
                    Dislike
                  </LikeDisLikeSaveText>
                </LikesSavesButton>
                <LikesSavesButton type="button" onClick={onClickSaveRemove}>
                  <ReactAddPlayListIcon color={saveButtonTextColor} />
                  <LikeDisLikeSaveText color={saveButtonTextColor}>
                    {saveButtonText}
                  </LikeDisLikeSaveText>
                </LikesSavesButton>
              </ViewsYearsLikesSavesContainer>
            </ViewsYearsLikesSavesCombinedContainer>
            <Separator />
            <ChannelLogoNameScbscribersDescriptionContainer>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <ChannelNameSubscribersDescriptionContainet>
                <ChannelTitleDescriptionText
                  color={videoChannelTitleDescriptionColor}
                >
                  {name}
                </ChannelTitleDescriptionText>
                <ViewsYearSubscribersText
                  color={viewsDotYearsSubscribersTextColor}
                >{`${subscriberCount} subscribers`}</ViewsYearSubscribersText>
                <ChannelTitleDescriptionText
                  color={videoChannelTitleDescriptionColor}
                >
                  {description}
                </ChannelTitleDescriptionText>
              </ChannelNameSubscribersDescriptionContainet>
            </ChannelLogoNameScbscribersDescriptionContainer>
          </SuccessContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  getAllVideoItemViews = () => {
    const {videoItemApiStatus} = this.state

    switch (videoItemApiStatus) {
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

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const videoItemDetailsMainBgColor = isDarkTheme
            ? '#0f0f0f'
            : '#f9f9f9'

          return (
            <>
              <Header />
              <VideoItemDetailsMainContainer>
                <VideoItemDetailsSideBarContainer>
                  <SideBar />
                </VideoItemDetailsSideBarContainer>
                <VideoItemDetailsSoloContainer
                  color={videoItemDetailsMainBgColor}
                  data-testid="videoItemDetails"
                >
                  {this.getAllVideoItemViews()}
                </VideoItemDetailsSoloContainer>
              </VideoItemDetailsMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
