import React from 'react';
import './button.scss'

const Button = ({text, type, value, disabled, className, onClick }) => {
  return ( 
    <button type={type} value={value} disabled={disabled} className={className} onClick={onClick}> {text} </button>
   );
}
 
export default Button;