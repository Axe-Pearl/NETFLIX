import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./authContext/AuthAction";

export const login = async(user,dispatch)=>{
   console.log("from apicalls",user);
   dispatch(loginStart());
   try{
       const response = await axios.post("/login", user).then((res)=>{
        alert(res.data.message);
        console.log("res.data",res.data.user);
        dispatch(loginSuccess(res.data.user));
       });
   }
   catch(err){
       dispatch(loginFailure());
   }
}