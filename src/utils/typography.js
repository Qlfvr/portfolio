import Typography from "typography"
// import kirkhamTheme from "typography-theme-kirkham"
// import altonTheme from "typography-theme-alton"
// const typography = new Typography(kirkhamTheme)
// const typography = new Typography(altonTheme)

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerColor : "#333333",
  bodyColor: "#333333",
  googleFonts: [
    {
      name: "Do Hyeon",
      styles: [],
    },
    {
      name: "Roboto",
      styles: []
    }
  ],

  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Roboto", "serif"],
})

export default typography
