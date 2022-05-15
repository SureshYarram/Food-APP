
import Logo from "./img/logo.png"
import {MdShoppingBasket}  from "react-icons/md"
export const Header = ()=>{


    return(
        <div className="fixed flex z-50 bg-slate-500 w-screen h-14 px-10">
             
             <div>
                 <img src={Logo} alt="logo" className="h-12 w-14 m-1 flex" />
             </div>
             <div className="ml-auto">
                 <ul className="flex  items-center gap-7 mt-3 " >
                     <li>Home</li>
                     <li>Menu</li>
                     <li>About Us</li>
                     <li>Service</li>
                 </ul>
             </div>
             <div className="ml-16 mt-3 h-9 flex">
            <MdShoppingBasket className="text-2xl cursor-pointer" />
            <div className="h-5 w-5 rounded-full bg-rose-600 relative -top-2 -left-2">
                <p className="text-sm absolute ml-1.5 -mt-0.5 font-semibold text-white">2</p>
            </div>
             </div>

        </div>
    )


}