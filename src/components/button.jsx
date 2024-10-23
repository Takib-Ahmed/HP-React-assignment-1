/* eslint-disable react/prop-types */
export default function Button({text}){
    return (
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md shadow-md" >
    {text}
      </button>
    );
}