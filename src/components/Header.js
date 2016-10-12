import React from 'react';

const Header = ({ message }) => {
  return (
    <h2 className="Header text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: React.PropTypes.string
};

export default Header;
