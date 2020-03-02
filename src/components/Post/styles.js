import styled from 'styled-components';

export const PostContainerBackground = styled.section`
    height: 100%;
    box-sizing: border-box;
    background: #1B1B1B;
    color: #F2F3F4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 20px;
`;

export const PostWrapper = styled.div`
  width:100%;
  height: auto;
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 2px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom:0;
  }
`;

export const PostTextDetail = styled.h1`
  font-size: 20px;
  &:nth-child(2) {
    margin: 20px 0 20px 0;
  }
`;

export const PostTextContainer = styled.div`
  padding:5px 0;
  margin-bottom: 20px;
  height: ${(props) => (props.loadMore ? '100%' : '128px')};
  overflow-y: hidden;
`;

export const PostButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostCommentButton = styled.button`
    background: transparent;
    border: 2px solid #F2F3F4;
    border-radius: 4px;
    color: #F2F3F4;
    opacity: .5;
    padding: 15px 0;
    flex:1;
    margin: 0 10px 0 0;
    &:nth-child(2) {
      margin: 0 0 0 10px;
    }

    &:hover,
    &:focus {
        opacity: 1;
    }
`;

export const PostAddCommentContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin:0 !important;
  }
`;

export const PostTextAreaComment = styled.textarea`
  margin: 30px 0 10px 0;
  border: 1px solid white;
  background: none !important;
  color: #F2F3F4;
  padding: 10px;
  opacity: .5;
  resize: none;

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
