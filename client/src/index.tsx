import React from 'react';
import { render } from 'react-dom';
import './assets/index.scss';
import { App } from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-types
const Application: React.FC<{}> = () => (
  <BrowserRouter> 
    <App />
  </BrowserRouter>
);

render(
    <Application />, document.getElementById('root'));
