import React from "react";
import Nav from "../atoms/Nav";
import ReactPlayer from 'react-player'
import styles from "./Homepart.module.css"

const Homepart = () => {
  return (
    <>
      <section className="h-[100vh]" >
        <Nav />
        <div>

        <div className="h-full w-full absolute flex items-center justify-center flex-col my-auto text-center z-10">
          <h1 className="text-[80px] [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black">
            Gold Sands Tours
          </h1>
          <h2 className="text-[40px] [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black">
            La aventura de viajar
          </h2>
        </div>
        <iframe style={{position:"absolute"}}
          frameborder="0"
          allowfullscreen="1"
          allow="autoplay; "
          title="Mujer caminando descalzo en la playa [Video de dominio Público]"
          width="1733px"
          height="975px"
          src="https://www.youtube.com/embed/DUK0FGF_Kz8?autoplay=1&amp;mute=1&amp;controls=0&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;loop=1&amp;playlist=DUK0FGF_Kz8"
          id="widget2"
        ></iframe>
        </div>
      </section>
    </>
  );
};

export default Homepart;
