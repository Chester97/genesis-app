import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavbarWrapper = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: tomato;
    color:white;
    padding: 0 20px 0 20px;
`;

const RightSideNavbar = styled.div`
    display: flex;
`;

const NavbarItem = styled(Link)`
    padding: 0 0 0 10px;
    cursor: pointer;
    color: white;
    text-decoration: none;
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <p>Logo</p>
            <RightSideNavbar>
                <NavbarItem to="/login">
                    Login
                </NavbarItem>
                <NavbarItem to="/register">
                    Register
                </NavbarItem>
            </RightSideNavbar>
        </NavbarWrapper>
    )
}

export default Navbar;