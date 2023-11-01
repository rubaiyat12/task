import SectionTitle from "../components/SectionTitle";
import featuredImg from '../assets/home/featured1.png';
import './Featured.css';


const Featured = () => {
    return (
        <section id="featured">
        <div className="featured-item bg-fixed text-white pt-10 my-20 ">
            <SectionTitle
            subHeading={"Check it Out"}
            heading={"Featured Items"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Jun 20,2023</p>
                    <p className="uppecase">Where can I get One</p>
                    <p>Our cake featured item is the epitome of indulgence, boasting an exquisite
                         blend of flavors and artful presentation. Each creation is meticulously
                          handcrafted by our expert bakers, making it a must-try for anyone with a sweet tooth.
                         Treat yourself to a slice of pure delight with our cake featured item today.</p>
                         <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>

                </div>
            </div>
            
        </div>
        </section>
    );
};

export default Featured;