import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  changeTheme: () => {},
  activeRoute: () => {},
  saveVideo: () => {},
  removeVideo: () => {},
})

export default NxtWatchContext
