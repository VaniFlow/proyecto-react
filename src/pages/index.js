import CardList from "@/components/organisms/CardList"
import Head from "next/head"
import Footer from "@/components/organisms/Footer"
import Homepart from "@/components/organisms/Homepart"


export default function Home() {
  return (
    <>
    <Head>
    <title>Gold Sands Tours</title>
    <link rel="shortcut icon" href="https://i.postimg.cc/MZjWxcmK/palmerita.png" />
    </Head>

    <Homepart/>
   
    <CardList />
    <Footer/>
    </>

   
  )
}
