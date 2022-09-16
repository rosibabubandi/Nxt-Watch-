import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  activeRoute: () => {},
})

export default NxtWatchContext
