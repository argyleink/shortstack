export const constructStylesheet = (styles, stylesheet = new CSSStyleSheet()) => {
  stylesheet.replaceSync(styles)
  return stylesheet
}