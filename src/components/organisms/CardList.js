import { useEffect, useState } from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardList = () => {
  const [data, setData] = useState([]);
  const API = "http://localhost:5000/card" 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        if (response.ok) {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 px-2 bg-gradient-to-b to-[#EBB496] from-[#966D5E] font-sans">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold">Elige tu destino favorito</h2>
      </div>
      <Slider {...settings}>
        {data.map((card) => (
          <Cards key={card.id} card={card} />
        ))}
      </Slider>
    </div>
  );
};

export default CardList;