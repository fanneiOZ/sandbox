import React from 'react';
import ReactDOM from 'react-dom';
import { renderSignInPage } from './containers/signInContainer';

const signInPage = renderSignInPage({ defaultText: 'test'});
ReactDOM.render([signInPage], document.getElementById('root'));
