import { useState, useEffect } from "react"

export const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState({})
  useEffect(() => {
    const onResize = () => {
      setMediaQuery({
        isPc: window.matchMedia("screen and (min-width: 851px)").matches,
        isTab: window.matchMedia("screen and (max-width: 850px)").matches,
        isMobile: window.matchMedia("screen and (max-width: 600px)").matches,
      })
    }

    window.addEventListener("resize", onResize)
    window.addEventListener("load", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      window.removeEventListener("load", onResize)
    }
  })

  return mediaQuery
}
