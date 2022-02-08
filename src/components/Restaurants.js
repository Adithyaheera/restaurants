import React from 'react';
import Home from '../Home';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Restaurants({item}) {
    return (
        <>
        <Link to={`restaurants/${item.id}`}>
            <Card className="my-3 p-3 rounded">
                <Card.Img src={item.photograph} className="p-3" variant="top"/>
                <Card.Body>
                    <Card.Title as="div">
                        <h4>{item.name}</h4>
                    </Card.Title>
                    <Card.Text as="div">
                        <p><strong>Cuisine:</strong>{item.cuisine_type}</p>

                    </Card.Text>
                    <Card.Text as="div">
                        <p>{item.neighborhood}</p>

                    </Card.Text>
                </Card.Body>

            </Card>
            </Link>
        </>
    )
}

export default Restaurants