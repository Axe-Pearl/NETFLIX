import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./authContext/AuthAction";

export const login = async(user,dispatch)=>{
   console.log("from apicalls",user);
   dispatch(loginStart());
   try{
       await axios.post("/login", user).then((res)=>{
        alert(res.data.message);
        console.log("res.data",res.data.user);
        dispatch(loginSuccess(res.data.user));
       });
   }
   catch(err){
       console.log("Login Error: ", err);
       dispatch(loginFailure());
   }
}