import React from 'react'
import pizzaImg from '../../img/pizza.jpg'
import { Card } from 'react-bootstrap'

export function HomePage() {
    return (
        <Card style={{ width: '50%', margin: '10px' }} className="card">
            <Card.Img variant="top" src={pizzaImg} />
            <Card.Body>
                <Card.Title>Pizzeria Romana</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}