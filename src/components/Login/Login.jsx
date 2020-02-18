import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

const Login = () => {
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const reduxDispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    loginRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = loginRef.current.value;
    const password = passwordRef.current.value;
    reduxDispatch({ type: 'USER_LOGIN_REQUEST', payload: { login, password } });
    history.push('/main');
  };

  return (
    <S.LoginWrapper>
      <S.LoginMainText>Login Form</S.LoginMainText>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.FormItem type="text" name="login" placeholder="Your Login" ref={loginRef} />
        <S.FormItem type="text" name="password" placeholder="Your password" ref={passwordRef} />
        <S.FormButton type="submit">Send</S.FormButton>
      </S.LoginForm>
    </S.LoginWrapper>
  );
};

export default Login;
