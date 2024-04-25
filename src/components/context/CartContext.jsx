/* eslint-disable react/prop-types */
import React,{ useReducer, useEffect } from "react";
import { cartInitState } from "../reducer/CartInitState";
import CartReducer from "../reducer/CartReducer";





export const ProductContext = React.createContext(cartInitState);


export const ProductContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(CartReducer, JSON.parse(window.localStorage.getItem('Shopping_Cart')) || cartInitState);


    useEffect(() => {
        const storedState = window.localStorage.getItem('Shopping_Cart');
        if (storedState) {
            dispatch({ type: 'restore_state', payload: JSON.parse(storedState) });
        }
    }, [])


    useEffect(() => {
        window.localStorage.setItem('Shopping_Cart', JSON.stringify(state))
    }, [state])

    



    const addToCart = (product, quantity) =>  {

        // updateTotal(product)
        dispatch({type: 'add_item', payload: product, quantity })

    }

    const removeFromCart = () => {
        const updatedCart = state.cart.filter(item => item === null);

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