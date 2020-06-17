import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

// import {useAuth} from 'context/context'
import ContactLists from 'components/sms/contacts/contactLists'
import NavigationBar from 'components/common/navBar/navigationBar';
import {API} from 'httpServices/authService'
import Button from 'components/common/button/button';

import './sms.scss';

const Dashboard = (props) => {
  const [contacts, setContacts] = useState([]);
  const [requestData, setRequestData] = useState(new Date());

  let authTokens;
    
  useEffect (() => {
    fetchContacts();
  }, [requestData])

  const fetchContacts = async () => {
    // try {
    //   const { data } = await API.get('/contacts');
    //   setContacts(data)
    // } catch (error) {
    //   return null;
    // }
  }

  return (
    <Fragment>
       <NavigationBar />
      <div className="home-main1">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
          <div style={{display: "inline-flex"}}>
            <div>
      <h2> Welcome {authTokens.user.phoneNumber} to your Dashboard </h2>
      </div>
      <div>
      <Link to="/form">
        <Button className="general-btn" text="Contact"/> 
      </Link>
      </div>
      </div>
          <ContactLists contacts={contacts} setRequestData={setRequestData}/>
          </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
