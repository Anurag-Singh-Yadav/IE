'use client'
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  toggleSignPagePopup,
  setSignInBtn,
} from "../GlobalRedux/Features/GlobalStateSlice";
function AlertDialog({ open, success, message, setOpen }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleFail = () => {
    router.push("/");
    dispatch(toggleSignPagePopup());
    dispatch(setSignInBtn(true));
    setOpen(false);
  };
  const handleClose = () => {
    router.push("/");
    setOpen(false);
  };
  const handleSuccess = () => {
    router.push("/");
    setOpen(false);
    dispatch(toggleSignPagePopup());
    dispatch(setSignInBtn(false));
  };
  const handletryAgain = () => {
    router.push("/");
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className={`${
            success ? "text-green-bg" : "text-red-500"
          } font-bold text-xl`}
        >
          {message}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {success ? (
              "Congratulations! 🎉 Your email has been successfully verified. 📧 Sign in now to explore Interview Express and accelerate your career journey!"
            ) : message ===
              "Your email verification failed, Please try again" ? (
              "We're sorry, but it seems there was an issue verifying your email. Please ensure you've clicked the correct link or contact support for assistance."
            ) : (
              "Verifying link is expired now. Please register again to get a new verification link."
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {success ? (
            <Button onClick={handleSuccess}>Start Exploring</Button>
          ) : message ===
            "Your email verification failed, Please try again" ? (
            <Button onClick={handletryAgain}>Try Again</Button>
          ) : (
            <Button onClick={handleFail}>Register Again</Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress size={60} />
    </Box>
  );
}

function PageContent() {
  const query = useSearchParams();
  const id = query.get("id");
  console.log("id->",id);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const emailVerification = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_VERIFY_USER}/${id}`,
        {
          id: id,
        }
      );
      console.log(response);
      setMessage(response?.data?.message);
      setSuccess(true);
      setOpen(true);
    } catch (e) {
      console.log(e);
      setMessage(e?.response?.data?.message);
      setOpen(true);
      setSuccess(false);
    }
  };

  useEffect(() => {
    console.log("verification page is rendering ", id);
    emailVerification();
  }, [id]);

  return (
    <div>
      {message ? (
        <AlertDialog
          open={open}
          success={success}
          message={message}
          setOpen={setOpen}
        />
      ) : (
        <div className="flex justify-center flex-col items-center gap-3 py-4 h-[30vh] w-full">
          <CircularIndeterminate />
          <div className="text-xl font-bold">Loading....</div>
        </div>
      )}
    </div>
  );
}

function Page() {

  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
}
export default Page;
