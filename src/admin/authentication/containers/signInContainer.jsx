import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import SignInPage from '../components/signInPage';

export default function SignInContainer(props) {
  // const { auth } = useSelector(state => ({
  //   auth: state.auth,
  // }));

  // const dispatch = useDispatch();

  const renderSignInPage = props => {
    return <SignInPage title={props.title} />;
  };

  return <>{renderSignInPage(props)}</>;
}
