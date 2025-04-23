import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";


const lightTheme = createTheme({
    palette: {
        mode: "light",
        
    },
    
})

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        
    },
   

})

const Theme = ({ children, theme }) => {
    return (
      
        // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
          </ThemeProvider>
     
    )
}
export default Theme;