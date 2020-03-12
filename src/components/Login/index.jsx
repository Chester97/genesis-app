import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '../../utils/loginAuth/loginAuth';
import * as S from './styles';

const Login = () => {
  const userState = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const reduxDispatch = useDispatch();
  const history = useHistory();
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    loginRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Pola nie sa walidowane przed wyslaniem ich do serwera.
    const login = loginRef.current.value;
    const password = passwordRef.current.value;
    reduxDispatch({ type: 'USER_LOGIN_REQUEST', payload: { login, password } });
  };

  useEffect(() => {
    if (userState.error) {
      setError(userState.error.message);
    } else if (userState.userData) {
      setError(null);
      reduxDispatch({ type: 'POSTS_REQUEST' });
      authUser.authenticate(() => history.push('/main'));
    }
  }, [userState]);

  return (
    <S.LoginWrapper>
      <S.LoginMainText>Login Form</S.LoginMainText>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.FormItem type="text" name="login" placeholder="Your Login" ref={loginRef} minLength="3" maxLength="40" />
        <S.FormItem type="text" name="password" placeholder="Your password" ref={passwordRef} minLength="4" maxLength="100" />
        <S.FormButton type="submit">Send</S.FormButton>
      </S.LoginForm>
      { error && <S.ErrorMessage>{error}</S.ErrorMessage> }
    </S.LoginWrapper>
  );
};

export default Login;
