import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'
import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, activeRouteName: 'HOME', savedVideosList: []}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  activeRoute = routeName => {
    this.setState({activeRouteName: routeName})
  }

  saveVideo = video => {
    const {id} = video
    const {savedVideosList} = this.state

    const isVideoAlreadySaved = savedVideosList.find(videoItem => {
      if (videoItem.id === id) {
        return true
      }
      return false
    })
    if (isVideoAlreadySaved === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, video],
      }))
    }
  }

  removeVideo = id => {
    const {savedVideosList} = this.state

    const filteredVideoList = savedVideosList.filter(
      videoItem => videoItem.id !== id,
    )
    this.setState({savedVideosList: filteredVideoList})
  }

  render() {
    const {isDarkTheme, activeRouteName, savedVideosList} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          activeRouteName,
          savedVideosList,
          changeTheme: this.changeTheme,
          activeRoute: this.activeRoute,
          saveVideo: this.saveVideo,
          removeVideo: this.removeVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
