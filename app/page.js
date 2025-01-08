// import Image from "next/image";
import Landing from './Components/Herosection';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Menusection from './Components/Menusection';
import Svg1 from './Components/Svg1';
import Svg2 from './Components/Svg2';
import Svg3 from './Components/Svg3';
import Feedback from './Components/Feedback';

export default function Home() {
  return (
   <>
  <Navbar/>
   <Landing/>
   {/* <Svg1/> */}
   <Section3/>
   <Section2/>
   <Svg2/>
   <Menusection/>
   <Svg3/>
   <Section4/>
   {/* <Feedback/> */}
   {/* <Section5/> */}
   <Footer/>
   </>
  );
}