import styled from 'styled-components';

export const CreatePostForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 40px 0;
`;

export const CreatePostTextarea = styled.textarea`
  border: 1px solid white;
  background: none !important;
  color: #F2F3F4;
  padding: 10px;
  opacity: .5;
  resize: none;
  border-radius: 24px;
  flex: 4;

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

export const CreatePostButton = styled.button`
  background: transparent;
  border: 2px solid #F2F3F4;
  border-radius: 4px;
  color: #F2F3F4;
  opacity: .5;
  padding: 5px 0;
  flex:1;
  margin-left: 10px;
`;
