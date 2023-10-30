import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/home/1.PNG';
import img2 from '../assets/home/2.PNG';
import img3 from '../assets/home/3.PNG';
import img4 from '../assets/home/4.PNG';
import img5 from '../assets/home/5.PNG';
import img6 from '../assets/home/6.PNG';
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section
      id="home"
      className=" md:h-full "
    >
        <Carousel>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
                <div>
                    <img src={img5} />
                  
                </div>
                <div>
                    <img src={img6} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img1} />
                  
                </div>
            </Carousel>

    </section>
        
        
            
            
    );
};

export default Landing;