import { Routes,Route } from "react-router"
import {MainContainer}  from "../Components/MainContainer"
export const AllRoutes = ()=>{

    return(
    <>
    

       <Routes>
       <Route path="/"  element={<MainContainer/>}/>
       {/* <Route path="/create" element={<CreateContainer/>}/> */}
     </Routes>


     </>
    )
    
}