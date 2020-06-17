import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

import Button from 'components/common/button/button';
import {API} from 'httpServices/authService'
import './table.css';

const Table = ({ title, columnHeader, contacts, setRequestData }) => {

  const handleDelete = async (id) => {
    // await API.delete('/contacts/' + id)
    setRequestData(new Date())
  }

  return (
    <Fragment>
      <h2>{title}</h2>

      <div className="table-main">
        <table>
          <tr>
            {columnHeader.map(header => (
              <th>{header.label}</th>
            ))}
          </tr>
            {contacts && contacts.map(data => {
              return (
              <tr>
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
            })}{' '}
        </table>
      </div>
    </Fragment>
  );
};

export default Table;
