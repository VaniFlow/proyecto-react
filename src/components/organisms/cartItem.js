import React, { useContext, useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DataContext } from "../context/dataContext"; 
import { motion, AnimatePresence } from "framer-motion"
import ConfirmationModal from "../atoms/Modal"; 

const CartItem = ({ cart, total }) => {
  const { setCart } = useContext(DataContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleIncrement = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const openModal = (itemId) => {
    setItemToDelete(itemId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setItemToDelete(null);
  };

  const handleDecrement = (itemId) => {
  const itemToDelete = cart.find((item) => item.id === itemId);

  if (itemToDelete && itemToDelete.quantity === 1) {
    openModal(itemId);
  } else {
    decrementItem(itemId);
  }
};

const decrementItem = (itemId) => {
  const updatedCart = cart.map((item) =>
    item.id === itemId
      ? { ...item, quantity: item.quantity - 1 }
      : item
  )
  setCart(updatedCart);
};

const handleDeleteConfirmed = (itemId) => {
  const updatedCart = cart.filter((item) =>
  item.id !== itemToDelete
  );
  console.log(itemToDelete)
  setCart(updatedCart);
  closeModal();
};

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const handleDeleteProduct = (productId) => {
  const updatedCart = cart.filter((item) => item.id !== productId);
  console.log(productId)
  setCart(updatedCart);
};

const clearCart = () => {
  const updatedCart = [];
  setCart(updatedCart); 
}
  
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: "black",
      width: "600px",
      height: "200px",
      zIndex: 99999,
      marginTop: "2rem",
    },
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
 
  return (

<div
  style={{
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: ".6rem",
    maxHeight:"600px",
    overflowY:"scroll",
    position: "absolute",
    right: "0",
  }}
>
  <h4 className="text-black">Carrito</h4>

  {cart.map((card) => (
    <AnimatePresence key={card.id}>
      <motion.div
      
        className="flex items-center gap-4 mb-6 text-black"
        initial={{ opacity: 0, y: 100 }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: 100 }} 
        transition={{ duration: 0.3 }}
      >
        <img
          className="w-20 h-20 rounded"
          src={card.imgfondo}
          alt={card.titulo}
        />
        <p className="text-black w-[150px]">{card.titulo}</p>
        <button onClick={() => handleIncrement(card.id)}>
          <AddCircleOutlineIcon />
        </button>
        <span className="text-black">{card.quantity}</span>
        <button onClick={() => handleDecrement(card.id)}>
          <RemoveCircleOutlineIcon />
        </button>
        <span className="text-black">${card.precio * card.quantity}</span>
        <button
  style={{
    backgroundColor: "#F99999",
    padding: ".5rem ",
    borderRadius: "10px",
    color: "white",
  }} 
  onClick={() => {
    setItemToDelete(card.id);
    setModalIsOpen(true);
  }}
>
  <DeleteIcon style={{ marginTop: "-0.2rem" }} />
  Eliminar
</button>

      </motion.div>
    </AnimatePresence>
  ))}
    <ConfirmationModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      onConfirm={handleDeleteConfirmed}
      contentLabel="Eliminar artículo"
    />
    <div>
    <Modal
      isOpen={setModalIsOpen}
      onRequestClose={closeModal}
      onConfirm={() => handleDeleteProduct(productIdToDelete)}
      contentLabel="Eliminar artículo"
>
  <Box sx={modalStyle}>
    <Typography id="modal-modal-title" variant="h6" component="h2" className="text-center text-black">
      ¿Deseas eliminar todos los productos?
    </Typography>
    <Button variant="contained" className="text-black" onClick={() => handleDeleteProduct(productIdToDelete)}>Confirmar</Button>
  </Box>
</Modal>
    </div>
      <div className="flex items-center justify-end gap-4 mb-6">
        <h3 className="text-black"> Total: {total}</h3>
        <button 
        style={{
          backgroundColor: "#F99999",
          padding: ".5rem ",
          borderRadius: "10px",
          color: "white",
          width:"95px"
        }} onClick={() => clearCart ()}>
            <DeleteIcon style={{
              marginTop: "-0.2rem"
            }}/>
             Vaciar
          </button>
      </div> 
    </div>     
 );
};

export default CartItem;
