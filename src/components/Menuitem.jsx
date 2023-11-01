

const Menuitem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-6">
            <img  style={{borderRadius:'40%'}} className="w-[110px] h-[90px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-bold">{name}</h3>
                <p>{recipe}</p>

            </div>
            <p className="text-orange-300">${price}</p>
            
        </div>
    );
};

export default Menuitem;