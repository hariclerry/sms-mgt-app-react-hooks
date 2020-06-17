import React, {Fragment, useState} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import InputField from 'components/common/inputField/input';
import Button from 'components/common/button/button';
import { API } from 'httpServices/authService';

const EditForm = (props) => {
    const { data } = props.location.state;
    const initialFormState = {
        contactName: data.contactName,
        formErrors: {
          contactNameError: '',
        }
      };
      const [editContact, setEditContact] = useState(initialFormState);
    
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        let formErrors = editContact.formErrors;
    
        switch (name) {
          case 'contactName':
            formErrors.contactNameError =
              value.length < 5 ? 'Name must be 5 characters long!' : '';
            break;
          default:
            break;
        }
        setEditContact({ ...editContact, formErrors, [name]: value });
      };
    
      const handleSubmit = async event => {
        event.preventDefault();
        const id = data._id
        const { contactName } = editContact;
        // try {
        //   await API.patch(`/contacts/`+ id, { contactName });
        //   props.history.push('/dashboard');
        //   NotificationManager.success('Contact edited successfully');
        // } catch (error) {
        //   // Fix the error response @harriet
        //   NotificationManager.error(`Error: ${error}`);
        // }
      };

      const disableSubmitButton =
        editContact.contactName === '';
    return (
        <Fragment>
            <div className="home-main">
            <div className="home-button">
              <span style={{ paddingBottom: '20px' }}>Please create contact below</span>
                 <form onSubmit={handleSubmit}>
                 <div className="input-container">
                   <InputField
                     name="contactName"
                     label="Name"
                     type="text"
                     value={editContact.contactName}
                     onChange={handleInputChange}
                   />
                   {editContact.formErrors.contactNameError.length > 0 && (
                     <div
                       style={{
                         color: 'red',
                         fontSize: '12px'
                       }}>{`* ${editContact.formErrors.contactNameError}`}</div>
                   )}
                  <span className="">
                       <Button
                         text="Edit"
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

export default EditForm;