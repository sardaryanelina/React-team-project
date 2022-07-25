import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import productsList from "../assets/products-content.json";
import "../card.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/Logo_withYellow.png';
import Product from "../components/Product";
import NotFound from './NotFound';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';

function ProductItem() {
    let params = useParams();
    const name = params.name;
    const product = productsList.find(prod => prod.name === name);
    const productsWomenDisplay = productsList.filter(prod => prod.category === "woman").slice(0, 3);
    const productsMenDisplay = productsList.filter(prod => prod.category === "man").slice(0, 3);
    const productsKidsDisplay = productsList.filter(prod => prod.category === "kid").slice(0, 3);

    if (!product) {
        return <NotFound />
    }
    return (
        <>
            <div className='container-fluid' id="top">
                <div className="row p-4">
                    <div className="pt-4 mb-4 mt-4"><img src={logo} alt="Logo of Maruel" width="220" /></div>
                    <h1>{product.name}</h1>
                    <div className="px-auto" id='img'>
                        <Container className='p-5'>
                            <Row>
                                <Card style={{ height: '60%' }} className="md-12">
                                    <Card.Body>
                                        <Carousel>
                                            <Carousel.Item interval={1000}>
                                                <img className="d-block w-100" src={product.imageUrl[0].url} alt={(`1. ${product.name}`)} />
                                                <Carousel.Caption>
                                                    <h3>{(`1. ${product.name}`)}</h3>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item interval={500}>
                                                <img className="d-block w-100" src={product.imageUrl[1].url} alt={(`2. ${product.name}`)} />
                                                <Carousel.Caption>
                                                    <h3>{(`2. ${product.name}`)}</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100" src={product.imageUrl[2].url} alt={(`3. ${product.name}`)} />
                                                <Carousel.Caption>
                                                    <h3>{(`3. ${product.name}`)}</h3>
                                                    <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                        <p> Price: ${product.price} </p>
                                        <p className="pt-4">{product.description} </p>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Container>
                    </div>
                    <p>--------------------------------------------------------</p>
                </div>
                <h2 className="mb-2 mt-4">Other products</h2>
                <h4 className="mt-4"><em><Link to="/women">Women collection</Link> </em></h4>
                <div className={"grid"}>
                    {productsWomenDisplay.map((product, i) => <Product {...product} key={i} />)}
                </div>
                <h4 className="mt-5"><em><Link to="/men">Men collection</Link></em></h4>
                <div className={"grid"}>
                    {productsMenDisplay.map((product, i) => <Product {...product} key={i} />)}
                </div>
                <h4 className="mt-5"><em><Link to="/kids">Children collection</Link> </em></h4>
                <div className={"grid"}>
                    {productsKidsDisplay.map((product, i) => <Product {...product} key={i} />)}
                </div>
                <h6 className="m-5"><a href='#top'>Back to Top</a></h6>
            </div>
        </>
    );
}

export default ProductItem;