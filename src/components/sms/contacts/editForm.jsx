import React, {Fragment, useState,useContext} from 'react';
import  {GlobalContext}  from 'context/globalState';
import { useHistory } from "react-router-dom";

import InputField from 'components/common/inputField/input';
import Button from 'components/common/button/button';

const EditForm = (props) => {
    const { data } = props.location.state;
    const initialFormState = {
        contactName: data.contactName,
        formErrors: {
          contactNameError: '',
        }
      };
      const [editContact, setEditContact] = useState(initialFormState);
      const { editContacts } = useContext(GlobalContext);
      let history = useHistory();
    
    
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
        editContacts(contactName,id,history)
      };

      const disableSubmitButton =
        editContact.contactName === '';
    return (
        <Fragment>
            <div className="home-button">
              <h2 style={{ padding: '20px' }}>Edit contact</h2>
                 <form onSubmit={handleSubmit}>
                 <div className="input-container">
                   <InputField
                     name="contactName"
                     label="Contact Name"
                     type="text"
                     value={editContact.contactName}
                     onChange={handleInputChange}
                   />
                   {editContact.formErrors.contactNameError.length > 0 && (
                     <div className="form-error">{`* ${editContact.formErrors.contactNameError}`}</div>
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

export default EditForm;