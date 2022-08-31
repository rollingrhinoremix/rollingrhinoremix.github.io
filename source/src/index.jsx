/* @refresh reload */
import { Router } from 'solid-app-router';
import { render } from 'solid-js/web';

// css
import "./css/index.css"

import App from './App';

// wrap the app in the router
render(() => <Router><App/></Router>, document.getElementById('root'));
