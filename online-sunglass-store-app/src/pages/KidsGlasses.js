import React from 'react';
import "../index.css"
import "../card.css"
import products from "../assets/products-content.json"
import Product from "../components/Product";

export default function KidsProducts() {
    const productsKids = products.filter(prod => prod.category === "kid");
    return (
        <div className={"container"}>
            <main className={"main"}>
                <h1>CHILDREN SUNGLASSES</h1>
                <div className={"grid"}>
                    { productsKids.map((product, i) => <Product {...product} key={i} />) }
                </div>
            </main>
        </div>
    );
}