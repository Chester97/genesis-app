import React, { useState } from 'react';
import * as S from './styles';
import { FORM_INITAL_STATE, FORM_CONFIG, createFormItem } from './utils';
import { registerService } from '../../services/RegisterService';


const Register = () => {
  const [errors, setErrors] = useState("");
  const [user, setUser] = useState(null);
  const [formState, setFormState] = useState(FORM_INITAL_STATE);

  const handleChange = (e) => {
    setErrors("");
    setUser("");
    const value = e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
  }

  const handleSend = async (e) => {
    e.preventDefault();
    const userData = await registerService.registerUser(formState);
    
    if (userData && userData.message) {
      setErrors(userData.message);
      return;
    }

    setUser(userData);
    setFormState(FORM_INITAL_STATE);

  }

  const formItems = FORM_CONFIG
    .map(element => createFormItem(...element))
    .map(x => ({  ...x, value: formState[x.name], onChange: handleChange }));

  return (
    <S.RegisterWrapper>
      <S.RegisterMainText>Register Form</S.RegisterMainText>
      <S.RegisterForm onSubmit={handleSend}>
        { formItems.map(x => <S.FormItem key={x.name} {...x}/>) }
        <S.FormButton type="submit">Send</S.FormButton>
      </S.RegisterForm>
      { errors && <S.ErrorMessage>{errors}</S.ErrorMessage> }
      { user && <p>User {user.name} has been registered.</p> }
    </S.RegisterWrapper>
  );
}

export default Register;


// https://www.youtube.com/watch?v=o-nCM1857AQ&t=1122s
// https://www.youtube.com/watch?v=sjyJBL5fkp8
// https://www.youtube.com/watch?v=8yo44xN7-nQ

// https://reacttraining.com/react-router/web/example/auth-workflow