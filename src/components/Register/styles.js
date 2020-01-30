import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterWrapper = styled.section`
    height: 100vh;
    background: #1B1B1B;
    color: #F2F3F4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
`;

export const RegisterMainText = styled.h1`
    text-align: center;
    font-size: 32px;
`;

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;
    min-width: 70vw;
`;

export const FormItem = styled.input`
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

export const FormButton = styled.button`
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

export const ErrorMessage = styled.h1`
    color: #FFD2D2;
    text-transform: uppercase;
    margin-top: 60px;
    text-align: center;
`;

export const RegirectLink = styled(Link)`
    background: transparent;
    border: 2px solid #F2F3F4;
    border-radius: 4px;
    color: #F2F3F4;
    opacity: .5;
    padding: 15px 0;
    text-decoration: none;
    text-align:center;

    &:hover,
    &:focus {
        opacity: 1;
    }
`;

export const SuccessMessage = styled.p`
    text-align:center;
    color: #5cb85c
`;