import { useState } from "react";


const SupportChat = () => {

  const [Isshowed,setIsshowed] = useState(false)
  return (
    <>
     <img src="/public/f1.png" alt="" className={`supportchat fixed bottom-[4rem] right-[5rem] w-[300px] ` + `${!Isshowed && 'hidden'}`} />
    <div className="fixed bottom-5 right-5 bg-orange-500 w-16 h-16 rounded-full flex justify-center items-center text-white text-2xl cursor-pointer overflow-visible" onClick={()=>{
      setIsshowed((prev)=> !prev)
    }}>
      C 
    </div>
   
    </>
  );
}

export default SupportChat;
