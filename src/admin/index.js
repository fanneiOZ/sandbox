import React from 'react';
import ReactDOM from 'react-dom';
import { SignInContainer } from './authentication';

const signInPage = SignInContainer({ title: 'Sandbox Experiment' });
ReactDOM.render([signInPage], document.getElementById('root'));
