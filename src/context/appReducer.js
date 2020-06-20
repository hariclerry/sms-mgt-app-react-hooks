
export default (state, action) => {
    switch (action.type) {
      case "REGISTER_USER":
        return {};
      case "LOGIN_USER":
        return {
          loggedIn: true,
          token: action.token
        }
      case "FETCH_CONTACTS":
          return {
            ...state,
            contacts: action.contacts
          };
      case "ADD_CONTACTS":
            return {
              ...state,
              contacts: [...state.contacts, action.contact]
            };
      case "EDIT_CONTACTS":
        const updatedContact = action.contact;
  
        const updatedContacts = state.contacts.map(contact => {
          if (contact._id === updatedContact._id) {
            return updatedContacts;
          }
          return contact;
        });
  
        return {
          ...state,
          contacts: updatedContacts
        };
        case "DELETE_CONTACT":
          return {
            ...state,
            contacts: state.contacts.filter(
              contact => contact._id !== action.contact._id
            )
          };
        case "FETCH_SMS":
          return {
            ...state,
            sms: action.sms
          };
        case "ADD_SMS":
            return {

              sms:action.sms
            };
        case "DELETE_SMS":
              return {
                ...state.sms,
                sms: state.sms.filter(
                  smsData => smsData._id !== action.sms._id
                )
              };
      default:
        return state;
    }
  };