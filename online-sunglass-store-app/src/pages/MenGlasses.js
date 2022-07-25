import React from 'react';
import "../index.css"
import "../card.css"
import products from "../assets/products-content.json"
import Product from "../components/Product";

export default function MenProducts() {
    const productsMen = products.filter(prod => prod.category === "man");
    return (
        <div className={"container"}>
            <main className={"main"}>
                <h1>MEN SUNGLASSES</h1>
                <div className={"grid"}>
                    { productsMen.map((product, i) => <Product {...product} key={i} />)}
                </div>
            </main>
        </div>
    );
}
