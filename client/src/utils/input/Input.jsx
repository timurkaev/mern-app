import React from 'react';
import './input.less'

function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.setValue(event.target.value)}/>
  );
}

export default Input;