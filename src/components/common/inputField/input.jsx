import React, { Fragment } from 'react';
import './input.scss';

const InputField = ({ name, label, type }) => {
  return ( 
    <Fragment>
      <label htmlFor={name}><b>{label}</b></label>
      <input type={type} name={name} id={name} className="form-control" />
    </Fragment>
   );
}
 
export default InputField;