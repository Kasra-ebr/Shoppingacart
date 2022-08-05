import React from 'react';

const cartPage = () => {
    const {cart} = useCart()
    
    
    return (
        <main>
        {
            cart.lenght ? cart.map((item) => <div>

                <p key={item.id}> </p>
                <p> {item.price}</p>

            </div>) : <p> no item in the cart</p> 
        }
        </main>
    );

        
    
};

export default cartPage;