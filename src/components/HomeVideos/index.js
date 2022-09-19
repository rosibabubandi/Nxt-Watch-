import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  EachVideoContainer,
  VideoLink,
  VideoImage,
  ChannelLogoAndTextContainer,
  ChannelLogo,
  TextContainer,
  TitleOfVideo,
  ChannelNameAndViewYearCombinedContainer,
  ViewsYearContainer,
  ChannelNameViewsYearText,
  FirstDotContainer,
  Dot,
} from './styledComponents'

const HomeVideos = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {videoDetails} = props

      const {
        id,
        title,
        thumbnailUrl,
        channel,
        viewCount,
        publishedAt,
      } = videoDetails

      const uploadedAt = formatDistanceToNow(new Date(publishedAt)).split(' ')

      const uploadedDate = `${uploadedAt[1]} ${uploadedAt[2]} ago`

      const videoTitleColor = isDarkTheme ? '#ffffff' : '#000000'
      const videoOtherTextColor = isDarkTheme ? '#94a3b8' : '#1e293b'

      return (
        <EachVideoContainer>
          <VideoLink to={`/videos/${id}`}>
            <VideoImage src={thumbnailUrl} alt="video thumbnail" />
            <ChannelLogoAndTextContainer>
              <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
              <TextContainer>
                <TitleOfVideo color={videoTitleColor}>{title}</TitleOfVideo>
                <ChannelNameAndViewYearCombinedContainer>
                  <ChannelNameViewsYearText color={videoOtherTextColor}>
                    {channel.name}
                  </ChannelNameViewsYearText>
                  <FirstDotContainer>
                    <Dot color={videoOtherTextColor}>.</Dot>
                  </FirstDotContainer>
                  <ViewsYearContainer>
                    <ChannelNameViewsYearText
                      color={videoOtherTextColor}
                    >{`${viewCount} views`}</ChannelNameViewsYearText>
                    <Dot>.</Dot>
                    <ChannelNameViewsYearText color={videoOtherTextColor}>
                      {uploadedDate}
                    </ChannelNameViewsYearText>
                  </ViewsYearContainer>
                </ChannelNameAndViewYearCombinedContainer>
              </TextContainer>
            </ChannelLogoAndTextContainer>
          </VideoLink>
        </EachVideoContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeVideos
