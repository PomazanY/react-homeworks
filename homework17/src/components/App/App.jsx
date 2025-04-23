import Theme from "../../context/Theme/Theme";

import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import Typography from '@mui/material/Typography'

import { useState, useCallback } from "react";

function App() {

  const [theme, setTheme] = useState(false);

  const toggleTheme = useCallback(() => {
    // setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    setTheme(!theme)
  }, [theme])

  return (
    <Theme theme={theme}>
      <Typography variant="h6" >
        {/* {theme === "light" ? "Light Mode" : "Dark Mode"} */}
        {theme ? "Dark Mode" : "Light Mode"}
      </Typography>
      <ButtonComponent onClick={toggleTheme} />
    </Theme>
  )
}

export default App;
