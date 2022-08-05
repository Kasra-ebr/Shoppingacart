import React from 'react';

const reducer = (state,action) => {
   switch (action.type) {
    case "Add-to-Cart" :
        const updatedCart = [...state.cart]
        const updatedCartIndex = updtadeCart.filter(() => cart.id === action.paylaod.id);
    if (updatedCartIndex < 0 ) {
        updatedCart.push({...action.paylaod, quantity: 1});
    } else {
            const updateditem = {updatedCart[updatedCartIndex]}
            updateditem.quantity ++;
            updatedCart[updatedCartIndex] = updateditem;

        return {...state, updatedCart}
    }
    ,
   }
};

export default reducer;