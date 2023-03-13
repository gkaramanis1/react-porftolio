import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaGithub, FaLink } from "react-icons/fa";  

const HUBL= require("../assets/coffee.jpeg");
const Password= require("../assets/password.png")
const Quiz= require("../assets/quiz.png")
const Schedule= require("../assets/schedule.jpeg")

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
      <Card style={{ width: '18rem', marginBottom: '45px'}}>
      <Card.Img variant="top" src={HUBL} />
      <Card.Body>
        <Card.Title style={{ color: 'black'}}>HUBL</Card.Title>
        <Card.Text style={{ color: 'black'}}>
        Social network to share great destinations!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://pacific-brook-72214.herokuapp.com/"><FaLink size={32} color="black"/></Card.Link>
        <Card.Link href="https://github.com/gkaramanis1/PROJECT-2/tree/main"><FaGithub size={32} color="black"/></Card.Link>
      </Card.Body>
      </Card>
    <Card style={{ width: '18rem', marginBottom: '45px' }}>
      <Card.Img variant="top" src={Password} />
      <Card.Body>
        <Card.Title style={{ color: 'black'}}>Password Generator</Card.Title>
        <Card.Text style={{ color: 'black'}}>
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
      <Card style={{ width: '18rem', marginBottom: '45px' }}>
      <Card.Img variant="top" src={Schedule} />
      <Card.Body>
        <Card.Title style={{ color: 'black'}}>Work Day Scheduler</Card.Title>
        <Card.Text style={{ color: 'black'}}>
        Plan out your day!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://gkaramanis1.github.io/day-scheduler/"><FaLink size={32} color="black"/></Card.Link>
        <Card.Link href="https://github.com/gkaramanis1/day-scheduler"><FaGithub size={32} color="black"/></Card.Link>
      </Card.Body>
      </Card>
    <Card style={{ width: '18rem', marginBottom: '45px' }}>
      <Card.Img variant="top" src={Quiz} />
      <Card.Body>
        <Card.Title style={{ color: 'black'}}>Coding quiz</Card.Title>
        <Card.Text style={{ color: 'black'}}>
        Test your coding knowledge!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://gkaramanis1.github.io/quiz/"><FaLink size={32} color="black"/></Card.Link>
        <Card.Link href="https://github.com/gkaramanis1/quiz"><FaGithub size={32} color="black"/></Card.Link>
      </Card.Body>
    </Card>
    </CardGroup>
    </p>
    </div>
    </div>
  );
}
