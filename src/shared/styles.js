import styled, { css } from 'styled-components';

// Dlaczego wszystko jest jako luzne "css", a nie sa wpiete odpowiednie tagi HTMLowe?

const Button = css`
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

const Input = css`
    width: 100%;
    border: none;
    border-bottom: 1px solid white;
    background: none;
    color: #F2F3F4;
    padding: 0 0 5px 5px;
    opacity: .5;

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus {
        -webkit-text-fill-color: white;
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    &:focus {
        opacity: 1;
    }
`;

const MainText = css`
    text-align: center;
    font-size: 32px;
`;

const Form = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
  min-width: 70vw;
`;

const ErrorMessage = css`
  color: #FFD2D2;
  text-transform: uppercase;
  text-align: center;
`;

export {
  Button,
  Input,
  MainText,
  Form,
  ErrorMessage,
};
