import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({ topics }) => {
  const [activeTopic, setActiveTopic] = useState(null);

  const toggleTopic = (index) => {
    setActiveTopic(activeTopic === index ? null : index);
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Explore Cutting-Edge Topics</h2>
      {topics.map((topic, index) => (
        <section key={index} className="topic-section">
          <h3 className="topic-title" onClick={() => toggleTopic(index)}>
            {topic.title}
          </h3>
          {activeTopic === index && (
            <div className="topic-content">
              <p>{topic.content}</p>
            </div>
          )}
        </section>
      ))}
    </aside>
  );
};

Sidebar.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebar;
