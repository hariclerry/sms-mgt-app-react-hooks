import React from 'react';

const Button = ({text, }) => {
  return ( 
    <button type="button" style={{ backgroundColor: '#007bff', width: '100px', height: '35px', margin: '10px', color: '#fff', fontSize: '15px', borderColor: '#007bff', borderRadius: '3px'}}> {text} </button>
   );
}
 
export default Button;