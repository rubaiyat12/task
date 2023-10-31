import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import slide1 from '../assets/home/slide1.PNG';
import slide2 from '../assets/home/slide2.PNG';
import slide3 from '../assets/home/slide3.PNG';
import slide4 from '../assets/home/slide4.PNG';
import slide5 from '../assets/home/slide5.PNG';
import SectionTitle from '../components/SectionTitle';

const Category = () => {
    return (
      <section id="category">
        <SectionTitle
        subHeading={"From 8.00am to 10.00pm"}
        heading={"Order Online"}
        ></SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide> 
            <img src={slide1} alt="" /> 
            <h3 className='text-3xl uppercase text-center -mt-20 text-purple-500'>Strawberry</h3>
            </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-20 text-purple-500'>Black Forest</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-20 text-purple-500 '>Mango Passion</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-20 text-purple-500 '>Velvet</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-20 text-purple-500'>Coconut Lime</h3>
        </SwiperSlide>
        
      </Swiper>
      </section>
    );
};

export default Category;