"use client";

import {createContext, useContext, useState} from "react";

const AppContext = createContext({})

export function ContextProvider({children}:any){
  const [comments_ar, setComments_ar] = useState([]);

  return (
    <AppContext.Provider value={{comments_ar,setComments_ar}}>
      {children}
    </AppContext.Provider>
  )
}


export const useAppCommentContext = ():any => {
  return useContext(AppContext);
}