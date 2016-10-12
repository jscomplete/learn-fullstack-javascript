import React from 'react';
import ReactDOM from 'react-dom';

import data from './testData';
console.log(data);

import App from './components/App';

ReactDOM.render(
  <App contests={data.contests} />,
  document.getElementById('root')
);
