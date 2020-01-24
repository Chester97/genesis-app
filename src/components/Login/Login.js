import React, { useState } from 'react';
import styled from 'styled-components';
import { loginUser } from '../../services/LoginService';

const LoginWrapper = styled.section`
    height: 100vh;
    background: #1B1B1B;
    color: #F2F3F4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
`;

const LoginMainText = styled.h1`
    text-align: center;
    font-size: 32px;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;
    min-width: 70vw;
`;

const FormItem = styled.input`
    margin: 0 0 30px 0;
    border: none;
    border-bottom: 1px solid white;
    background: none;
    color: #F2F3F4;
    padding: 0 0 5px 5px;
    opacity: .5;

    &:focus {
        opacity: 1;
    }
`;

const FormButton = styled.button`
    background: transparent;
    border: 2px solid #F2F3F4;
    border-radius: 4px;
    color: #F2F3F4;
    opacity: .5;
    padding: 15px 0;

    &:hover,
    &:focus {
        opacity: 1;
    }
`;

const ErrorMessage = styled.h1`
    color: #FFD2D2;
    text-transform: uppercase;
    margin-top: 60px;
    text-align: center;
`;

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
        let userData = await loginUser(formState);
        if(userData && userData.message) {
            setErrors(userData.message); 
            return;
        }
        console.log(userData);
        return;
    }

    return (
        <LoginWrapper>
            <LoginMainText>Login Form</LoginMainText>
                <LoginForm onSubmit={handleSubmit}>
                    <FormItem type="text" name="login" placeholder="Your Login" onChange={handleChange}/>
                    <FormItem type="text" name="password" placeholder="Your password" onChange={handleChange}/>
                    <FormButton type="submit">Send</FormButton>
                </LoginForm>
                {
                    errors ? <ErrorMessage>{errors}</ErrorMessage> : null
                }
        </LoginWrapper>
    )
}

export default Login;