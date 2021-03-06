import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {Link} from "react-router-dom";

import Search from '../Search'

function Header() {
  const [BurgerOpen, setBurgerOpen] = useState(false);

  return (
    <Container>
      <Link to='/'>
        <img src="/images/logo.jpeg" alt="" width="100px"/>
      </Link>
      <Menu>
        <Search/>
      </Menu>
      <RightMenu>
        <Link to="/product">Product</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <CustomMenu onClick={() => setBurgerOpen(!BurgerOpen)} ></CustomMenu>
      </RightMenu>
      <BurgerNavbar close={BurgerOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerOpen(!BurgerOpen)} sx={{ color: "black" }}></CustomClose>
        </CloseWrapper>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </BurgerNavbar>
    </Container>
  );
}

export default Header;



const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  // border: 2px solid red;
  // background:#282A35;
  background:#0071dc;
  color:white;
`;

const Menu = styled.div`
  // border:2px solid green;
  display: flex;
  width:500px;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-x:0px 10px;
  
  
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    color:white !important;
  }
  a:hover{
    font-weight: 600;
    color:#2196f3 !important;
  }
  
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNavbar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  list-style: none;
  display: flex;
  z-index: 16;
  background: white;
  width: 300px;
  padding: 20px;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.close ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
