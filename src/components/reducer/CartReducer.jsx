


export default function CartReducer(state, action) {
    switch (action.type) {
        case 'add_item': {
            const productToAdd = action.payload;
            const existingProductIndex = state.cart.findIndex(item => item.title === productToAdd.title);

            if (existingProductIndex !== -1) {
                const updatedCart = state.cart.map((item, index) => {
                    if (index === existingProductIndex) {
                        return { ...item, quantity: item.quantity + 1 }; // Increase quantity
                    }
                    return item;
                });
                return { ...state, cart: updatedCart };
            } else {
                // When adding a new item to the cart, initialize its quantity to 1
                const updatedCart = [...state.cart, { ...productToAdd, quantity: 1 }];
                return { ...state, cart: updatedCart };
            }

        }
        case 'restore_state': {
            const stateFromLocal = JSON.parse(localStorage.getItem('Shopping_Cart'));
            return { ...stateFromLocal };
        }
        case 'remove_item': {
            const  updatedCart  = action.payload;
            return {...state, cart: updatedCart}
        }
        case 'total_sum': {
            const  total  = action.payload;
            return {...state, total: total }
        }
        case 'decrease_quantity': {
            const  itemTitle  = action.payload;
            const updatedCart = state.cart.map(item => {
                if(item.title === itemTitle) {
                    return {...item, quantity: Math.max(0, item.quantity - 1) }
                }
                return item
            });
            return {...state, cart: updatedCart}
        }

        default: 
            return state
    }
}
