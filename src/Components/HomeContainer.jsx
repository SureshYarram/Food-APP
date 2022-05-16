import delivery  from "../img/delivery.png"
import herobg from "../img/heroBg.png"
import I1 from "../img/i1.png"


export const HomeContainer = ()=>{

    return(
        <div className="mt-16 flex">
            <div>
            <div className="w-56 h-14 rounded-full flex ml-6   ">
              <p className='bg-orange-500 h-10 text-center py-1 px-2.5 w-34 rounded-full text-white'>Bike Delivery</p> 
                  <img className="w-14 h-14 -mt-2 rounded-full " src={delivery} alt=""  />
                   
            </div>
            <div>
                <h1 className="font-bold text-5xl w-96 ml-5 py-3 ">The Fastest Way </h1> 
                <h1  className="font-bold text-5xl w-96 text-orange-500 ml-5 py-3" > Delivery In Your </h1>  
                <h1  className="font-bold text-5xl w-96 text-orange-500 ml-5 py-3" > City </h1>  
                <p className="w-96 ml-6">food delivery app that provides food delivery at your door in very less time and with the best packaging. Providing food from every famous food place near you. Order food with the best user experience.</p>

                <button className="bg-orange-500 ml-16 mt-5 rounded-full px-3 text-center py-1">Order Now</button>
            </div>
            
            </div>
   

   {/* //------------------------------ Right side------------------------------------------------------------*/}
            <div>
          
           <img className="w-4/12 ml-96 h-5/6 absolute" src={herobg} alt="herobg" />

           <div className="grid grid-rows-2 grid-cols-2 gap-9">
               <div className="relative w-64" >
                   <img className="w-64 h-56" src={I1} alt="" />
                    
               </div>
               <div className="relative w-64" >
                   <img className="ml-80 w-64 h-56" src={I1} alt="" />
                  
               </div>
               <div className="relative w-64" >
                   <img className="w-64 h-56" src={I1} alt="" />
                  
               </div>
               <div className="relative w-64" >
                   <img className="ml-80 w-64 h-56" src={I1} alt="" />
                  
               </div>
           </div>

            </div>
        </div>
    )
}