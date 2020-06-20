import React, { Fragment, useState, useEffect,useContext } from 'react';
import { Link } from 'react-router-dom'

import  {GlobalContext}  from 'context/globalState';
import NavigationBar from 'components/common/navBar/navigationBar';
import Button from 'components/common/button/button';
import Table from 'components/sms/contacts/table'

import './sms.scss';

const Dashboard = (props) => {
  const [requestData, setRequestData] = useState(new Date());
  const { fetchContacts} = useContext(GlobalContext);

    
  useEffect (() => {
    fetchContacts();
  }, [requestData])

  return (
    <Fragment>
       <NavigationBar />
      <div className="main-dashboard">
      <div className="header-bar">
      <h2> Welcome to your Dashboard </h2>
      <Link to="/form">
        <Button className="general-btn-add" text="Add contact"/> 
      </Link>
      </div>
          <Table setRequestData={setRequestData}/>
      </div>
    </Fragment>
  );
};

export default Dashboard;
