import styled from 'styled-components';

export const UserDetailsItem = styled.h1`
  color: black;
  font-size:24px;
  padding:10px;
  &::first-letter {
    text-transform: ${(props) => props.isLabel && 'uppercase'};
  }
`;

export const UserDetailsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;