
import { useEffect, useState } from "react";
import Cards from "./Cards";

const CardList = () => {

  const [data, setData] = useState([]);
console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/card");
        if (response) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error("error", response.status, response.statusText);
        }
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap min-h-screen bg-gradient-to-b from-blue-400 to-pink-400 font-sans">
        <h2 className="text-3xl font-semibold">Elige tu destino favorito</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 w-full">
          {data.map((card) => (
            <Cards key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};


export default CardList;
