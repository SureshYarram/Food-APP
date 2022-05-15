import { SET_USER } from "./action";

import {LocalData} from "../../Components/UserInfo";

const UserInfo = LocalData();

const initState = {
    user:UserInfo
}

export const LoginReducer = (store = initState , {type,payload})=>{

             switch(type){
                 case SET_USER:
              return {...store , user:payload};
                default:
                  return store
             }

            

}