import styled from 'styled-components'

import {MdClose} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'

export const HomeMainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`
export const HomeSideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    width: 25vw;
    display: flex;
    height: 100vh;
    flex-shrink: 0;
  }
`
export const HomeSoloContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 10px;
  text-align: center;
  background-color: ${props => props.color};
  padding-top: 65px;
  @media screen and (min-width: 767px) {
    width: 75vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 10px;
    background-color: ${props => props.color};
    align-self: center;
    padding-top: 55px;
  }
`
export const HomeTopBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 90vw;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 767px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    width: 95%;
    height: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
`
export const HomeBannerLeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: 10px;
`
export const HomeCompanyLogo = styled.img`
  height: 40px;
  width: 150px;
`
export const HomeTopBannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 300;
  color: #1e293b;
  width: 40%;
`

export const GetItNowButton = styled.button`
  background-color: none;
  height: 35px;
  width: 100px;
  border: 1px solid #1e293b;
  color: #000000;
  font-family: 'Roboto';
`
export const CancelButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  padding-top: 10px;
`
export const BannerCancelButton = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
  height: 25px;
  width: 25px;
`
export const HomeBannerCloseButton = styled(MdClose)`
  font-size: 20px;
  cursor: pointer;
`
export const HomeSearchContainer = styled.div`
  margin-top: 10px;
  height: 35px;
  width: 90vw;
  border: 1px solid ${props => props.color};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  @media screen and (min-width: 576px) and (max-width: 766px) {
    width: 70vw;
    align-self: flex-start;
  }
  @media screen and (min-width: 767px) {
    width: 35vw;
    align-self: flex-start;
  }
`

export const SearchInputElement = styled.input`
  height: 35px;
  width: 85%;
  background-color: inherit;
  border: none;
  outline: none;
  font-family: 'Roboto';
  color: ${props => props.color};
  border-right: 1px solid ${props => props.borderColor};
  padding-left: 15px;
  font-size: 14px;
`

export const SearchIconButton = styled.button`
  width: 20%;
  height: 35px;
  border: none;
  border-left: 1px solid ${props => props.color};
  background-color: ${props => props.bgColor};
  cursor: pointer;
`
export const SearchIcon = styled(BsSearch)`
  font-size: 18px;
`
export const LoadingContainer = styled.div`
  width: 75vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HomeFailureNoResultsContainer = styled.div`
  height: 100%;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const HomeFailureNoResultsImage = styled.img`
  height: 30%;
  width: 60%;
  margin-bottom: 10px;
`

export const FailureNoResultsHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-bottom: 10px;
`
export const FailureNoResultsDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
  margin-bottom: 10px;
`

export const RetryButton = styled.button`
  height: 35px;
  width: 90px;
  background-color: #4f46e5;
  border-width: 0px;
  color: #ffffff;
  border-radius: 5px;
  font-family: 'Roboto';
  cursor: pointer;
`
export const SuccessContainer = styled.ul`
  margin-left: 0px;
  list-style-type: none;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 576px) and (max-width: 766px) {
    margin-left: 0px;
    list-style-type: none;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 767px) {
    margin-left: 0px;
    list-style-type: none;
    width: 75vw;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`
