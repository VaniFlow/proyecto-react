import styled from "styled-components";

import React from "react";
import Cards from "./Cards";

const Db = [
  {
    id: 1,
    titulo: "Miami, Florida",
    imgfondo:
      "https://i.pinimg.com/originals/37/cf/24/37cf24af3c59dbda5991ccaf0f40d33c.jpg",
    imglogo: "https://360agenciainmobiliaria.com/sell_btn_1.png",
    textodescripcion:
      "Miami es conocida como el paraiso de comprar de eletroeletronicos y grifes de moda, pero también ofrece lugares para comprar de perfumes, brinquedos, instrumentos musicales, maquinas fotograficas y mucho más.",
    precio: "150000",
  },
  {
    id: 2,
    titulo: "Paris, Francia",
    imgfondo:
      "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
    imglogo:
      "https://static.vecteezy.com/system/resources/previews/017/333/848/original/cartoon-sticker-of-the-eiffel-tower-in-paris-france-free-png.png",
    textodescripcion:
      "Una de las grandes ciudades europeas. Es para muchos el destino turístico más romántico. Situada en el centro norte de Francia, París es una de las ciudades más visitadas del mundo.",
    precio: "80000",
  },
  {
    id: 3,
    titulo: "Londres, Inglaterra",
    imgfondo:
      "https://i.pinimg.com/1200x/fe/d6/73/fed673f91ee4e478477f0441a33c174d.jpg",
    imglogo:
      "https://static.vecteezy.com/system/resources/previews/009/930/731/original/big-ben-london-graphic-element-illustration-png.png",
    textodescripcion:
      "Es una ciudad importante en todo el mundo debido al poder económico y también, y principalmente, a que se encuentra repleta de encantos que visitar y posee cultura impactante ",
    precio: "170000",
  },
  {
    id: 4,
    titulo: "Madrid, España",
    imgfondo:
      "https://dam.ngenespanol.com/wp-content/uploads/2021/11/GettyImages-1297090032.jpg",
    imglogo: "https://images.vexels.com/media/users/3/176129/isolated/lists/ac8749bdabab6e7fc0396aca940d300b-pegatina-madrid-viva-madrid.png",
    textodescripcion:
      "Fiel a sus costumbres, cultura y a su arte, pero a su vez es un lugar moderno, alberga centros culturales, económicos y políticos de primer orden en Europa. ",
    precio: "150000",
  },
  {
    id: 5,
    titulo: "Moscu, Rusia",
    imgfondo:
      "https://cadenaser.com/resizer/x2hv6yREAQZXIDLPZ4jVkW4b914=/736x414/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/7EEI37Z2SJIB5BXPDXH7COMX2I.jpg",
    imglogo:
      "https://cdn-icons-png.flaticon.com/512/6406/6406922.png",
    textodescripcion:
      "Capital de Rusia, es una de las ciudades más septentrionales del mundo. Constituye un importante centro político, económico y cultural del país y del continente. Su población asciende a los 11.503.501 habitantes.",
    precio: "80000",
  },
  {
    id: 6,
    titulo: "Sevilla, España",
    imgfondo:
      "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/12/20/16715363338279.jpg",
    imglogo:
      "https://www.acrasa.com/assets/images/logoPie.png",
    textodescripcion:
      "Hoy en día cuenta con una población superior a los 700000 habitantes en un área de 140 km2. Posee un clima mediterráneo, lo cual hace que las temperaturas estén alrededor de los 30° en verano y 14 en invierno.",
    precio: "170000",
  },
  {
    id: 7,
    titulo: "Dubai, Emiratos Arabes",
    imgfondo:
      "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/hero/burj-al-arab-profile-exterior_6-4_landscape.jpg?h=800&w=1200",
    imglogo: "https://cdn-icons-png.flaticon.com/256/3349/3349359.png",
    textodescripcion:
      "Dubai es la ciudad más grande de Emiratos Árabes Unidos. Se encuentra ubicado en el Golfo Pérsico. Conocida también como la ciudad de Dubai, está dividida por Dubai Creek, una brecha de agua salada que divide la ciudad.",
    precio: "150000",
  },
  {
    id: 8,
    titulo: "Punta Cana, Republica Dominicana",
    imgfondo:
      "https://dam.melia.com/melia/accounts/f8/4000018/projects/127/assets/8e/71078/1d918976ab9c7cb3d08032fbcfbd9e23-1639123945.jpg?fp=1771.5,1328.5&width=2000&height=1500",
    imglogo:
      "https://pokeratlas-images-production.s3.amazonaws.com/venues/images/mhdodkYlrgmnkoI",
    textodescripcion:
      "Considerada uno de los mayores polos de atracción turística de la República Dominicana, ofrece alrededor de 50 Km. de playas, una infraestructura hotelera, aeropuerto internacional, facilidades para todos los deportes. ",
    precio: "80000",
  },
  {
    id: 9,
    titulo: "Amsterdam, Paises Bajos",
    imgfondo:
      "https://media.istockphoto.com/id/914814224/es/foto/por-la-noche-en-amsterdam.jpg?s=612x612&w=0&k=20&c=2PJw_dFXZPB4RV1lI3eVLUKgP4YrJirWCyk0zDIkkDE=",
    imglogo:
      "https://images.vexels.com/media/users/3/175772/isolated/lists/9ef1c30ee753ccecd30c7942fc4d3a25-viaje-de-amsterdam-a-amsterdam-pegatina.png",
    textodescripcion:
      "Tiene una arquitectura impresionante, estupendos canales que cruzan la ciudad, gran variedad de tiendas y gente amable que domina el inglés casi a la perfección, muy útil para poder desenvolverte con naturalidad",
       precio: "170000",
  },
  {
    id: 10,
    titulo: "Berlin, Alemania",
    imgfondo:
      "https://media.istockphoto.com/id/1019187020/es/foto/el-r%C3%ADo-spree-en-berl%C3%ADn.jpg?s=612x612&w=0&k=20&c=zjq5CDmVhAW_WU8VaAQllmWYU285gy4Kvdufk-8Rop4=",
    imglogo:
      "https://i.pinimg.com/originals/9d/89/cf/9d89cf140d4c73faba3c9992fd89ea87.png",
    textodescripcion:
      "Situada en el noroeste de Alemania, a orillas de los ríos Spree y Havel. Es la capital de Alemania y uno de los 16 Estados. Con sus más de 3,4M de habitantes, es la urbe más poblada de Alemania y la mayor de la UE. ",
    precio: "170000",
  },
];

const CardList = () => {
  return (
    <>
      <Section>
        <TextoH2>Eliga su destino favorito</TextoH2>
        <CardContainer>
          {Db.map((card) => (
            <Cards key={card.id} destino={card} />
          ))}
        </CardContainer>
      </Section>
    </>
  );
};

export default CardList;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 115vh;
  background: linear-gradient(#5fa1aa, #fb9595);
  font-family: "PT Sans", sans-serif;
`;

const TextoH2 = styled.h2`
  font-size: 1.8rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  
`;
