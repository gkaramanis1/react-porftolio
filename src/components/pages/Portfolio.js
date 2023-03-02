import React from 'react';
import Card from 'react-bootstrap/Card';

const HUBL= require("../assets/galaxy.jpg");

export default function Portfolio() {
  return (
    <div>
    <div className="background"></div>
    <div className="background background2"></div>
    <div className="background background3"></div>
    <div className="content">
      <h1>Some of My Projects!</h1>
      <p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={HUBL} />
      <Card.Body>
        <Card.Title>HUBL</Card.Title>
        <Card.Text>
        Social network to share great destinations!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Live Site</Card.Link>
        <Card.Link href="#">Github</Card.Link>
      </Card.Body>
      </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={HUBL} />
      <Card.Body>
        <Card.Title>HUBL</Card.Title>
        <Card.Text>
        Social network to share great destinations!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Live Site</Card.Link>
        <Card.Link href="#">Github</Card.Link>
      </Card.Body>
    </Card>
    
      </p>
    </div>
    </div>
  );
}
