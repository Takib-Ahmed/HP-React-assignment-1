import Nav from "../components/Nav";
import Dashboard from "./Dashbord";
// import Incidents from "./incidents";

import SupportChat from "../components/Supportchat"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Incidents from "./incidents";

export default function Pages(){

    
    return (
      
        


        <>
   

     <BrowserRouter>
       <Nav/>   
    
<Routes>
<Route path="/" element={<Dashboard/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
 <Route path="/incidents" element={<Incidents/>}/>
</Routes>

 <SupportChat/>   
</BrowserRouter>

    
        </>
    );
}