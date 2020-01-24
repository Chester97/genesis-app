import React from 'react';
import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';

const Text = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color:tomato;
`;

const HomeWrapper = styled.section`
    display:flex;
    flex-direction: column;
    width:100%;
`;


const Home = () => {
    return (
        <HomeWrapper>
            <Navbar />
            <Text>
                Hello From Home Page
            </Text>
        </HomeWrapper>
    )
}

export default Home;