import React, { Fragment,useContext } from 'react';
import { Link } from 'react-router-dom'
import  {GlobalContext}  from 'context/globalState';

import Button from 'components/common/button/button';
import './table.css';

const Table = ({ setRequestData }) => {
  const { deleteContacts, contacts} = useContext(GlobalContext);

  const handleDelete = async (id) => {
    deleteContacts(id)
    setRequestData(new Date())
  }
  return (
    <Fragment>
      { contacts && contacts.length <= 0  ? <p className="message-title"> No Contacts </p> :
      <div>
      <h3 className="table-text">Lists of Contacts</h3>
      <div className="contact-table">
        <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>phoneNumber</th>
          <th></th>
          <th></th>
          <th></th>
          </tr>
          </thead>
          <tbody>
            {contacts && contacts.map(data => {
              return (
              <tr key={data._id}>
              <td>{data.contactName}</td>
              <td>{data.contactNumber}</td>
              <td> 
              <Link to={{pathname: `/sms/${data._id}`, state :{ data} }} > 
                <Button
                      text="Sms"
                      type="submit"
                      value="Submit"
                      className="sms-btn"
                    />
                    </Link>
                </td>
                <td>
                <Link to={{pathname: `/editForm/${data._id}`, state :{ data} }} > 
                 <Button
                      text="Edit"
                      type="submit"
                      value="Submit"
                      className="sms-btn"
                    />
                    </Link>
                </td> 
                <td>
                <Button
                     onClick = {() => handleDelete(data._id)}
                      text="Delete"
                      type="submit"
                      value="Submit"
                      className="delete-btn"
                    />
                </td>
              </tr>
              )
            })}
            </tbody>
        </table>
        </div>
        </div>
        
}
    </Fragment>
  );
};

export default Table;
