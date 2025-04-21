import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Main =({handleClickOpen})=>{
    return (
        <>
         <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" sx={{margin: '15px 0px'}}>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button variant="contained" onClick={handleClickOpen} >Открыть диалоговое окно</Button>
      </Container>
        </>
       
    )
}
export default Main;