import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="left-column" md={3}>
          <div className="content">
            <h2>Contents</h2>
            <ul>
              <li><a href="#company-overview">Company Overview</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#focus-areas">Focus Areas</a></li>
              <li><a href="#teams">Teams</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </div>
        </Col>
        <Col className="middle-column" md={6}>
          <section id="company-overview">
            <h2>Company Overview</h2>
            <p>AtonixCorp is at the forefront of technological innovation, developing solutions that push the boundaries of what&apos;s possible. Our mission is to lead the way in technological evolution, making a significant impact on the world through collaboration, innovation, and continuous learning.</p>
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <table>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Overview</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Therapeutic</td>
                  <td>Harnessing the power of quantum machine learning to revolutionize personalized medicine. By analyzing complex patient data, including genetic information and medical history, this project strives to provide tailored treatment recommendations that enhance healthcare outcomes. Leveraging IBM’s quantum algorithms in conjunction with CUDA for efficient data processing, it addresses the limitations of traditional methods and sets the stage for transformative advancements in personalized healthcare.</td>
                </tr>
                <tr>
                  <td>Agrotone</td>
                  <td>Transforming agricultural practices through IoT and big data. This project focuses on increasing yield, ensuring sustainable farming, and optimizing resource use in agriculture.</td>
                </tr>
                <tr>
                  <td>Hydrpetro</td>
                  <td>Developing cutting-edge technology solutions for the oil and gas industry. This project aims to enhance the efficiency and safety of oil extraction and processing through innovative techniques and technologies.</td>
                </tr>
                <tr>
                  <td>Future Networks</td>
                  <td>Pioneering next-generation networking solutions to support the demands of tomorrow. Focused on developing scalable and efficient network infrastructures.</td>
                </tr>
                <tr>
                  <td>SmartTech Integration</td>
                  <td>Developing intelligent systems that integrate seamlessly with existing technologies to improve efficiency and functionality.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="focus-areas">
            <h2>Focus Areas</h2>
            <table>
              <thead>
                <tr>
                  <th>Focus Area</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Agriculture</td>
                  <td>Leveraging IoT and big data to transform agricultural practices, increase yield, and ensure sustainable farming.</td>
                </tr>
                <tr>
                  <td>Fintech</td>
                  <td>Developing secure and efficient financial technologies to enhance digital transactions and financial services.</td>
                </tr>
                <tr>
                  <td>Medical Research</td>
                  <td>Advancing medical research through innovative data analytics and IoT solutions to improve patient outcomes.</td>
                </tr>
                <tr>
                  <td>Security</td>
                  <td>Creating robust security solutions to protect sensitive data and ensure privacy in the digital age.</td>
                </tr>
                <tr>
                  <td>Big Data</td>
                  <td>Harnessing the power of big data to derive actionable insights and drive strategic decisions.</td>
                </tr>
                <tr>
                  <td>Cloud Computing</td>
                  <td>Utilizing cloud technologies to provide scalable, flexible, and cost-effective computing resources.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="teams">
            <h2>Teams</h2>
            <table>
              <thead>
                <tr>
                  <th>Team Name</th>
                  <th>Mission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pioneers</td>
                  <td>The Pioneers team embodies the spirit of exploration and innovation, developing cutting-edge solutions that set new benchmarks in the industry.</td>
                </tr>
                <tr>
                  <td>Unity Developers</td>
                  <td>The Unity Developers team is dedicated to fostering collaboration and harmony in software development. Our mission is to create cutting-edge software that meets and exceeds the needs of our clients.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="resources">
            <h2>Resources</h2>
            <table>
              <thead>
                <tr>
                  <th>Resource Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Development Guidelines</td>
                  <td>Access our Development Guidelines for best practices, coding standards, and tools.</td>
                </tr>
                <tr>
                  <td>Contributing</td>
                  <td>Interested in contributing to our projects? Check out our Contributing Guide for details on how to get involved.</td>
                </tr>
                <tr>
                  <td>Support</td>
                  <td>Need help? Visit our Support section for technical assistance and troubleshooting resources.</td>
                </tr>
              </tbody>
            </table>
          </section>
        </Col>
        <Col className="right-column" md={3}>
          <div className="content">
            <section id="community">
              <h2>Community</h2>
              <p>Join the AtonixCorp community and stay connected!</p>
              <ul>
                <li>Twitter: <a href="https://twitter.com/AtonixCorp">@AtonixCorp</a></li>
                <li>GitHub: <a href="https://github.com/AtonixCorp">AtonixCorp on GitHub</a></li>
                <li>Discord: <a href="https://discord.gg/AtonixCorp">Join our Discord server</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/company/AtonixCorp">AtonixCorp on LinkedIn</a></li>
                <li>Slack: <a href="https://atonixcorp.slack.com">AtonixCorp on Slack</a></li>
              </ul>
            </section>
            <section id="contact-information">
              <h2>Contact Information</h2>
              <p>For any questions or support, please contact:</p>
              <ul>
                <li>Project Manager: Samuel (<a href="mailto:guxegdsa@atonixcorp.com">guxegdsa@atonixcorp.com</a>)</li>
                <li>Technical Lead: Samuel (<a href="mailto:guxegdsa@atonixcorp.com">guxegdsa@atonixcorp.com</a>)</li>
              </ul>
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
