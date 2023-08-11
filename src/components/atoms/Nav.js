import React, { useState, useContext, useEffect  } from "react";
import { Button, Navbar } from "flowbite-react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DataContext } from "../context/dataContext";


const Nav = () => {
  const { cart } = useContext(DataContext); // Reemplaza 'data' con el nombre real de tu contexto
  const [openCart, setOpenCart] = useState(false);
  const [total, setTotal] = useState(0); // Usamos un estado para el total

  useEffect(() => {
    // Calculamos el total cada vez que cambie el carrito
    const newTotal = cart.reduce((acc, el) => acc + el.precio * el.quantity, 0);
    setTotal(newTotal);
  }, [cart]); // Se ejecutará cuando 'cart' cambie

  const formattedTotal = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleClick = () => { 
    setOpenCart(!openCart);
  };

  return (
    <>
      <Navbar
        className=" bg-white/10 w-full fixed  z-30  backdrop-blur"
        fluid
        rounded
      >
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="https://i.postimg.cc/kgT9tpds/Gold-Sands-Tours.png"
            border="0"
            alt="Gold-Sands-Tours"
            className="h-[60px]"
          />
        </Navbar.Brand>
        <div className="flex gap-3 md:order-2">
          <div className="d-block">
            <button
              onClick={handleClick}
              className="bg-red-400 hover:bg-red-200 rounded-[10px] p-[7px] text-white hover:text-red-400"
            >
              <ShoppingCartIcon style={{ transform: "scale(1.3)" }} /> <span>{totalCartItems}</span>
            </button>
            {openCart ? (
              <div style={{ backgroundColor: "white", padding: "2rem", position:"absolute", right:"0" }}>
                <h4 className="text-black">Carrito</h4>
                {cart.map((card) => (
                  <>
                  <div
                    key={card.id}
                    className="text-black flex items-center mb-6 gap-4"
                  >
                    <img className="w-20 h-20" src={card.imgfondo}></img>
                    <p>{card.titulo}</p>
                    <span>{card.quantity}</span>
                    <span>${card.precio * card.quantity}</span>
                  </div>
                    </>
                ))}
                <div>
                <div className="flex flex-col">
                      <h3 className="text-black text-right">Total:{" "}{formattedTotal}</h3>
                    </div>
                </div>
                    
              </div>
            ) : null}
          </div>

          <Navbar.Toggle className="bg-transparent border-none" />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="bg-red-200" active href="#inicio">
            <p className="text-[20px] text-white hover:text-red-300">Inicio</p>
          </Navbar.Link>
          <Navbar.Link href="#destinos">
            <p className="text-[20px] text-white hover:text-red-300">
              Destinos
            </p>
          </Navbar.Link>
          <Navbar.Link href="#about" className="text-[25px]">
            <p className="text-[20px] text-white hover:text-red-300">
              Sobre Nosotros
            </p>
          </Navbar.Link>

          <Navbar.Link active href="#footer" className="text-[20px]">
            <p className="text-[20px] text-white hover:text-red-300">
              Contacto
            </p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Nav;
