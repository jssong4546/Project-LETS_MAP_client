import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavBar = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 1);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  text-align: center;
  list-style: none;
  margin-right: 40px;
  font-size: 1em;
  border-bottom: 5px solid
    ${(props) => (props.current ? '#3498db' : 'transparent')};
  transition: border-bottom 0.3s ease-in-out;
`;
const SLink = styled(Link)`
  color: dodgerblue;
  text-decoration: none;
  height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
`;
const categories = [
  { name: 'all', text: 'HOME' },
  { name: 'login', text: 'LOGIN' },
  { name: 'signup', text: 'SIGN UP' },
];
const Header = (props) => {
  // const [login, setLogin] = useState(true);
  return (
    <NavBar>
      {/* {console.log(props)}
      {categories.map((c) => (
        <category key={c.name}>
          <Item>
            {' '}
            <SLink>{c.text}</SLink>
          </Item>
        </category>
      ))} */}
      {props.isLogin ? (
        <List>
          <Item current={props.location.pathname === '/'}>
            <SLink to="/">HOME</SLink>
          </Item>
          <Item current={props.location.pathname === '/login'}>
            <SLink to="/" onClick={() => props.loginHandler()}>
              LOGOUT
            </SLink>
            {/* 로그인시 state 를변경시켜서  로그인회원가입을 숨긴다.*/}
          </Item>
          <Item current={props.location.pathname === '/signup'}>
            <SLink to="/signup">FAVORITES</SLink>
          </Item>
        </List>
      ) : (
        <List>
          {console.dir(props)}
          <Item current={props.location.pathname === '/'}>
            <SLink to="/">HOME</SLink>
          </Item>
          <Item current={props.location.pathname === '/login'}>
            <SLink to="/login">LOGIN</SLink>
            {/* 로그인시 state 를변경시켜서  로그인회원가입을 숨긴다.*/}
          </Item>
          <Item current={props.location.pathname === '/signup'}>
            <SLink to="/signup">SIGN UP</SLink>
          </Item>
        </List>
      )}
      {/* <List>
        <Item current={props.location.pathname === '/'}>
          <SLink to="/">HOME</SLink>
        </Item>
        <Item current={props.location.pathname === '/login'}>
          <SLink to="/login">LOGIN</SLink>
          {/* 로그인시 state 를변경시켜서  로그인회원가입을 숨긴다.*/}
      {/* </Item>
        <Item current={props.location.pathname === '/signup'}>
          <SLink to="/signup">SIGN UP</SLink>
        </Item>
      </List> */}{' '}
    </NavBar>
  );
};

export default withRouter(Header);