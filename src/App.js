import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <NxtWatchContext.Provider
        value={{isDarkTheme, changeTheme: this.changeTheme}}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
