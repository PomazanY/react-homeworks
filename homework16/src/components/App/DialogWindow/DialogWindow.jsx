import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const DialogWindow =({open, handleClose})=>{
    return (
        <>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Использовать Material UI?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Это простое React приложение с использованием Material UI. Вы можете настроить его по своему усмотрению.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>отмена</Button>
          <Button onClick={handleClose} autoFocus>
            согласен
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )
}

export default DialogWindow;