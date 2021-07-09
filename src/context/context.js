import React, { useState } from "react"

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const showNav = () => {
    setIsNavOpen(true)
  }

  const hideNav = () => {
    setIsNavOpen(false)
  }

  return (
    <GatsbyContext.Provider value={{ isNavOpen, showNav, hideNav }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
