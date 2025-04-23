/** @jsxImportSource @emotion/react */
import Button from "@mui/material/Button";

import {buttonStyle} from "./styles.js"


const ButtonComponent = ({ onClick }) => {
  return (

    <Button css={buttonStyle} variant="contained" onClick={onClick}>
      Toggle Theme
    </Button>


  );
};

export default ButtonComponent;