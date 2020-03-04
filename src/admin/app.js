import React from 'react';
import PropTypes from 'prop-types';

export default function App(props) {
  const defaultKey = props.key ?? 0;
  return (
    <div key={defaultKey} className={props.className}>
      {props.nestText}
    </div>
  );
}

App.propTypes = {
  nestTest: PropTypes.string.isRequired,
};
