import React, { useReducer } from 'react';
import { loginService } from '../../services/login';
import { registerReducer, initialFormFields } from './reducer';
import * as S from './styles';


const Register = () => {
  const [formData, dispatch] = useReducer(registerReducer, initialFormFields);

  const handleChange = (e) => {
    dispatch({ type: 'cleanAlerts' });
    const { value } = e.target;
    dispatch({ type: 'field', fieldName: [e.target.name], payload: value });
  };

  const handleSend = async (e) => {
    const {
      name, surname, login, password, email,
    } = formData;
    e.preventDefault();
    dispatch({ type: 'register' });
    const user = await loginService.registerUser({
      name, surname, login, password, email,
    });
    if (user && user.message) {
      return dispatch(
        { type: 'error', payload: user.message },
      );
    }
    return dispatch({ type: 'success', payload: user });
  };

  const {
    name, surname, login, password, email, isRegistered, error, userData,
  } = formData;

  return (
    <S.RegisterWrapper>
      <S.RegisterMainText>Register Form</S.RegisterMainText>
      <S.RegisterForm onSubmit={handleSend} autoComplete="off">
        <S.FormItem type="text" name="name" value={name} onChange={handleChange} placeholder="Your Name..." minLength="2" maxLength="30" />
        <S.FormItem type="text" name="surname" value={surname} onChange={handleChange} placeholder="Your Surname..." minLength="2" maxLength="50" />
        <S.FormItem type="text" name="login" value={login} onChange={handleChange} placeholder="Your Login..." minLength="3" maxLength="40" />
        <S.FormItem type="password" name="password" value={password} onChange={handleChange} placeholder="Your Password..." minLength="4" maxLength="100" />
        <S.FormItem type="text" name="email" value={email} onChange={handleChange} placeholder="Your Email..." minLength="7" maxLength="50" />
        <S.FormButton type="submit" disabled={isRegistered}>
          {isRegistered ? 'Registering...' : 'Register'}
        </S.FormButton>
      </S.RegisterForm>
      { error && <S.ErrorMessage>{error}</S.ErrorMessage> }
      {
        userData
        && (
          <S.RegisterForm>
            <S.SuccessMessage>User has been registered.</S.SuccessMessage>
            <S.RegirectLink to="/">Home</S.RegirectLink>
          </S.RegisterForm>
        )
      }
    </S.RegisterWrapper>
  );
};

export default Register;
