import React from 'react';
import "../index.css"
import "../card.css"
import products from "../assets/products-content.json"
import Product from "../components/Product";


export default function WomenProducts() {
    const productsWomen = products.filter(prod => prod.category === "woman");
    return (
        <div className={"container"}>
            <main className={"main"}>
                <h1> Collection for women</h1>
                <div className={"grid"}>
                    { productsWomen.map((product, i) => <Product {...product} key={i} />) }
                </div>
            </main>
        </div>
    );
}
