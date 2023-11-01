import SocialMediaIcons from "../components/SocialMediaicons";




const Footer = () => {
  return (
    <section className="bg-opacity-40  bg-black w-full">
    <footer className="h-30 z-40 w-full px-20 py-10  ">
      <div className=" mx-auto ">
        <SocialMediaIcons />
        
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-semibold text-2xl ">
            RUBAIYAT RAZIN 
          </p>
          <p className="text-md ">
            ©2022 RAHA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;