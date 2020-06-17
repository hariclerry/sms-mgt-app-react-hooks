import React, {Fragment, useState} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import InputField from 'components/common/inputField/input';
import Button from 'components/common/button/button';
import { API } from 'httpServices/authService';

const ContactForm = (props) => {
    const initialFormState = {
        contactName: '',
        contactNumber: '',
        formErrors: {
          contactNameError: '',
          contactNumberError: '',
        }
      };

      const [contact, setContact] = useState(initialFormState);
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        let formErrors = contact.formErrors;
    
        switch (name) {
          case 'contactName':
            formErrors.contactNameError =
              value.length < 5 ? 'Name must be 5 characters long!' : '';
            break;
          case 'contactNumber':
            formErrors.contactNumberError =
              value.length < 5 ? 'Phone number must be 5 characters long!' : '';
            break;
          default:
            break;
        }
        setContact({ ...contact, formErrors, [name]: value });
      };
    
      const handleSubmit = async event => {
        event.preventDefault();
        const { contactName, contactNumber } = contact;
        // try {
        //   await API.post(`/contacts`, { contactName, contactNumber });
        //   props.history.push('/dashboard');
        //   NotificationManager.success('Contact created successfully');
        // } catch (error) {
        //   // Fix the error response @harriet
        //   NotificationManager.error(`Error: ${error}`);
        // }
      };

      const disableSubmitButton =
        contact.contactName === '' || contact.contactNumber === '';
    return (
        <Fragment>
            <div className="home-main1">
            <div className="home-button">
              <span style={{ paddingBottom: '20px' }}>Please create contact below</span>
                 <form onSubmit={handleSubmit}>
                 <div className="input-container">
                   <InputField
                     name="contactName"
                     label="Name"
                     type="text"
                     value={contact.contactName}
                     onChange={handleInputChange}
                   />
                   {contact.formErrors.contactNameError.length > 0 && (
                     <div
                       style={{
                         color: 'red',
                         fontSize: '12px'
                       }}>{`* ${contact.formErrors.contactNameError}`}</div>
                   )}
                   <InputField
                     name="contactNumber"
                     label="Phone Number"
                     type="number"
                     value={contact.contactNumber}
                     onChange={handleInputChange}
                   />
                   {contact.formErrors.contactNumberError.length > 0 && (
                     <div
                       style={{
                         color: 'red',
                         fontSize: '12px'
                       }}>{`* ${contact.formErrors.contactNumberError }`}</div>
                   )}
                  <span className="">
                       <Button
                         text="Create"
                         type="submit"
                         value="Submit"
                         className="general-btn"
                         disabled={disableSubmitButton}
                       />
                   </span>
                 </div>
               </form>
        </div>
      </div>
        </Fragment>

    )
}

export default ContactForm;