import styled from 'styled-components';

export const Wrapper = styled.section`
  box-sizing: border-box;
  width:100%;
  height: 100%;
  margin:0;
  padding:0;
  font-family: 'Roboto', sans-serif;
  max-height: ${(props) => props.context && '100vh'};
  overflow-y: ${(props) => props.context && 'hidden'};
  `;
