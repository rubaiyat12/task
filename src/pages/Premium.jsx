
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PremiumCake from '../assets/home/premium.png';
import LineGradient from "../components/LineGradient";

const Premium = ({ setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
      <section
        id="premium"
        className="md:flex md:justify-between md:items-center gap-16 md:h-full py-6 mb-20 pb-4 mt-10"
      >
      
  
        {/* MAIN TEXT */}
        <div className="z-30 basis-2/5 mt-8 md:mt-12">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className=" justify-center"
          >
             <p className=" font-semibold text-4xl text-center md:text-start">
            <span className="">PREMIUM ITEM</span> 
          </p>
              
              {/* <span
                className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                before:absolute before:-left-[30px] before:-top-[50px] before:z-[-1]"
              > */}
               
              {/* </span> */}
           
  
            <p className="mt-10 mb-7 text-sm text-center md:text-start">
            The Premium Menu offers custom design and interactive galleries to enhance your bakery's online presence. It also provides online ordering,
             delivery integration for customer reviews to boost your bakery's success.
            </p>
          </motion.div>
  
          {/* CALL TO ACTIONS */}
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                hover:bg-blue hover:text-white transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#category"
            >
              Explore More
            </AnchorLink>
            
          </motion.div>
  
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            
          </motion.div>
        </div>
          {/* IMAGE SECTION */}
          <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 mt-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="premium cake"
                className="z-10"
                src={PremiumCake}
              />
            </div>
          ) : (
            <img alt="premium cake" className="z-10" src={PremiumCake} />
          )}
          </div>
      </section>
    );
  };
  
  export default Premium;