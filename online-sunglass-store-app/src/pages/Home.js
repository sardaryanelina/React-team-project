import React from 'react';
import "../index.css"
import "../card.css"
import productsList from "../assets/products-content.json"
import Product from "../components/Product";
import logo from '../images/Logo_withYellow.png';

export default function Home() {
  return (
    <div className={"container"} id="top">
      <main className={"main"}>
        <div className="mb-5">
          <img src={logo} alt="Logo of Maruel" width="280" />
        </div>
        <h1>Our collection </h1>
        <div className={"grid"}>
          {productsList.map((product, i) => <Product {...product} key={i} />)}
        </div>
        <h1 className="mt-5"><a href='#top'>Back to the top</a></h1>
      </main>
      <div id="snipcart"
        data-api-key="NWMwZWNkZGMtZjU2ZS00YzM3LWFlZjYtMmM5Zjk0MWViZDcxNjM3Njg0OTY0ODg5NTk4MTM3"
        hidden >
      </div>
    </div>
  );
}