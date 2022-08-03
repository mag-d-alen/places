
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "./homePage.styled";
import { useGetAttractionDetails } from "../../../controller/hooks/useGetAttractionDetails";
import { useDispatch, useSelector } from "react-redux";
import { setAttractionDetails } from "../../../model/context/mainSlice";

export const DetailsModal: React.FC<{
  id: string;
  open: boolean;
  closeModal: () => void;
}> = ({ open, closeModal, id }) => {
  const dispatch = useDispatch();
  useGetAttractionDetails(id);
  const detailedInfo = useSelector((s: any) => s.info.attractionDetails);
  const handleCloseModal = () => {
    dispatch(setAttractionDetails({}));
    closeModal();
  };
  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
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
