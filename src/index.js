import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import MainRouter from './components/MainRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainRouter />, document.getElementById('root'));
registerServiceWorker();
