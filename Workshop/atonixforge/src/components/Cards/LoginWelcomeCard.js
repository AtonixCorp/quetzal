import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { FaGitlab, FaGithub, FaLinkedin, FaSlack, FaDiscord } from 'react-icons/fa';
import './LoginWelcomeCard.css';

const LoginWelcomeCard = () => {
  return (
    <Card className="welcome-card">
      <Card.Body>
        <Card.Title>Welcome to Your Hub</Card.Title>
        <Card.Text>What would you like to do?</Card.Text>
        <Form>
          <Button variant="primary" className="mb-2" block>
            Sign In
          </Button>
          <Button variant="secondary" className="mb-2" block>
            Sign Up
          </Button>
          <Button variant="info" className="mb-2" block>
            Contact
          </Button>
        </Form>
        <div className="social-media-icons">
          <FaGitlab size={30} />
          <FaGithub size={30} />
          <a href={`https://www.linkedin.com/in/your-username`} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <FaSlack size={30} />
          <FaDiscord size={30} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default LoginWelcomeCard;
