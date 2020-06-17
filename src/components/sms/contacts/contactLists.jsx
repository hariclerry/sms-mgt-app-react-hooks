import React, {Fragment} from 'react';
import { Link } from "react-router-dom"

import Table from 'components/common/table/table'

const ContactLists = ({contacts, handleDelete, setRequestData}) => {
  const columns = [
    { key: 'name', label: 'Name', content: contact => {
      console.log('herereeee', contact)
        return (
        contact.contactName
      ) }},
    { key: 'phoneNumber', label: 'Phone Number', content: <h4> Phone Number </h4>  },
   
  ];
  return ( 
    <Fragment>
    <h1>Contact Lists </h1>
    <Table columnHeader={columns} contacts={contacts}
    onDelete={handleDelete} 
    setRequestData={setRequestData}/>
    </Fragment>

   );
}
 
export default ContactLists;