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
        dispatch({type: 'add_item', payload: product, quantity })
    };

    const removeFromCart = () => {
        const updatedCart = state.cart.filter(item => item === null);
        dispatch({type: 'clear_cart', payload: updatedCart});
        value.updateTotal()
    };

    const handleDecrease = (itemTitle) => {
        const item = state.cart.find(item => item.title === itemTitle);
        if (item) {
            dispatch({type: 'decrease_quantity', payload: item.title })
            value.updateTotal()
        }
    };

    const handleIncrease = (itemTitle) => {
        const item = state.cart.find(item => item.title === itemTitle);
        if (item) {
            dispatch({type: 'increase_quantity', payload: item.title })
            value.updateTotal()
        }
    };

    const updateTotal = () => {
        let total = 0;
        state.cart.forEach(item =>  {
            const price = parseFloat(item.price.replace(/[$,]/g, ''))
            total += price * item.quantity;

        });
        dispatch({type: 'total_sum', payload: total})
    }


    const value = {

        total: state.total,
        cart: state.cart,
        addToCart,
        removeFromCart,
        handleDecrease,
        handleIncrease,
        updateTotal
    }


   

    return (
        <ProductContext.Provider value={ value } >
            {children}
        </ProductContext.Provider>

    )
}