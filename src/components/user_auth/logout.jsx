import React, { useEffect } from 'react';

const Logout = (props) => {
  useEffect(() => {
    localStorage.removeItem("token");
    props.history.push('/');
  }, []); 
  return null;
}
 
export default Logout;