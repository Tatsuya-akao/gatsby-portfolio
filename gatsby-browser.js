import React from "react"
import "normalize.css"
import "./src/styles/global.css"

import { GatsbyProvider } from "./src/context/context"

export const wrapRootElement = ({ element }) => {
  return <GatsbyProvider>{element}</GatsbyProvider>
}
