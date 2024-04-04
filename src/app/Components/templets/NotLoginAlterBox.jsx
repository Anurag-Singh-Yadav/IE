import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  toggleSignPagePopup,
  setSignInBtn,
} from "../../GlobalRedux/Features/GlobalStateSlice";
import DialogTitle from "@mui/material/DialogTitle";
function AlertDialog({ open, details, message, setOpen }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2eca7f",
      },
    },
  });
  const handleLogin = () => {
    setOpen(false);
    dispatch(toggleSignPagePopup());
    dispatch(setSignInBtn(false));
  };
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            className="capitalize bg-green-bg dark:text-white-bg"
          >
            {message}
          </DialogTitle>
          <DialogContent className="bg-primary">
            <DialogContentText
              className="dark:text-white-bg"
              id="alert-dialog-description"
            >
              {details}
              <DialogActions classes="">
                <Button color="primary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button color="primary" onClick={handleLogin}>
                  Login
                </Button>
              </DialogActions>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}
function NotLoginAlterBox({ message, open, setOpen, details }) {
  return (
    <div>
      <AlertDialog
        open={open}
        setOpen={setOpen}
        message={message}
        details={details}
      />
    </div>
  );
}

export default NotLoginAlterBox;
