import { useState } from 'react';
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./pages/Navbar";
import DotGroup from "./pages/DotGroup";
import Landing from "./pages/Landing";
import { motion } from "framer-motion";


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  
  const isDesktop = useMediaQuery("(min-width: 1060px)");

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

   </div>
   
  )
}

export default App
