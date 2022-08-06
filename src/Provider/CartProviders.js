import { useContext, useReducer } from "react";
 
initialState = {
    cart:[],
    total:0,
}
const CartProviders = ({children}) => {
   const [cart, dispatch] = useReducer(reducer, [])

    const cartContext = React.createContext();
    const cartContextDispatcher = React.createContext();
    return (
        <div>
            <cartContext.Provider value={cart}>
                <cartContextDispatcher.Provider value={dispatch}>
   
                 {children}
                </cartContextDispatcher.Provider>
            </cartContext.Provider>
        </div>
    );
};

export default CartProviders;

export const useCart = () => useContext(cartContext) ;
export const useCartActions = () => useContext(cartContextDispatcher);
