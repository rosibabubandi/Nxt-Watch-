import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const EachVideoContainer = styled.li`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin-right: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    align-self: left;
    margin: 20px;
  }
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const VideoImage = styled.img`
  height: 170px;
  width: 100px;
  @media screen and (min-width: 576px) {
    height: 250px;
    width: 160px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  }
`
export const TitleOfVideo = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
  line-height: 30px;
`
export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const ViewsText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  margin-right: 5px;
`
