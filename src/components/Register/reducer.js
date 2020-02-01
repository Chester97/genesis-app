export const initialFormFields = {
  name: '',
  surname: '',
  login: '',
  password: '',
  email: '',
  isRegistered: false,
  error: '',
  userData: null,
};

export function registerReducer(state = initialFormFields, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case 'register': {
      return {
        ...state,
        isRegistered: true,
        error: '',
      };
    }
    case 'success': {
      return {
        ...initialFormFields,
        isRegistered: false,
        userData: action.payload,
      };
    }
    case 'error': {
      return {
        ...state,
        error: action.payload,
        isRegistered: false,
        name: '',
        surname: '',
        login: '',
        password: '',
        email: '',
      };
    }
    case 'cleanAlerts': {
      return {
        ...state,
        error: '',
        userData: null,
      };
    }
    default: return state;
  }
}
