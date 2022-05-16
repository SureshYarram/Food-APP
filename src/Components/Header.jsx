
import Logo from "../img/logo.png";
import {MdShoppingBasket , MdAdd , MdLogout}  from "react-icons/md";
import avatar from "../img/avatar.png"
import {motion} from "framer-motion"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useState } from "react";
import { SettingUser } from "../Redux/Login/action";
import {useDispatch , useSelector} from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = ()=>{
     
    const dispatch = useDispatch();
    const [menu,setMenu] = useState(false)
     const firebaseauth = getAuth(app);
     const provider = new GoogleAuthProvider();


     const user = useSelector((store)=>store.login.user);
     console.log(user)
      

     // ------------------------------USER login------------------------------------->>>>>>>.
       const login = async()=>{
       
        if(!user){
            const { user  } = await signInWithPopup(firebaseauth,provider);
                  console.log(user.photoURL)
       dispatch(SettingUser(user.providerData[0]))
    
         localStorage.setItem("user", JSON.stringify(user.providerData[0]))
        }
        else{
            setMenu(!menu)
        }
   }  

   // ---------------------LOGOUT Function ----------------------------->>>>>>>>>>>>

       const Logout = ()=>{
           setMenu(false);
           localStorage.clear();
           dispatch(SettingUser(null))
       }

    return(
        <div className="flex z-50 bg-slate-500 w-screen h-14 px-10 mb-11">
             
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

             <div className="h-10 w-10 mt-2 ml-9 cursor-pointer rounded-full">
                 <motion.img className="rounded-full" whileTap={{scale:0.6}} src={ user ? user.photoURL:avatar} alt="userprofile"  onClick={login} />

                 {
                     menu && (
                        <div className="w-48 -ml-16 bg-stone-100 mt-3 ">
                        {
                            user && user.email==="sureshchowdary540@gmail.com" && (
                          <Link to="/create"> <p className="items-center flex px-3 gap-2 hover:bg-red-200" >New Item <MdAdd/> </p></Link>
                            )
                        }
                             <p onClick={Logout} className="items-center flex px-3 gap-6 mt-1 hover:bg-red-200">Logout  <MdLogout/></p>
                         </div>
                     )
                 }
             </div>
             
        </div>
    )


}