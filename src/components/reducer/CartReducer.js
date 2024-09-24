


export const initState = {
    items: [
        { id: 1, name: "XX99 MK II", price: 2999, quantity: 0, path: "/audio-store-assets/cart/image-xx99-mark-two-headphones.jpg" },
        { id: 2, name: "XX99 MK I", price: 1750, quantity: 0, path: "/audio-store-assets/cart/image-xx99-mark-one-headphones.jpg" },
        { id: 3, name: "XX59", price: 899, quantity: 0, path: "/audio-store-assets/cart/image-xx59-headphones.jpg" },
        { id: 4, name: "ZX9", price: 4500, quantity: 0, path: "/audio-store-assets/cart/image-zx9-speaker.jpg" },
        { id: 5, name: "ZX7", price: 3500, quantity: 0, path: "/audio-store-assets/cart/image-zx7-speaker.jpg" },
        { id: 6, name: "YX1", price: 599, quantity: 0, path: "/audio-store-assets/cart/image-yx1-earphones.jpg" }
    ],
    cart: [

    ],
    totalCost: 0
}


export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemToAdd = state.items.find(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.cart.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
          totalCost: state.totalCost + existingItem.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...itemToAdd, quantity: 1 }],
          totalCost: state.totalCost + itemToAdd.price,
        };
      }
    }
    case "CLEAR_CART": {
        return {
            ...state,
            cart: [],
            totalCost: 0
        }
    }
  }
};