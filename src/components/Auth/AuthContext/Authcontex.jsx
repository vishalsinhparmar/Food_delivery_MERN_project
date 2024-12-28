import {  createContext, useState,} from "react";

const AuthContext = createContext()
const AuthContextProvider = ({children})=>{

  
          return (
        <AuthContext.Provider value={{
        
              
        }}>
          {children}
        </AuthContext.Provider>
     )
}

export {AuthContext, AuthContextProvider}