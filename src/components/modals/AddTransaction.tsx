import {
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSearchParams } from "react-router-dom";
import NewTransactionForm from "../forms/NewTransactionForm";

export default function AddTransaction() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [searchParams, setSearchParams] = useSearchParams();

  const isOpen = searchParams.get("transaction") === "1";
  function closeModal() {
    setSearchParams((state) => {
      state.delete("transaction");
      return state;
    });
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={closeModal}
      PaperProps={{
        style: { background: grey[100] },
      }}
    >
      <DialogTitle>Add new transaction</DialogTitle>
      <DialogContent>
        <NewTransactionForm />
      </DialogContent>
    </Dialog>
  );
}
