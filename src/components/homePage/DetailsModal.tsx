import React, { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "./homePage.styled";
import { getData } from "../../hooks/useGetData";

export const DetailsModal: React.FC<{
    detailedInfo: any;
  open: boolean;
  closeModal: () => void;
}> = ({ open, closeModal, detailedInfo}) => {


  return (
    <Dialog
      open={open}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{detailedInfo?.name}</DialogTitle>
      <DialogContent>
        <img src={detailedInfo?.preview?.source} alt={detailedInfo?.name}></img>

        <DialogContentText id="alert-dialog-description">
          {detailedInfo?.wikipedia_extracts?.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
