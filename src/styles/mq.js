const breakpoints = {
  sp: 600,
  tab: 850,
  pc: 1000,
  large: 1440,
}

function mq(maxWidth) {
  return `@media screen and (max-width: ${breakpoints[maxWidth]}px)`
}

export { breakpoints, mq }
