import CardList from "@/components/organisms/CardList";
import Head from "next/head";
import Footer from "@/components/organisms/Footer";
import Homepart from "@/components/organisms/Homepart";
import About from "@/components/organisms/About";
import Nav from "@/components/atoms/Nav";
import Proveedores from "@/components/organisms/Provedores";
import { DataContextProvider } from "@/components/context/dataContext";

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
       <CardList />
       <About />
       <Proveedores />
       <Footer />
    </DataContextProvider>
  );
}
