import React from 'react';
import "../index.css"
import "../card.css"
import productsKids from "../assets/products-kids.json"
import Product from "../components/Product";

export default function KidsProducts() {
    return (
        <div className={"container"}>
            <main className={"main"}>
                <h1>Collection for children </h1>
                <div className={"grid"}>
                    { productsKids.map((product, i) => <Product {...product} key={i} />) }
                </div>
            </main>
            <div
                id="snipcart"
                data-api-key="NWMwZWNkZGMtZjU2ZS00YzM3LWFlZjYtMmM5Zjk0MWViZDcxNjM3Njg0OTY0ODg5NTk4MTM3" 
                hidden>
            </div>
        </div>
    );
}