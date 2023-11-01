import SectionTitle from "../components/SectionTitle";
import Menuitem from "../components/Menuitem";
import { useEffect, useState } from "react";

const PopulerItem = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>
            {
                const popularItems=data.filter(item=>item.category === 'popular')
            setMenu(popularItems)})
    
    },[])
    return (
        <section id="popular" className="mt-20 mb-20" >
            <SectionTitle
            subHeading={"Popular Items"}
            heading={"From our Item"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
                {
                    menu.map(item=><Menuitem
                    key={item._id}
                    item={item}
                    ></Menuitem>)
                }
            </div>

        </section>
    );
};

export default PopulerItem;