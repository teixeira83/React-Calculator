import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

import reactlogo from './imgs/logo.svg'

ReactDOM.render(

<div>
<img src={reactlogo} alt="logo" className="react-logo"/>
<h1>Calculadora</h1>
<Calculator />
</div>

, document.getElementById('root'));
serviceWorker.unregister();

