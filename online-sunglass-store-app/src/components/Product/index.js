import React from 'react';
import "./index.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { id, imageUrl, name, description, price } = props;
    return (
        <div key={id}>
            <Container>
                <Row >
                    <Col lg={4} md={3}>
                        <Card style={{ width: '18rem' }} className="mb-4">
                            <Link to={`/product/${props.name}`}><Card.Img variant="top" src={imageUrl[0].url} alt={`Image of ${name}`} className="card-image-top" /></Link>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Price: ${price}</Card.Subtitle>
                                <Card.Text>
                                    {description.substring(0, 60)}<Link to={`/product/${props.name}`}>...</Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link as={Link} to={`/product/${props.name}`}>More info</Card.Link>
                                </Card.Text>
                                <Button className="snipcart-add-item "
                                    data-item-id={id}
                                    data-item-image={imageUrl[0].url}
                                    data-item-name={name}
                                    data-item-url="/"
                                    data-item-price={price} variant=" btn-dark">
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