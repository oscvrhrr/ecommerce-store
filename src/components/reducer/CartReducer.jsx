

export default function CartReducer(state, action) {
    switch (action.type) {
        case 'add_item': {
            const productToAdd = action.payload;
            const  updatedCart = [...state.cart, productToAdd];
            return {...state, cart: updatedCart}

        }
        case 'remove_item': {
            const  updatedCart  = action.payload;
            return {...state, cart: updatedCart}
        }
        case 'total_sum': {
            const  total  = action.payload;
            return {...state, total: total }
        }

        default: 
            return state
    }
}
