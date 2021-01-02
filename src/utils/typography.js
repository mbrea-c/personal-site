import Typography from "typography"
import wordpress2016Theme from "typography-theme-wordpress-2016"

//const typography = new Typography({
//baseFontSize: "18px",
//baseLineHeight: 1.666,
//headerFontFamily: [
//"Avenir Next",
//"Helvetica Neue",
//"Segoe UI",
//"Helvetica",
//"Arial",
//"sans-serif"
//],
//bodyFontFamily: ["Georgia", "serif"]
//})
const theme = wordpress2016Theme

theme.bodyColor = "#404040"
theme.headerColor = "#404040"
theme.googleFonts = [
	{
		name: "Open Sans",
		styles: ["700", "800", "400"]
	},
	{
		name: "Lora",
		styles: ["400", "400i"]
	}
]
theme.headerFontFamily = [
	"Open Sans",
	"Helvetica Neue",
	"Helvetica",
	"Arial",
	"sans-serif"
]
theme.bodyFontFamily = ["Lora", "Times New Roman", "serif"]
theme.headerFontWeight = 1000

const typography = new Typography(theme)

export default typography

export { theme }
