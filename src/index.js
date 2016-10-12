import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return (
    <h2 className="text-center">
      {props.headerMessage}
    </h2>
  );
};

App.propTypes = {
  headerMessage: React.PropTypes.string
};

App.defaultProps = {
  headerMessage: 'Hello!!'
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
