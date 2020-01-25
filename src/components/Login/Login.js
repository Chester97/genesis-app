import React, { useState } from 'react';
import * as S from './styles';
import { loginService } from '../../services/LoginService';

const Login = () => {
    const formInitialState = { login: "", password: "" };
    const [formState, setFormState] = useState(formInitialState);
    const [errors, setErrors] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let userData = await loginService.loginUser(formState);
        if(userData && userData.message) {
            setErrors(userData.message); 
            return;
        }
        console.log(userData);
        return;
    }

    return (
        <S.LoginWrapper>
            <S.LoginMainText>Login Form</S.LoginMainText>
                <S.LoginForm onSubmit={handleSubmit}>
                    <S.FormItem type="text" name="login" placeholder="Your Login" onChange={handleChange}/>
                    <S.FormItem type="text" name="password" placeholder="Your password" onChange={handleChange}/>
                    <S.FormButton type="submit">Send</S.FormButton>
                </S.LoginForm>
                {
                    errors ? <S.ErrorMessage>{errors}</S.ErrorMessage> : null
                }
        </S.LoginWrapper>
    )
}

export default Login;