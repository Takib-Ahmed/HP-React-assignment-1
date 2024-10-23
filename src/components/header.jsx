/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "./button";

const HeaderComponent = ({p,h1,text,icon,noSearch ,sortmodified}) => {


  return (

<>



    <div className="bg-gray-100 p-4 flex justify-between items-center px-24">
      {/* Left Section */}
      <div>
        <p className="text-gray-500" >{p}</p>
        <h1 className={`text-2xl font-bold ` + `${icon && `flex gap-4`}`}>{icon && <img src={icon} alt="" className="h-6 mt-1" />}{h1}</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Box */}


        {noSearch!='noSearch' &&    <form className="bg-white p-2 flex items-center gap-2 rounded-md shadow-md">
          <span role="img" aria-label="search"><img src="/public/Frame (3).png" alt="" /></span> 
    <input type="text" className=' border-none out border-none outline-none'  placeholder='Search incident'/>
        </form>}
      

        {/* Sort By */}
        <button className="bg-white p-2 rounded-md shadow-md">
          <span className="text-gray-500">{sortmodified=='Back' ? 'Back':'Sort By: Date modified'}</span>
        </button>

        {/* Cypher AI Button */}
{text=='+ New Incident'  ? <Link to={'/Getstarted'}><Button text={text}  /></Link> :<Button text={text}/>} 
      </div>
    </div>
</>
  );
};

export default HeaderComponent;
