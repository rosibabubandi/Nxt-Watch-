import NxtWatchContext from '../../context/NxtWatchContext'

import {
  EachVideoContainer,
  VideoLink,
  VideoImage,
  TextContainer,
  TitleOfVideo,
  ViewsContainer,
  ViewsText,
} from './styledComponents'

const TrendingVideos = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {videoDetails} = props

      const {id, title, thumbnailUrl, viewCount} = videoDetails

      const videoTitleColor = isDarkTheme ? '#ffffff' : '#000000'
      const videoOtherTextColor = isDarkTheme ? '#94a3b8' : '#1e293b'

      return (
        <VideoLink to={`/videos/${id}`}>
          <EachVideoContainer>
            <VideoImage src={thumbnailUrl} alt="video thumbnail" />
            <TextContainer>
              <TitleOfVideo color={videoTitleColor}>{title}</TitleOfVideo>
              <ViewsContainer>
                <ViewsText
                  color={videoOtherTextColor}
                >{`${viewCount} Watching`}</ViewsText>
                <ViewsText color={videoOtherTextColor}>Worldwide</ViewsText>
              </ViewsContainer>
            </TextContainer>
          </EachVideoContainer>
        </VideoLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default TrendingVideos
