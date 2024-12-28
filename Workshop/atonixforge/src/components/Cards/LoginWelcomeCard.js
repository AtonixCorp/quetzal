import React from 'react';
<<<<<<< HEAD
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
=======
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';
import { FaGitlab, FaGithub, FaLinkedin, FaSlack, FaDiscord } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './LoginWelcomeCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const LoginWelcomeCard = ({ show, handleClose }) => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
    handleClose();
  };

  const handleSignUpClick = () => {
    navigate('/signup');
    handleClose();
  };

  const handleContactClick = () => {
    navigate('/contact');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Welcome To AtonixCorp Hub</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Button variant="primary" className="mb-2" block onClick={handleSignInClick}>
            Sign In
          </Button>
          <Button variant="secondary" className="mb-2" block onClick={handleSignUpClick}>
            Sign Up
          </Button>
          <Button variant="info" className="mb-2" block onClick={handleContactClick}>
>>>>>>> bc34a41db3d5795e4543f186c43dee5903a67521
            Contact
          </Button>
        </Form>
        <div className="social-media-icons">
<<<<<<< HEAD
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
=======
          <a href="https://www.linkedin.com/in/atonixcorp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/atonixcorp" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} />
          </a>
          <a href="https://gitlab.com/guxegdsa" target="_blank" rel="noopener noreferrer" aria-label="GitLab">
            <FaGitlab size={30} />
          </a>
          <a href="https://slack.com/atonixcorp" target="_blank" rel="noopener noreferrer" aria-label="Slack">
            <FaSlack size={30} />
          </a>
          <a href="https://discord.com/invite/AtonixCorp" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <FaDiscord size={30} />
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
};

LoginWelcomeCard.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default LoginWelcomeCard;
>>>>>>> bc34a41db3d5795e4543f186c43dee5903a67521
