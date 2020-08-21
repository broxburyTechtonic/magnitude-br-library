import React from 'react';
import { render } from 'react-dom';
import './assets/index.scss';
import { App } from './components/App/App';

// eslint-disable-next-line @typescript-eslint/ban-types
const Application: React.FC<{}> = () => (
  <App />
);

render(<Application />, document.getElementById('root'));
