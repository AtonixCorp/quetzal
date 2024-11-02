import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import ContactUs from '../account/ContactUs';
import { getPosts, getComments } from '../api'; // Import the API service

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
      const commentsData = await getComments();
      setComments(commentsData);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <header className="text-center my-5 tiny-text">
        <h1>
          AtonixCorp is a Cutting Edge Technology Company Empowering Innovation
          Through Data Analytics 🌐
        </h1>
        <p className="lead">
          Transforming Industries with Data-Driven Solutions
        </p>
      </header>

      <section>
        <h2 className="text-center services-heading">Our Services</h2>
        <div className="row">
          <ServiceCard
            title="Data Analytics"
            description="Unlock the true potential of your data with our advanced analytics solutions. We provide organizations with actionable insights that facilitate informed decision-making, optimize operations, and enhance user experiences."
          />
          <ServiceCard
            title="IoT Solutions"
            description="Embrace the future with our Internet of Things (IoT) solutions. We develop smart, interconnected ecosystems that promote seamless data exchange and actionable insights."
          />
          <ServiceCard
            title="Agriculture Technology"
            description="Our commitment to sustainable agriculture drives us to create innovative solutions that optimize irrigation, fertigation, and solar power systems."
          />
          <ServiceCard
            title="Oil Technology Research"
            description="AtonixCorp is dedicated to advancing the oil industry through cutting-edge research and development focused on improving efficiency and sustainability."
          />
          <ServiceCard
            title="Security Research"
            description="Our team of expert security researchers is committed to identifying vulnerabilities and developing robust solutions that safeguard your data and systems."
          />
          <ServiceCard
            title="Robotic and Computational Solutions"
            description="We leverage robotics and computational technology to streamline processes and enhance operational capabilities."
          />
        </div>
      </section>

      <section className="text-center my-5">
        <h3>Join Us on Our Journey!</h3>
        <p>
          At AtonixCorp, we believe that innovation is driven by passionate
          individuals. Explore career opportunities with us.
        </p>
        <button className="btn btn-primary" onClick={toggleContactForm}>
          Contact Us
        </button>
      </section>
      {showContactForm && <ContactUs />}

      <section>
        <h2 className="text-center">Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <h2 className="text-center">Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.content}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 service-card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Home;
