/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { cartInitState } from "../reducer/CartInitState";
import CartReducer from "../reducer/CartReducer";




export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(CartReducer, cartInitState)

    return (
        <ProductContext.Provider value={{ state, dispatch }} >
            {children}
        </ProductContext.Provider>

    )
}