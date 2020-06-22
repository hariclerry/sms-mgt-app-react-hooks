import React, { Fragment } from 'react';
import './input.scss';

const InputField = ({ name, label, type, value, onChange }) => {
  return ( 
    <Fragment>
      <label htmlFor={name}><b>{label}</b></label>
      <input type={type} name={name} id={name} value={value} onChange={onChange} className="form-control" required/>
    </Fragment>
   );
}
 
export default InputField;