import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableData, deleteProduct } from "../redux/slice";
import {
  selectTableItems,
  selectTableLoading,
  selectTableError,
} from "../redux/selector";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import RemadeProduct from "./remade";
import AddForm from "./addForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ProdTable() {
  const [editProduct, setEditProduct] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [deletId, setDeletId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);

  const handleEdit = (row) => {
    setEditProduct(row);
    setOpenRemade(true);
  };
  const handleDeleteOpen = (id) => {
    setDeleteId(id);
    setOpenDelete(true);
  };
  const handleDeleteClose = () => {
    setDeleteId(null);
    setOpenDelete(false);
  };

  const handleDeleteConfirm = () => {
    if (deleteId) {
      dispatch(deleteProduct(deleteId));
    }
    handleDeleteClose();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector(selectTableItems);
  const isLoading = useSelector(selectTableLoading);
  const error = useSelector(selectTableError);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ope, setOpe] = React.useState(false);
  const handleOpe = () => setOpe(true);
  const handleClos = () => setOpe(false);

  const [openRemade, setOpenRemade] = React.useState(false);
  const handleOpenRemade = () => setOpenRemade(true);
  const handleCloseRemade = () => setOpenRemade(false);

  useEffect(() => {
    dispatch(fetchTableData("https://698b71d86c6f9ebe57bcb9af.mockapi.io/gfd"));
  }, [dispatch]);

  if (isLoading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  return (
    <Box>
      <img src="../public/logoTable.svg" alt="logo" />
      <Box>
        <Button
          variant="contained"
          onClick={() => navigate("/productPreview", { replace: true })}
        >
          <PersonIcon />
          Preview
        </Button>
        <Button variant="contained" onClick={handleOpe}>
          <AddIcon />
          Add product
        </Button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={ope}
          onClose={handleClos}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={ope}>
            <Box sx={style}>
              <AddForm />
            </Box>
          </Fade>
        </Modal>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openRemade}
          onClose={handleCloseRemade}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={openRemade}>
            <Box sx={style}>
              <RemadeProduct product={editProduct} />
            </Box>
          </Fade>
        </Modal>

        <Modal
          open={openDelete}
          onClose={handleDeleteClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6">
              Удалить продукт?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Вы уверены, что хотите удалить этот продукт?
            </Typography>
            <Button variant="outlined" onClick={handleDeleteClose}>
              Отмена
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteConfirm}
            >
              Удалить
            </Button>
          </Box>
        </Modal>
      </Box>
      <Box>
        <Typography variant="h2" gutterBottom>
          Products
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.Category}</TableCell>
                  <TableCell>{row.Quantity}</TableCell>
                  <TableCell>{row.Price}</TableCell>

                  <TableCell>
                    <IconButton onClick={() => handleEdit(row)} edge="end">
                      <CreateIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell>
                    <IconButton
                      onClick={() => handleDeleteOpen(row.id)}
                      edge="end"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default ProdTable;
