import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Headerr from './Headerr';
import Navigation from './Navigation';
import MainPart from './MainPart';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';


const variable = <div>
    <Headerr />
    <Navigation />
    <MainPart />
</div>

ReactDOM.render(variable , document.getElementById("root3"));


serviceWorker.unregister();
