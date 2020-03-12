import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import Navbar from '../Navbar/index';

const Home = () => {
  const userName = useSelector((state) => state.user.name);

  return (
    <S.HomeWrapper>
      <Navbar />
      <S.Text>
        Hello
        {userName}
        From Home Page
      </S.Text>
    </S.HomeWrapper>
  );
};
export default Home;
