import React from 'react';
import ReactDOM from 'react-dom';
import { SignInContainer } from './authentication';

const signIn = SignInContainer({ title: 'Sandbox Experiment' });
ReactDOM.render([signIn], document.getElementById('root'));
