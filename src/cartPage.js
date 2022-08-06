import React from 'react';
import Layout from "react"
const cartPage = () => {
    const {cart, total} = useCart();
    const dispatch = useCartActions();  

    if (!cart.lenght) {
     <Layout>
        <div> no item in the cart</div>
     </Layout>
    }

    const incrementHandler = (cartItem) => {
        dispatch={type:"Add-to-Cart", paylaod: cart.item}
    }
    const decrementHandler = (cartItem) => {
        dispatch={type:"remove_product" ,paylaod: cart.item}
    }

    return (
        <Layout>
            <main>
                <section>
                    {cart.map((item) => {
                        return(
                            <div className='cartiIem'>
                                <div className='itemImg'>
                                    <img src={item.image} alt={item.name}/>
                                </div>
                                <div>{item.name}</div>
                                <div>{item.price * item.quantity}</div>
                                <div>
                                    <button onClick={(item) => incrementHandler(item)} >remove</button>
                                    <button>{item.quantity}</button>
                                    <button onClick={(item) => decrementHandler(item) }>Add</button>
                                </div>
                            </div>
                        )
                    })}
                    <section>
                        <h2 className='cart-summary'> cart summary </h2>
                        <div>{total}</div>
                    </section>
                    
                </section>
            </main>
        </Layout>
    );

        
       
};

export default cartPage;