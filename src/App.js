import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, activeRouteName: 'HOME'}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  activeRoute = routeName => {
    this.setState({activeRouteName: routeName})
  }

  render() {
    const {isDarkTheme, activeRouteName} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          activeRouteName,
          changeTheme: this.changeTheme,
          activeRoute: this.activeRoute,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
