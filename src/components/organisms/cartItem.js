import React, { useContext } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { DataContext } from "../context/dataContext"; // Asegúrate de importar el contexto correctamente

const CartItem = ({ cart, total }) => {
  const { setCart } = useContext(DataContext);

  const handleIncrement = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecrement = (itemId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "2rem",
        position: "absolute",
        right: "0",
      }}
    >
      <h4 className="text-black">Carrito</h4>

      {cart.map((card) => (
        <div key={card.id} className="text-black flex items-center mb-6 gap-4">
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
        </div>
      ))}
      <div>
        <h3 className="text-black text-right">Total: {total}</h3>
      </div>
    </div>
  );
};

export default CartItem;