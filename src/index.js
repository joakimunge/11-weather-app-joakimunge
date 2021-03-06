import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './css/weather-icons.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter basename="/11">
			<App />
		</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
