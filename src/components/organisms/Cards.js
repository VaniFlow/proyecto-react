/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";

import React from "react";

const Cards = (props) => {
  return (
    <>
      
       
          <Card>
            <Overlay>
              <Image src={props.destino.imgfondo}/>
            </Overlay>

            <Details>
              <Logo src={props.destino.imglogo} />
              <Textoh3>{props.destino.titulo}</Textoh3>

              <Tags>
               
              </Tags>
              <Infocontainer>
              <Info>
                <p>{props.destino.textodescripcion}</p>
              </Info>
              </Infocontainer>
              <Comodidades>
                <Textoh4>Comodidades</Textoh4>
                <Uls>
                  <Lis>
                    <i className="fa-solid fa-hotel"></i>
                  </Lis>
                  <Lis>
                    <i className="fa-solid fa-plane"></i>
                  </Lis>
                  <Lis>
                    <i className="fa-sharp fa-solid fa-car"></i>
                  </Lis>
                  <Lis>
                    <i className="fa-solid fa-ship"></i>
                  </Lis>
                </Uls>
                <Boton>
                  <TextoA href="#">Agregar a carrito</TextoA>
                  <Textopboton>${props.destino.precio}</Textopboton>
                </Boton>
              </Comodidades>
            </Details>
          </Card>
        
      
    </>
  );
};

export default Cards;




const Card = styled.div`
  position: relative;
  width: 320px;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  text-algin: left;
  margin-bottom:5px;
`;
const Overlay = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
   width: 100%;
   height: 100%;
    opacity: 0.6;
    objet-fit: cover;
`
const Details = styled.div`
  position: absolute;
  bottom: -10px;
  width: 100%;
  z-index: 2;
  left: 0;
  padding: 20px;
  transition: 0.5s;
`;
const Logo = styled.img`
  max-width: 100px;
  
  
`;

const Textoh3 = styled.h3`
  font-size: 1.2em;
  color: #fff;
  font-weight:bold;
`;

const Tags = styled.div`
  position: relative;
  margin-top: 15px;
`;

const Spans = styled.span`
  padding: 5px 5px;
  margin:0 5px 0 0;
  color: white;
  background: #5fa1aa;
  border-radius: 4px;
`;
const Infocontainer = styled.div`
    
    height:150px;
    width:100%;
    
    
`;
const Info = styled.div`
    color:#fff;
    text-align: left;
    
`;

const Comodidades = styled.div`
 position: relative;
`;
const Textoh4 = styled.h4`
 color: #fff;
margin-top: 10px;
`;
const Uls = styled.ul`
position: relative;
display: flex;
margin-top: 10px;
gap:5px;
justify-content: start;
`;

const Lis = styled.li`
list-style: none;
width: 40px;
font-size: 1.2em;
color: #fff;
font-weight: lighter;
overflow: hidden;`
;



const Boton = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 12px; `;

const TextoA = styled.a`
    font-size: 1em;
    text-decoration: none;
    padding: 8px;
    color:#ffffff;
    border-radius: px;
    background:rgb(251, 149, 149);
    transition: all .3s;`;

const Textopboton = styled.a`

font-size: 1.3em;
color:#ffffff;
text-decoration: none;  
`;







