import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginMainContainer,
  FormContainer,
  FormLogoContainer,
  FormLogoImage,
  LoginLabelElement,
  FormInputElement,
  CheckBoxLabelCommonContainer,
  InputCheckBox,
  CheckBoxLabelElement,
  LoginButton,
  ErrorMessageText,
} from './styledComponents'

let mainContainerBgColor = ''
let formContainerBgColor = ''
let logoImage = ''
let inputLabelColor = ''
let inputBorderColor = ''
let checkBoxLabelColor = ''
let errorMessageColor = ''

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMessage: false,
    errorMessage: '',
  }

  componentDidMount() {
    this.baseDetailsUpdate()
  }

  baseDetailsUpdate = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        mainContainerBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        formContainerBgColor = isDarkTheme ? '#000000' : '#ffffff'
        logoImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        inputLabelColor = isDarkTheme ? '#ffffff' : '#383838'
        inputBorderColor = isDarkTheme ? '#00306e' : '#383838'
        checkBoxLabelColor = isDarkTheme ? '#ffffff' : '#000000'
        errorMessageColor = isDarkTheme ? '#ff0000' : '#ff0b37'
      }}
    </NxtWatchContext.Consumer>
  )

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onFailureLogin = errMsg => {
    this.setState({showErrorMessage: true, errorMessage: errMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const apiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const responseData = await response.json()

    if (response.ok) {
      this.onSuccessLogin(responseData.jwt_token)
    } else {
      this.onFailureLogin(responseData.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMessage,
      errorMessage,
    } = this.state

    const passwordInputType = showPassword ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginMainContainer bgColor={mainContainerBgColor}>
        <FormContainer
          bgColor={formContainerBgColor}
          onSubmit={this.onSubmitLogin}
        >
          <FormLogoContainer>
            <FormLogoImage src={logoImage} alt="channel logo" />
          </FormLogoContainer>
          <LoginLabelElement color={inputLabelColor}>
            USERNAME
          </LoginLabelElement>
          <FormInputElement
            type="text"
            value={username}
            onChange={this.onChangeUsername}
            borderColor={inputBorderColor}
          />
          <LoginLabelElement color={inputLabelColor}>
            PASSWORD
          </LoginLabelElement>
          <FormInputElement
            type={passwordInputType}
            value={password}
            onChange={this.onChangePassword}
            borderColor={inputBorderColor}
          />
          <CheckBoxLabelCommonContainer>
            <InputCheckBox onChange={this.onChangeShowPassword} />
            <CheckBoxLabelElement color={checkBoxLabelColor}>
              Show Password
            </CheckBoxLabelElement>
          </CheckBoxLabelCommonContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showErrorMessage && (
            <ErrorMessageText color={errorMessageColor}>
              {errorMessage}
            </ErrorMessageText>
          )}
        </FormContainer>
      </LoginMainContainer>
    )
  }
}

export default LoginForm
