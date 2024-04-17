

export default function CartReducer(state, action) {
    switch (action.type) {
        case 'add_item': {
            const { title , price, img } = action.payload; 

            const updatedCart = [...state.cart, { title , price, img }];

            return {
                ...state,
                cart: updatedCart
            };
        }
        default:
            return state; // Default case should be outside of the switch block
    }
}
