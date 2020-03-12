import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginService } from '../../services/userService';
import * as S from './styles';

const Register = () => {
  const [userRegistered, setUserRegistered] = useState(null);
  const [userErrors, setUserErrors] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const user = await loginService.registerUser({ ...data });
    if (user && user.message) {
      setUserErrors(user.message);
    }
    return setUserRegistered(user);
  };

  return (
    <S.RegisterWrapper>
      <S.RegisterMainText>Register Form</S.RegisterMainText>
      <S.RegisterForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <S.InputWrapper>
          { errors.name && <S.ErrorMessage>Name is required!</S.ErrorMessage> }
          <S.FormItem type="text" name="name" ref={register({ required: true, minLength: 2, maxLength: 30 })} placeholder="Your Name..." />
        </S.InputWrapper>
        <S.InputWrapper>
          { errors.surname && <S.ErrorMessage>Surname is required!</S.ErrorMessage> }
          <S.FormItem type="text" name="surname" ref={register({ required: true, minLength: 2, maxLength: 50 })} placeholder="Your Surname..." />
        </S.InputWrapper>
        <S.InputWrapper>
          { errors.login && <S.ErrorMessage>Login is required!</S.ErrorMessage> }
          <S.FormItem type="text" name="login" ref={register({ required: true, minLength: 3, maxLength: 40 })} placeholder="Your Login..." />
        </S.InputWrapper>
        <S.InputWrapper>
          { errors.password && <S.ErrorMessage>Password is required!</S.ErrorMessage> }
          <S.FormItem type="password" name="password" ref={register({ required: true, minLength: 3, maxLength: 100 })} placeholder="Your Password..." />
        </S.InputWrapper>
        <S.InputWrapper>
          { errors.email && <S.ErrorMessage>Email is required!</S.ErrorMessage> }
          <S.FormItem type="text" name="email" ref={register({ required: true, minLength: 7, maxLength: 50 })} placeholder="Your Email..." />
        </S.InputWrapper>
        <S.FormButton type="submit">
          Register
        </S.FormButton>
      </S.RegisterForm>
      {
        userRegistered
        && (
          <S.RegisterForm>
            <S.SuccessMessage>User has been registered.</S.SuccessMessage>
            <S.RegirectLink to="/">Home</S.RegirectLink>
          </S.RegisterForm>
        )
      }
      {
        userErrors && <S.ErrorMessage>{userErrors}</S.ErrorMessage>
      }
    </S.RegisterWrapper>
  );
};

export default Register;
