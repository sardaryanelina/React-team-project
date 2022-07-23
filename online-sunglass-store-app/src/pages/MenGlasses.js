import React from 'react';
import "../index.css"
import "../card.css"
import productsMen from "../assets/products-men.json"
import Product from "../components/Product";

export default function MenProducts() {
    return (
        <div className={"container"}>
            <main className={"main"}>
                <h1>
                    Sunglasses Online Shop
                </h1>
                <h1>
                    MAN
                </h1>
                <div className={"grid"}>
                    {
                        productsMen.map((product, i) => <Product {...product} key={i} />)
                    }
                </div>
            </main>
            <div
                id="snipcart"
                data-api-key="NWMwZWNkZGMtZjU2ZS00YzM3LWFlZjYtMmM5Zjk0MWViZDcxNjM3Njg0OTY0ODg5NTk4MTM3" hidden
            >
            </div>
        </div>
    );
}
