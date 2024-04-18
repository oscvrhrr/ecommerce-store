/* eslint-disable react/prop-types */
import React,{ useReducer } from "react";
import { cartInitState } from "../reducer/CartInitState";
import CartReducer from "../reducer/CartReducer";





export const ProductContext = React.createContext(cartInitState);

export const ProductContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(CartReducer, cartInitState)

    const addToCart = (product) =>  {

        // updateTotal(product)
        dispatch({type: 'add_item', payload: product })

    }

    const removeFromCart = (product) => {
        const updatedCart = state.cart.filter(item => item !== product);

        dispatch({type: 'remove_item', payload: updatedCart})
    }

    // const updateTotal = (product) => {
    //     let total = 0;
    //     product.forEach(item => total += item.price);

    //     dispatch({type: 'total_sum', payload: total})
    // }

    const value = {

        total: state.total,
        cart: state.cart,
        addToCart,
        removeFromCart,
    }


   

    return (
        <ProductContext.Provider value={ value } >
            {children}
        </ProductContext.Provider>

    )
}