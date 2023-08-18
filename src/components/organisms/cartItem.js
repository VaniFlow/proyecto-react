import React, { useContext, useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DataContext } from "../context/dataContext";
import { motion, AnimatePresence } from "framer-motion";
import CartEmpty from "./cartEmpty";

const CartItem = ({ cart, total, openCart, setOpenCart }) => {
  const { setCart } = useContext(DataContext);

  const [itemToDelete, setItemToDelete] = useState(null);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleIncrement = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecrement = (itemId) => {
    const itemToDelete = cart.find((item) => item.id === itemId);

    if (itemToDelete && itemToDelete.quantity === 1) {
      handleOpen2();
    } else {
      decrementItem(itemId);
    }
  };

  const decrementItem = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDeleteProduct = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    handleClose2();
  };

  const handleDeleteAllProducts = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemToDelete);
    setCart(updatedCart);
    handleClose3();
  };

  const clearCart = () => {
    const updatedCart = [];
    setCart(updatedCart);
    handleClose();
  };

  const style = {
    position: "absolute",
    borderRadius: "10px",
    color: "black",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    "@media (max-width: 768px)": {
      width: "80%",
      boxShadow: 12,
      p: 3,
    },
  };

  return (
    <div
      className="cart-container"
      style={{
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: ".6rem",
        width: "500px",
        maxHeight: "600px",
        overflowY: "scroll",
        position: "absolute",
        right: "0",
        color: "black",
        zIndex: 10,
      }}
    >
      {cart.length > 0 ? (
        <div>
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
                <div className="h-20 w-[80px]">
                  <img
                    className="w-full h-full rounded"
                    src={card.imgfondo}
                    alt={card.titulo}
                  />
                </div>
                <p className="text-black w-[100px]">{card.titulo}</p>
                <button onClick={() => handleIncrement(card.id)}>
                  <AddCircleOutlineIcon />
                </button>
                <span className="text-black">{card.quantity}</span>
                <button
                  onClick={() => {
                    setItemToDelete(card.id);
                    handleDecrement(card.id);
                  }}
                >
                <RemoveCircleOutlineIcon/>
                </button>
              
                  <Modal
                    open={open2 && itemToDelete === card.id} // Abre el modal solo si open2 es true y el itemToDelete coincide con el producto actual
                    onClose={handleClose2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        className="mb-5 text-center"
                      >
                        ¿Estas seguro que deseas eliminar el producto?
                      </Typography>
                      <div className="flex flex-wrap justify-center gap-8 ">
                        <Button
                          onClick={() =>
                            handleDeleteProduct(
                              card.id,
                              setItemToDelete(card.id)
                            )
                          }
                          variant="contained"
                          className="flex-wrap bg-red-400 hover:bg-red-500"
                        >
                          SI
                        </Button>
                        <Button
                          onClick={handleClose2}
                          variant="outlined"
                          className="flex-wrap text-red-400 border-red-400 border-solid border-1 hover:border-red-500 hover:bg-red-50"
                        >
                          NO
                        </Button>
                      </div>
                    </Box>
                  </Modal>
               
                <span className="text-black">
                  ${card.precio * card.quantity}
                </span>
                <button
                  style={{
                    backgroundColor: "#F99999",
                    padding: ".5rem ",
                    borderRadius: "10px",
                    color: "white",
                  }}
                  onClick={() => {
                    setItemToDelete(card.id);
                    handleOpen3(true);
                  }}
                >
                  <DeleteIcon style={{ marginTop: "-0.2rem" }} />
                  Eliminar
                </button>
                <Modal
            open={open3}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="mb-5 text-center"
              >
                ¿Estas seguro que deseas eliminar el producto sin importar la cantidad?
              </Typography>
              <div className="flex flex-wrap justify-center gap-8 ">
                <Button
                  onClick={() =>{handleDeleteAllProducts(card.id), setItemToDelete(card.id)}}
                  variant="contained"
                  className="flex-wrap bg-red-400 hover:bg-red-500"
                >
                  SI
                </Button>
                <Button
                  onClick={handleClose3}
                  variant="outlined"
                  className="flex-wrap text-red-400 border-red-400 border-solid border-1 hover:border-red-500 hover:bg-red-50"
                >
                  NO
                </Button>
              </div>
            </Box>
          </Modal>
              </motion.div>
            </AnimatePresence>
          ))}
          <div></div>
          <div className="flex items-center justify-end gap-4 mb-6">
            <h3 className="text-black"> Total: {total}</h3>
            <button
              style={{
                backgroundColor: "#F99999",
                padding: ".5rem ",
                borderRadius: "10px",
                color: "white",
                width: "95px",
              }}
              onClick={handleOpen}
            >
              <DeleteIcon
                style={{
                  marginTop: "-0.2rem",
                }}
              />
              Vaciar
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="mb-5 text-center"
              >
                ¿Estas seguro que deseas eliminar todos los productos del
                carrito?
              </Typography>
              <div className="flex flex-wrap justify-center gap-8 ">
                <Button
                  onClick={clearCart}
                  variant="contained"
                  className="flex-wrap bg-red-400 hover:bg-red-500"
                >
                  SI
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  className="flex-wrap text-red-400 border-red-400 border-solid border-1 hover:border-red-500 hover:bg-red-50"
                >
                  NO
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default CartItem;
