import React from 'react';
  

  const addproducttoCart = (state, payload) => {
    const updatedCart = [...state.cart]
    const updatedCartIndex = updtadeCart.findIndex(
        (item) => cart.id === paylaod.id
    );


if (updatedCartIndex < 0 ) {
    updatedCart.push({...paylaod, quantity: 1});
} else {
        const updateditem = {updatedCart[updatedCartIndex]}
        updateditem.quantity ++;
        updatedCart[updatedCartIndex] = updateditem;

    return {
         ...state, 
         cart:updatedCart, total :
         state.total + payload.price
    };

}

    const removeproductTocart = (state, payload) => {
     
    }
const reducer = (state,action) => {
   switch (action.type) {
    case "Add-to-Cart" :
        addproducttoCart(state,action.payload)
    }
    case "remove_product" : {
        const updatedCart= [...state.cart];
        const updatedCartIndex = updtadeCart.findIndex(
         (item) => cart.id === action.paylaod.id
        );
        const updateditem = {updatedCart[updatedCartIndex]};
     
        if (updateditem.quantity === 1) {
             const filteredItem = updatedCart.filter(
                 (item) => cart.id !== cart.payload.id
             );
             return {
                 ...state, 
                   cart :  filteredItem,
                  total : state.total - action.payload.price }
        } else {
     
         updateditem.quantity --,
         updatedCart[updatedCartIndex] = updateditem;
     
         return {...state,
              cart : updatedCart, 
             total : state.total  - action.payload.price }
        
        }
        default:
        return state;
   }};  
     
export default reducer;