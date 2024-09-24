/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { CartReducer, initState } from "../reducer/CartReducer";

export const GlobalContext = createContext();



export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initState )




    return (
        <GlobalContext.Provider value={{ state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
