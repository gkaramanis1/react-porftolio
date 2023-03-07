import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaGithub, FaLink } from "react-icons/fa";  

const HUBL= require("../assets/galaxy.jpg");
const Password= require("../assets/password.png")
export default function Portfolio() {
  return (
    <div>
    <div className="background"></div>
    <div className="background background2"></div>
    <div className="background background3"></div>
    <div style={{overflow:'auto', height:'80%', width:'80%'}} className="content">
      <h1 style={{fontWeight: 'bold', fontSize: '25px'}}>Some of My Projects!</h1>
      <p>
      <CardGroup>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={HUBL} />
      <Card.Body>
        <Card.Title>HUBL</Card.Title>
        <Card.Text>
        Social network to share great destinations!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://pacific-brook-72214.herokuapp.com/"><FaLink size={32} color="black"/></Card.Link>
        <Card.Link href="https://github.com/gkaramanis1/PROJECT-2/tree/main"><FaGithub size={32} color="black"/></Card.Link>
      </Card.Body>
      </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Password} />
      <Card.Body>
        <Card.Title>Password Generator</Card.Title>
        <Card.Text>
        Need a password? Generate one here!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://gkaramanis1.github.io/password-generator/"><FaLink size={32} color="black"/></Card.Link>
        <Card.Link href="https://github.com/gkaramanis1/password-gen"><FaGithub size={32} color="black"/></Card.Link>
      </Card.Body>
    </Card>
    </CardGroup>

    <CardGroup>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={HUBL} />
      <Card.Body>
        <Card.Title>Project 3</Card.Title>
        <Card.Text>
        Social network to share great destinations!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#"><FaLink size={32} color="black"/></Card.Link>
        <Card.Link href="#"><FaGithub size={32} color="black"/></Card.Link>
      </Card.Body>
      </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={HUBL} />
      <Card.Body>
        <Card.Title>Project 4</Card.Title>
        <Card.Text>
        Social network to share great destinations!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#"><FaLink size={32} color="black"/></Card.Link>
        <Card.Link href="#"><FaGithub size={32} color="black"/></Card.Link>
      </Card.Body>
    </Card>
    </CardGroup>

    <CardGroup>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={HUBL} />
      <Card.Body>
        <Card.Title>Project 5</Card.Title>
        <Card.Text>
        Social network to share great destinations!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#"><FaLink size={32} color="black"/></Card.Link>
        <Card.Link href="#"><FaGithub size={32} color="black"/></Card.Link>
      </Card.Body>
      </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={HUBL} />
      <Card.Body>
        <Card.Title>Project 6</Card.Title>
        <Card.Text>
        Social network to share great destinations!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#"><FaLink size={32} color="black"/></Card.Link>
        <Card.Link href="#"><FaGithub size={32} color="black"/></Card.Link>
      </Card.Body>
    </Card>
    </CardGroup>

      </p>
    </div>
    </div>
  );
}
