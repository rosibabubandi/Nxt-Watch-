import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  height: 100vh;
  background-color: ${props => props.color};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const FormContainer = styled.form`
  height: 75%;
  width: 90%;
  box-shadow: 0px 4px 16px 0px ${props => props.color};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  @media screen and (min-width: 767px) {
    height: 65%;
    width: 50%;
    box-shadow: 0px 4px 16px 0px ${props => props.color};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 30px;
  }
`
export const FormLogoContainer = styled.div`
  display: flex;
  align-self: center;
`
export const FormLogoImage = styled.img`
  height: 50px;
  width: 150px;
`

export const LoginLabelElement = styled.label`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 7px;
  margin-bottom: 7px;
`

export const FormInputElement = styled.input`
  width: 100%;
  height: 50px;
  background-color: inherit;
  border: 1px solid ${props => props.borderColor};
  border-radius: 5px;
  font-family: 'Roboto';
  color: #909090;
  padding-left: 7px;
  font-size: 14px;
  margin-top: 7px;
  margin-bottom: 7px;
`
export const InputCheckBox = styled.input`
  margin-top: 7px;
  margin-bottom: 7px;
`

export const CheckBoxLabelElement = styled.label`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
  margin-left: 10px;
`
export const CheckBoxLabelCommonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LoginButton = styled.button`
  height: 50px;
  width: 100%;
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 7px;
  font-family: 'Roboto';
  color: #ffffff;
  margin-top: 7px;
  margin-bottom: 7px;
`

export const ErrorMessageText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
  margin-top: 7px;
  margin-bottom: 7px;
`
