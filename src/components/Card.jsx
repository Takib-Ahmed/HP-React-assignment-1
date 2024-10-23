/* eslint-disable react/prop-types */


const Card = ({ title, location, price, image }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden w-64 shadow-md">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-black font-bold">{price}</p>
      </div>
    </div>
  );
}

export default Card;
