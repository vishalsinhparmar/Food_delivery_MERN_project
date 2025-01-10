import {  createContext, useState,} from "react";
import { showUserdata } from "../../../services/Api";

const AuthContext = createContext()
const AuthContextProvider = ({children})=>{

    const [user, setUser] = useState();
    const [modelIsopen, setmodelisOpen] = useState(false);
    const handleModelisopen = () => {
      setmodelisOpen(!modelIsopen)
     
    }
    console.log("model from the auth",modelIsopen)
    const handleModelisclose = () => {
      setmodelisOpen(!modelIsopen)
    }
    const UserData = async () => {
    try{
        const res = await showUserdata();

        console.log("res", res);
        if(res.success === true){

            setUser(res.data)
        }
    }catch(err){
        console.log("error happen in user data",err.response)
    }
        
    };
          return (
        <AuthContext.Provider value={{
          UserData,
          user,
          handleModelisopen,
          handleModelisclose,
          modelIsopen
              
        }}>
          {children}
        </AuthContext.Provider>
     )
}

export {AuthContext, AuthContextProvider}