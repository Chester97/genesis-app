import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import socketIOClient from 'socket.io-client';
import * as S from './styles';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const userName = useSelector((state) => state.user.name);
  const socket = socketIOClient('http://localhost:3000');

  // useEffect(() => {
  //   socket.on('chat', (data) => console.log(data));
  // }, []);

  const handleTest = () => {
    socket.emit('chat', {
      message: 'Siema',
    });
    socket.on('chat', (data) => console.log(data));
  };

  return (
    <S.HomeWrapper>
      <Navbar />
      <S.Text onClick={handleTest}>
        Hello
        {userName}
        From Home Page
      </S.Text>
    </S.HomeWrapper>
  );
};
export default Home;
