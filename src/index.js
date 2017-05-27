import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(<App />, document.getElementById('root'));
registerServiceWorker();
