import CardList from "@/components/organisms/CardList";
import Head from "next/head";
import Footer from "@/components/organisms/Footer";
import Homepart from "@/components/organisms/Homepart";
import About from "@/components/organisms/About";
import Nav from "@/components/atoms/Nav";
import Proveedores from "@/components/organisms/Provedores";
import Equipo from "@/components/organisms/Equipo";
import { DataContextProvider } from "@/components/context/dataContext";
import Equipo from "@/components/organisms/Equipo";

import Participantes from "./Participantes";

export default function Home() {
  return (
    <DataContextProvider>
      <Head>
        <title>Gold Sands Tours</title>
        <link
          rel="shortcut icon"
          href="https://i.postimg.cc/MZjWxcmK/palmerita.png"
        />
      </Head>
      <Nav />
     
      <Homepart />
<<<<<<< HEAD
      <CardList />
      <About />
      <Proveedores />
      <Equipo />
      <Footer />
      </DataContextProvider>
    </>
=======
       <CardList /> <About />
        <Proveedores />
         <Footer />
    </DataContextProvider>
>>>>>>> 002ac9a6a02cf5c30f9f44b9a4d758ffe94eeca0
  );
}
