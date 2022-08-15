import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "./homePage.styled";
import { useGetAttractionDetails } from "../../../controller/hooks/useGetAttractionDetails";
import { LinearProgress } from "@mui/material";

export const DetailsModal: React.FC<{
  id: string;
  open: boolean;
  closeModal: () => void;
}> = ({ open, closeModal, id }) => {
  const detailedInfo = useGetAttractionDetails(id);
  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <Dialog open={open} onClose={handleCloseModal}>
      {!detailedInfo ? (
        <LinearProgress />
      ) : (
        <>
          <DialogTitle id="alert-dialog-title">
            {detailedInfo?.name}
          </DialogTitle>
          <DialogContent>
            <img
              src={detailedInfo?.preview?.source}
              alt={detailedInfo?.name}></img>
            <DialogContentText id="alert-dialog-description">
              {detailedInfo?.wikipedia_extracts?.text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal}>Close</Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};
