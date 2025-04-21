import Main from "./Main/Main";
import DialogWindow from './DialogWindow/DialogWindow';

import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Main handleClickOpen={handleClickOpen} />
      <DialogWindow open={open} handleClose={handleClose} />
    </>
  )
}

export default App;
