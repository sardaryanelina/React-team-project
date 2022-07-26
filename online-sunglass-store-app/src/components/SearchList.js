import React from 'react';
import "../index.css"
import "../card.css"
import products from "../assets/products-content.json"
import Product from "./Product";

export default function SearchList(props) {
    const input = props.input;
    // alert(input);

    if (input === "") {
        return (
            <div className='container-fluid'>
                <div className="row p-4">
                    <h1 className="pt-4 m-4">Please, type the name of the product.
                    </h1>
                </div>
            </div>);
    }
    const productsSearched = products.filter(prod => prod.name.toLowerCase().includes(input));
    if (!productsSearched) {
        return (
            <div className='container-fluid'>
                <div className="row p-4">
                    <h1>No Product  was found by name {input}</h1>
                </div>
            </div>
            );
    }
    return (
        <div className={"container"}>
            <main className={"main"}>
                <div className={"grid"}>
                    {productsSearched.map((product, i) => <Product {...product} key={i} />)}
                </div>
            </main>
        </div>
    );
}