import React, {Fragment, useState,useContext,useEffect} from 'react';
import { useHistory,Link } from "react-router-dom";

import Button from 'components/common/button/button';
import  {GlobalContext}  from 'context/globalState';
import './smsList.css';

const SmsBoard = (props) => {
    const { data } = props.location.state;
    const initialFormState = {
        content: '',
        formErrors: {
          contentError: '',
        }
      };

      const [smsData, setSms] = useState(initialFormState);
      const [requestData, setRequestData] = useState(new Date());
      const { addSms,sms,fetchSms,deleteSms} = useContext(GlobalContext);
      let history = useHistory();
      
      useEffect (() => {
        const id = data._id
        fetchSms(id);
      }, [requestData])
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        let formErrors = smsData.formErrors;
    
        switch (name) {
          case 'content':
            formErrors.contentError =
              value.length < 5 ? 'Message must be 5 characters long!' : '';
            break;
          default:
            break;
        }
        setSms({ ...smsData, formErrors, [name]: value });
      };
    
      const handleSubmit = async event => {
        event.preventDefault();
        const id = data._id
        const { content } = smsData;
        addSms(content, id, history)
        setSms( {
          content: '',
          formErrors: {
            contentError: '',
          }
        })
      };

      const handleDelete = async (smsId) => {
        const contactId = data._id
        deleteSms(contactId, smsId)
      }
      const disableSubmitButton =
      smsData.content === '';
    return (
        <Fragment>
            <div className="sms-main">
            <span style={{ padding: '20px' }}>Type Message</span>

               <textarea className="flex-item flex-text" form="smsform" name="content" value={smsData.content}
                     onChange={handleInputChange} cols="35" wrap="soft"></textarea>
                    {smsData.formErrors.contentError.length > 0 && (
                     <div className="form-error">{`* ${smsData.formErrors.contentError}`}</div>
                   )}

                 <form onSubmit={handleSubmit} id="smsform" >
                   <div className="sms-span">
                 <span className="span-btn1">
                       <Button
                         text="Submit"
                         type="submit"
                         value="Submit"
                         className="general-btn"
                         disabled={disableSubmitButton}
                       />
                   </span>

                      <Link to="/dashboard">
                       <Button
                         text="Cancel"
                         type="submit"
                         value="Submit"
                         className="general-btn3"
                       />
                       </Link>
                   </div>
               </form>

               <div className="item-display">
                 {sms && sms.length <= 0 ?
            <p className="message-title">No Messages </p> :
            
                      sms && sms.map(message => { 
                          return(
                            <div className="content">
                                <p className="message1">{message.content}</p>
                                <Button
                     onClick = {() => handleDelete(message._id)}
                      text="Delete"
                      type="Submit"
                      value="Submit"
                      className="delete-btn2"
                    />
                                 </div>
                          )
                         
                       })}

            </div>
      </div>
        </Fragment>

    )
}

export default SmsBoard;