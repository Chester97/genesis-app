import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '../../utils/loginAuth/loginAuth';
import * as S from './styles';

const Login = () => {
  const userState = useSelector((state) => state.user);
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState(null);
  const userGlobalState = useDispatch();
  const history = useHistory();

  const onSubmit = async (data) => {
    userGlobalState({ type: 'USER_LOGIN_REQUEST', payload: { ...data } });
  };

  useEffect(() => {
    if (userState.error) {
      setError(userState.error.message);
    } else if (userState.userData) {
      setError(null);
      userGlobalState({ type: 'POSTS_REQUEST' });
      userGlobalState({ type: 'COMMENTS_REQUEST' });
      authUser.authenticate(() => history.push('/main'));
    }
  }, [userState]);

  return (
    <S.LoginWrapper>
      <S.LoginMainText>Login Form</S.LoginMainText>
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          { errors.login && <S.ErrorMessage>Login is required!</S.ErrorMessage> }
          <S.FormItem type="text" name="login" placeholder="Your Login" ref={register({ required: true, minLength: 3, maxLength: 40 })} />
        </S.InputWrapper>
        <S.InputWrapper>
          {errors.password && <S.ErrorMessage>Password is required!</S.ErrorMessage>}
          <S.FormItem type="password" name="password" placeholder="Your password" ref={register({ required: true, minLength: 4, maxLength: 100 })} />
        </S.InputWrapper>
        <S.FormButton type="submit">Send</S.FormButton>
      </S.LoginForm>
      { error && <S.ErrorMessage>{error}</S.ErrorMessage> }
    </S.LoginWrapper>
  );
};

export default Login;
