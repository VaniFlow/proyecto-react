import CardList from "@/components/organisms/CardList"
import Head from "next/head"
import Footer from "@/components/organisms/Footer"
import Homepart from "@/components/organisms/Homepart"
import About from "@/components/organisms/About"
import Proveedores from "@/components/organisms/Provedores"

export default function Home() {
  return (
    <>
    <Head>
    <title>Gold Sands Travel</title>
    <link rel="shortcut icon" href="https://i.postimg.cc/MZjWxcmK/palmerita.png" />
    </Head>

    <Homepart/>
   
    <CardList />
    <About/>
    <Proveedores/>
    <Footer/>
    </>

   
  )
}
