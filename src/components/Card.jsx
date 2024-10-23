/* eslint-disable react/prop-types */


const Card = ({ title, location, price, image }) => {
  return (
    <div className=" rounded-lg overflow-hidden w-[19.4rem]  text-[small] " >
      <img 
        src={image} 
        alt={title} 
        className="w-full  hover:scale-[1.05] transition-all duration-[1000ms]" 
      />
      <div className="grid text-start p-4 ps-0 pt-3 gap-0.5">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-black font-bold">{price}</p>
      </div>
    </div>
  );
}

export default Card;
