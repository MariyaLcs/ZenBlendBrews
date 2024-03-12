import React from 'react';

const AboutPage = () => (
  <div className="text-light container">
    <div className="row">
      <div className="col-md-8">
        <h2 className="my-5">About the project</h2>
        <p className="my-5">
          This project serves as a practical exploration undertaken during my
          journey through a React 17 and Redux course. It represents my hands-on
          experience with these technologies, embodying the learning process and
          the application of course concepts in a real-world scenario.
        </p>
        <h2 className="my-5">Main Tools and Technologies</h2>
        <ul>
          <li>
            <strong>React 17:</strong> Understand the fundamentals of React 17
            to build interactive UIs.
          </li>
          <li>
            <strong>Redux:</strong> Learn state management techniques with Redux
            and how to integrate it with React components for efficient data
            flow.
          </li>
          <li>
            <strong>Asynchronous Operations:</strong> Master handling
            asynchronous operations in Redux for a real-world app.
          </li>
          <li>
            <strong>Error Handling:</strong> Implement best practices for
            handling errors and managing asynchronous states to create robust
            and user-friendly applications.
          </li>
        </ul>
        <h2 className="my-5">Learning Outcomes</h2>
        <ul>
          <li>Develop a solid understanding of React 17 fundamentals.</li>
          <li>
            Learn state management with Redux and connect it to React
            components.
          </li>
          <li>
            Understand asynchronous operations in Redux for real-world
            applications.
          </li>
          <li>
            Implement best practices for a scalable and maintainable app
            structure.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutPage;
