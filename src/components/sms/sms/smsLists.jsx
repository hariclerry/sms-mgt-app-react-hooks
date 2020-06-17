import React, {Fragment, useState} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Button from 'components/common/button/button';
import { API } from 'httpServices/authService';
import './smsList.css';

const SmsBoard = (props) => {
    const { data } = props.location.state;
    const initialFormState = {
        content: '',
        formErrors: {
          contentError: '',
        }
      };

      const [sms, setSms] = useState(initialFormState);
    //   const []
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        let formErrors = sms.formErrors;
    
        switch (name) {
          case 'content':
            formErrors.contentError =
              value.length < 5 ? 'Message must be 5 characters long!' : '';
            break;
          default:
            break;
        }
        setSms({ ...sms, formErrors, [name]: value });
      };
    
      const handleSubmit = async event => {
        event.preventDefault();
        const id = data._id
        const { content } = sms;
        // try {
        //   await API.post(`/contacts/${id}/sms`, { content });
        //   props.history.push('/dashboard');
        //   NotificationManager.success('Sms sent successfully');
        // } catch (error) {
        //   // Fix the error response @harriet
        //   NotificationManager.error(`Error: ${error}`);
        // }
      };

      const handleDelete = async (smsId) => {
        const contactId = data._id
        // await API.delete(`/contacts/${contactId}/sms/${smsId}`)
        // setRequestData(new Date())
      }
    
      const disableSubmitButton =
        sms.content === '';
    return (
        <Fragment>
            <div className="sms-main">
            <span style={{ paddingBottom: '20px' }}>Please Enter Message....</span>
            <div className="sms-container">

            <div className="flex-item item-display">
            <p className="message3">Messages between you and {data.contactName}</p>
                      { data.sms && data.sms.map(message => { 
                          return(
                            <div className="content">
                                <p className="message1">{message.content}</p>
                                <Button
                     onClick = {() => handleDelete(message._id)}
                      text="Delete"
                      type="submit"
                      value="Submit"
                      className="delete-btn"
                    />
                                 </div>
                          )
                         
                       })}   
            </div>

                 <form onSubmit={handleSubmit} id="smsform" className="flex-item flex-form">
                 <span className="">
                       <Button
                         text="Send"
                         type="submit"
                         value="Submit"
                         className="general-btn"
                         disabled={disableSubmitButton}
                       />
                   </span>
               </form>
               {sms.formErrors.contentError.length > 0 && (
                     <div
                       style={{
                         color: 'red',
                         fontSize: '12px'
                       }}>{`* ${sms.formErrors.contentError}`}</div>
                   )}
               <textarea className="flex-item flex-text" form="smsform" name="content" value={sms.content}
                     onChange={handleInputChange} cols="35" wrap="soft"></textarea>
              
        </div>
      </div>
        </Fragment>

    )
}

export default SmsBoard;