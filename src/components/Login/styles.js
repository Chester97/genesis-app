import styled from 'styled-components';
import * as G from '../../shared/styles';

export const LoginWrapper = styled.section`
    height: calc(100% - 80px);
    background: #1B1B1B;
    color: #F2F3F4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
`;

export const ErrorMessage = styled.h1`
    ${G.ErrorMessage}
`;

export const LoginForm = styled.form`
    ${G.Form}
`;


export const LoginMainText = styled.h1`
    ${G.MainText}
`;
export const FormItem = styled.input`
    ${G.Input}
`;

export const FormButton = styled.button`
    ${G.Button}
`;

