import React from 'react';
import "./index.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Image } from 'react-bootstrap';
import sunglass from '../../images/1.jpg';

export default function Product(props) {
    const { id, imageUrl, name, description, price } = props

    return (
        <div key={id}>
            <Container>
                <Row >
                    <Col lg={4} md={3}>
                        <Card style={{ width: '18rem' }} className="mb-4">
                            <Card.Img variant="top" src={imageUrl} alt={`Image of ${name}`} />
                            {/* <Image 
                src={imageUrl} 
                className="card-image-top"
                alt={`Image of ${name}`} 
                fluid 
                /> */}
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Price: ${price}</Card.Subtitle>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link href="#">More info</Card.Link>
                                </Card.Text>
                                <Button className="snipcart-add-item"
                                    data-item-id={id}
                                    data-item-image={imageUrl}
                                    data-item-name={name}
                                    data-item-url="/"
                                    data-item-price={price} variant="primary">
                                    Add to Cart
                                </Button>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}