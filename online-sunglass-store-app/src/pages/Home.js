import React from 'react';
import "../index.css"
import "../card.css"
import productsMen from "../assets/products-men.json"
import productsWomen from "../assets/products-women.json"
import productsKids from "../assets/products-kids.json"
import Product from "../components/Product";
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <div className={"container"} id="top">
      <main className={"main"}>
        <div className="mb-5">
          <img src={logo} alt="Logo of Maruel" width="280" />
        </div>
        <h1 ><Link to="/men">Men collection</Link> </h1>
        <div className={"grid"}>
          {productsMen.map((product, i) => <Product {...product} key={i} />)}
        </div>
        <h1 className="mt-5"><Link to="/women">Women collection</Link> </h1>
        <div className={"grid"}>
          {productsWomen.map((product, i) => <Product {...product} key={i} />)}
        </div>
        <h1 className="mt-5"><Link to="/kids">Children collection</Link> </h1>
        <div className={"grid"}>
          {productsKids.map((product, i) => <Product {...product} key={i} />)}
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