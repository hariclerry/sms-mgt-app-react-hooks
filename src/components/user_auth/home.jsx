import React, { Fragment,useState } from 'react';
import { Link } from 'react-router-dom'

// import NavigationBar from 'components/common/navBar/navigationBar';
import Button from 'components/common/button/button';
import Register from 'components/user_auth/register';
import Login from 'components/user_auth/login';
import smsicon from 'widgets/images/smsicon2.jpeg';
import './home.scss';

const Home = () => {
const [toggleForm, setToggleForm] = useState(false)

const handleToggleForm = () => {
  if (!toggleForm) {
    setToggleForm(true)
  } else {
  setToggleForm(false)
  }
}
  return (
    <Fragment>
        <aside>
        <div className="image">
        <img src={smsicon} alt="sms icon" width="100" />
        <h1>SMS Management App</h1>
        </div>
          
          <div className="home-text">
          <p>Stay connected with family, friends and colleagues with Sms management App.</p>
          <p>Add contacts and send Sms with Sms management App.</p>
          </div>
        <div className="link-button">
        {toggleForm ? (
               <Button onClick={handleToggleForm} className="general-btn2" text="Register" />
        ) :
               <Button onClick={handleToggleForm} className="general-btn2" text="Login"/> 
        }
               </div>
        </aside>
        <div className="main-container">
        <div className="content-main">
        <section className=""> 
        <h1 className="content-text">Welcome to SMS management App</h1>
        {!toggleForm ? (
   <Register/>
        )
        :
        <Login/>
        }
          
          </section>
        </div>
        </div>
        <footer><p>&copy; harriet. All rights reserved</p></footer>
    </Fragment>
  );
}

export default Home;
