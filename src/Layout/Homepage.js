import React from 'react';
import Layout from "react";
import * as  data from "../../data";

const Homepage = () => {

        const addProductHandler = (product) => {
                // console.log(product);

        }


    return (
        <div>
            <Layout>
                <main className='container'>
                    <section className='product-list'>
                        {products.data.map((product) => {
                            return(
                                <section className='product' key={product.id}>
                                    <div className='product-img'>
                                        <img src={product.image} alt={product.name}/>
                                    </div>
                                    <div className='product description'>
                                        <p>{product.name}</p>
                                        <p>{product.price}</p>
                                        <button className="btn-primary"onClick={()=> addProductHandler(product)}>Add to Cart</button>
                                    </div>
                                  
                                </section>
                            );
                            }
                        )}
                    </section>
                </main>
            </Layout>
        </div>
    );
};


export default Homepage;