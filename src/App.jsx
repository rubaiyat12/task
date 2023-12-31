import { useEffect, useState } from 'react';
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./pages/Navbar";
import DotGroup from "./pages/DotGroup";
import Landing from "./pages/Landing";
import { motion } from "framer-motion";
import LineGradient from './components/LineGradient';
import About from './pages/About';
import Category from './pages/Category';
import PopulerItem from './pages/PopulerItem';
import Testimonials from './pages/Testimonials';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import Featured from './pages/Featured';
import Premium from './pages/Premium';


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <div className="app ">
    <Navbar
        
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )} */}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>

        <LineGradient />
        <div className="w-5/6 mx-auto md:full">
        <About />
       
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Category />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <PopulerItem />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Featured />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Premium />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Testimonials />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Contact />
      </div>
      
      <div className="w-full mx-auto ">
        <Footer />
      </div>

   </div>
   
  )
}

export default App
