import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import Form from './components/Form';
import Fir from './components/Fir';
import Menu from './components/Menu';
import {Route,Link, BrowserRouter as Router}from '../node_modules/react-router-dom'
import * as serviceWorker from './serviceWorker';



const myrouter=(

<Router>

    <Menu/>

    <div>
     
        
        <Route exact path="/" component={App}/>
        <Route exact path="/form" component={Form}/>
        

    </div>

</Router>

)


ReactDOM.render(myrouter, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
