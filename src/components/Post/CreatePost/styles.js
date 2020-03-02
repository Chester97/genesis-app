import styled from 'styled-components';


export const CreatePostContainer = styled.section`
    height:100%;
    width:100%;
    background: #1B1B1B;
    color: #F2F3F4;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 80px 20px;
`;

export const CreatePostForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
`;

export const CreatePostDescription = styled.textarea`
  border: 1px solid white;
  background: none !important;
  color: #F2F3F4;
  padding: 10px;
  opacity: .5;
  resize: none;
  border-radius: 24px;
  flex: 1;
  margin: 20px 0;

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

export const CreatePostTitle = styled.input`
  border: 1px solid white;
  background: none !important;
  color: #F2F3F4;
  padding: 10px;
  opacity: .5;
  resize: none;
  border-radius: 24px;

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
  padding: 15px 0;
  margin-left: 10px;
`;

export const CreatePostText = styled.h1`
  font-size: 26px;
  margin-bottom: 20px;
`;
