
import Logo from "../img/logo.png";
import {MdShoppingBasket}  from "react-icons/md";
import avatar from "../img/avatar.png"
import {motion} from "framer-motion"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useState } from "react";
import { SettingUser } from "../Redux/Login/action";
import {useDispatch , useSelector} from "react-redux"

export const Header = ()=>{
     
    const dispatch = useDispatch()
     const firebaseauth = getAuth(app);
     const provider = new GoogleAuthProvider();


     const user = useSelector((store)=>store.login.user);
     console.log(user)
       
   const login = async()=>{
    
      const { user  } = await signInWithPopup(firebaseauth,provider);
       console.log(user.photoURL)
       dispatch(SettingUser(user.providerData[0]))
    
    localStorage.setItem("user", JSON.stringify(user.providerData[0]))
   }  

   

    return(
        <div className="fixed flex z-50 bg-slate-500 w-screen h-14 px-10">
             
             <div>
                 <img src={Logo} alt="logo" className="h-12 w-14 m-1 flex" />
             </div>
             <div className="ml-auto">
                 <ul className="flex  items-center gap-7 mt-3 " >
                     <li className="cursor-pointer">Home</li>
                     <li className="cursor-pointer">Menu</li>
                     <li className="cursor-pointer">About Us</li>
                     <li className="cursor-pointer">Service</li>
                 </ul>
             </div>
             <div className="ml-16 mt-3.5 h-9 flex">
            <MdShoppingBasket className="text-2xl cursor-pointer" />
            <div className="h-5 w-5 rounded-full bg-rose-600 relative -top-2 -left-2">
                <p className="text-sm absolute ml-1.5 -mt-0.5 font-semibold text-white">2</p>
            </div>

             </div>

             <div className="h-7 w-7 mt-3.5 ml-9 cursor-pointer">
                 <motion.img whileTap={{scale:0.6}} src={ user ? user.photoURL:avatar} alt="userprofile"  onClick={login} />
             </div>
             
        </div>
    )


}