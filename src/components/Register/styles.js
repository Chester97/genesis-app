import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as G from '../../shared/styles';


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
    ${G.MainText}
`;

export const RegisterForm = styled.form`
    ${G.Form}
`;

export const FormItem = styled.input`
    ${G.Input};
`;

export const FormButton = styled.button`
    ${G.Button}
`;

export const ErrorMessage = styled.h1`
    ${G.ErrorMessage}
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
