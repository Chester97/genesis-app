import React from 'react';
import * as S from './styles';
import Navbar from '../Navbar/Navbar';

const Home = () => (
  <S.HomeWrapper>
    <Navbar />
    <S.Text>
      Hello From Home Page
    </S.Text>
  </S.HomeWrapper>
);

export default Home;
