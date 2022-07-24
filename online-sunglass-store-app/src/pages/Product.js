import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import productsList from "../assets/products-content.json";
import "../card.css"
import logo from '../images/logo.png';
import Product from "../components/Product";

function ProductItem() {
    let params = useParams();
    const name = params.name;
    const product = productsList.find(prod => prod.name === name);
    const productsWomenDisplay = productsList.filter(prod => prod.category === "woman").slice(0,3);
    const productsMenDisplay = productsList.filter(prod => prod.category === "man").slice(0,3);
    const productsKidsDisplay = productsList.filter(prod => prod.category === "kid").slice(0,3);

    if (!product) {
        return <h3>Product not found.</h3>
    }
    return (
        <>
            <div className='container-fluid' id="top">
                <div className="row p-4">
                    <div className="pt-4 mb-4 mt-4">
                        <img src={logo} alt="Logo of Maruel" width="220" />
                    </div>
                    <h1>
                        {product.name}
                    </h1>
                    <div className="pt-4">
                        <img src={product.imageUrl} alt={product.name} width="220" />
                    </div>
                    <p>
                        Price: ${product.price}
                    </p>
                    <p className="pt-4">
                        {product.description}
                    </p>
                   <p>--------------------------------------------------------</p>
                </div>
                <h2 className="mb-2 mt-4">Other products</h2>        
                <h4 className="mt-4"><em>Women collection</em></h4>
                <div className={"grid"}>
                    { productsWomenDisplay.map((product, i) => <Product {...product} key={i} />) }
                </div>
                <h4 className="mt-5"><em>Men collection</em></h4>
                <div className={"grid"}>
                    { productsMenDisplay.map((product, i) => <Product {...product} key={i} />) }
                </div>
                <h4 className="mt-5"><em>Children collection</em></h4>
                <div className={"grid"}>
                    { productsKidsDisplay.map((product, i) => <Product {...product} key={i} />) }
                </div>              
                <h6 className="m-5"><a href='#top'>Back to Top</a></h6>
            </div>
        </>
    );
}

export default ProductItem;