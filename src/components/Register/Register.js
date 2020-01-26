import React, { useState, useReducer } from 'react';
import * as S from './styles';
import { FORM_INITAL_STATE, FORM_CONFIG, createFormItem } from './utils';
import { registerService } from '../../services/RegisterService';

const initialFormFields = { name:"",surname:"",login:"",password:"", email:"", isRegistered: false, error: "", userData: null };

function registerReducer(state, action) {
  switch(action.type){
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload,
      }
    }
    case 'register': {
      return {
        ...state,
        isRegistered: true,
        error: "",
      }
    }
    case 'success': {
      return {
        ...initialFormFields,
        isRegistered: false,
        userData: action.payload
      }
    }
    case 'error': {
      return {
        ...state,
        error: action.payload,
        isRegistered: false,
        name: "",
        surname: "",
        login: "",
        password: "",
        email: "",
      }
    }
    case 'cleanAlerts': {
      return {
        ...state,
        error: "",
        userData: null
      }
    }
    default: return state;
  }

  return state;
}


const Register = () => {
  const [state, dispatch] = useReducer(registerReducer, initialFormFields);
  const { name, surname, login, password, email, isRegistered, error, userData } = state;

  const handleChange = (e) => {
    dispatch({ type: "cleanAlerts" });
    const value = e.target.value;
    dispatch({type: "field", fieldName: [e.target.name], payload: value});
  }

  const handleSend = async (e) => {
    e.preventDefault();
    dispatch({type: 'register'});
    const userData = await registerService.registerUser({ name, surname, login, password, email });
    
    if (userData && userData.message) {
      dispatch({type:"error", payload: userData.message});
      return;
    }

    dispatch({ type: 'success', payload: userData });
  }

  return (
    <S.RegisterWrapper>
      <S.RegisterMainText>Register Form</S.RegisterMainText>
      <S.RegisterForm onSubmit={handleSend}>
        <S.FormItem type="text" name="name" value={name} onChange={handleChange} placeholder="Your Name..."/>
        <S.FormItem type="text" name="surname" value={surname} onChange={handleChange} placeholder="Your Surname..."/>
        <S.FormItem type="text" name="login" value={login} onChange={handleChange} placeholder="Your Login..."/>
        <S.FormItem type="text" name="password" value={password} onChange={handleChange} placeholder="Your Password..."/>
        <S.FormItem type="text" name="email" value={email} onChange={handleChange} placeholder="Your Email..."/>
        <S.FormButton type="submit" disabled={isRegistered}>
          {isRegistered ? "Registering..." : "Register"}
        </S.FormButton>
      </S.RegisterForm>
      { error && <S.ErrorMessage>{error}</S.ErrorMessage> }
      { userData && <p>User {userData.name} has been registered.</p> }
    </S.RegisterWrapper>
  );
}

export default Register;


// https://www.youtube.com/watch?v=o-nCM1857AQ&t=1122s
// https://www.youtube.com/watch?v=sjyJBL5fkp8
// https://www.youtube.com/watch?v=8yo44xN7-nQ

// https://reacttraining.com/react-router/web/example/auth-workflow1