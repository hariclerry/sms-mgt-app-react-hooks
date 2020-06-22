import React, {Fragment, useState,useContext} from 'react';
import  {GlobalContext}  from 'context/globalState';
import { useHistory } from "react-router-dom";

import InputField from 'components/common/inputField/input';
import Button from 'components/common/button/button';

const ContactForm = () => {
    const initialFormState = {
        contactName: '',
        contactNumber: '',
        formErrors: {
          contactNameError: '',
          contactNumberError: '',
        }
      };

      const [contact, setContact] = useState(initialFormState);
      const { addContacts } = useContext(GlobalContext);
      let history = useHistory();
  
    
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
        addContacts(contactName,contactNumber,history)
      };

      const disableSubmitButton =
        contact.contactName === '' || contact.contactNumber === '';
    return (
        <Fragment>
            <div className="home-button">
              <h2 style={{ padding: '20px' }}>Add contact</h2>
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
                     <div className="form-error">{`* ${contact.formErrors.contactNameError}`}</div>
                   )}
                   <InputField
                     name="contactNumber"
                     label="Phone Number"
                     type="number"
                     value={contact.contactNumber}
                     onChange={handleInputChange}
                   />
                   {contact.formErrors.contactNumberError.length > 0 && (
                     <div className="form-error">{`* ${contact.formErrors.contactNumberError }`}</div>
                   )}
                  <span className="">
                       <Button
                         text="Submit"
                         type="submit"
                         value="Submit"
                         className="general-btn2"
                         disabled={disableSubmitButton}
                       />
                   </span>
                 </div>
               </form>
        </div>
        </Fragment>

    )
}

export default ContactForm;