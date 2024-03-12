import React from 'react';

const HomePage = () => {
  return (
    <div className="text-light container">
      <div className="row">
        <div className="col-md-8">
          <h2 className="my-5">Welcome to the Homepage!</h2>

          <ul>
            <li>
              Developed as part of a React 17 and Redux course, demonstrating
              dynamic web application development.
            </li>
            <li className="my-3">
              Features an "Articles" section with:
              <ul className="my-3">
                <li>
                  A spinner to simulate loading time, showcasing UI
                  responsiveness to asynchronous operations.
                </li>
                <li>
                  Articles fetched through Redux actions from a database,
                  highlighting state management and data retrieval.
                </li>
                <li>
                  Options to edit or delete each article, providing a practical
                  example of data manipulation.
                </li>
                <li>
                  A form to add new articles with validation to ensure all
                  fields are filled, demonstrating form handling and error
                  checking.
                </li>
                <li>
                  A simulated delay on save to mimic database updates,
                  emphasizing asynchronous operation integration.
                </li>
              </ul>
            </li>
            <li className="my-3">
              Incorporates modern technologies and practices such as
              asynchronous JavaScript, state management patterns, and user
              interaction design.
            </li>
            <li>
              Built on the foundation of React 17 and Redux, illustrating
              advanced web development skills.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
