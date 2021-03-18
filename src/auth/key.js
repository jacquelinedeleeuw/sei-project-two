export const getAccessKey = () => {
  return process.env.REACT_APP_API_KEY
}

export const languageSelected = () => {
  return window.localStorage.getItem('language')
}