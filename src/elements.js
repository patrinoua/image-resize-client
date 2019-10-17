import styled from 'styled-components'
import { Form, TextField } from '@contentful/forma-36-react-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`

export const Title = styled.div`
  height: 50px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.3em;
  font-weight: 600;
`
export const Highlight = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`
export const ConfigBox = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
`

export const ImageContainer = styled.div`
  margin: 50px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImagesContainer = styled.div`
  height: 400px;
`
export const StyledTextField = styled(TextField)`
  margin: 0 10px;
`
export const StyledForm = styled(Form)`
  margin: 50px;
  display: flex;
`
