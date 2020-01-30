import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import * as S from './styles';
import { loginService } from '../../services/LoginService';

const Login = () => {
  const formInitialState = { login: '', password: '' };
  const [formState, setFormState] = useState(formInitialState);
  const [errors, setErrors] = useState('');
  const [userContext,setUserContext] = useContext(UserContext);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userContext);
    // const user = await loginService.loginUser(formState);
    // if (user && user.message) {
    //   setErrors(user.message);
    // }
  };

  return (
    <S.LoginWrapper>
      <S.LoginMainText>Login Form</S.LoginMainText>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.FormItem type="text" name="login" placeholder="Your Login" onChange={handleChange} />
        <S.FormItem type="text" name="password" placeholder="Your password" onChange={handleChange} />
        <S.FormButton type="submit">Send</S.FormButton>
      </S.LoginForm>
      {
        errors ? <S.ErrorMessage>{errors}</S.ErrorMessage> : null
      }
    </S.LoginWrapper>
  );
};

export default Login;
