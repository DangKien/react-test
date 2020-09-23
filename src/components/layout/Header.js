import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from 'constants/routes-constants';
import LayoutContainer from './Container';

const Wrapper = styled.header`
  padding: 0.5rem 1.5rem;
  background-color: #D31D49;
  color: white;
`;

const HeaderInner = styled(LayoutContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  padding-right: 1rem;
`;

const HeaderNav = styled.nav`
  flex: 1 1 auto;
  margin: 1rem 0;
`;

const HeaderNavLink = styled(NavLink)`
  margin: 0 1rem;
  color: white;
  font-weight: bold;

  &.is-active {
    text-decoration: underline;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
`;

// eslint-disable-next-line react/prop-types
const Header = ({ title }) => (
  <Wrapper>
    <HeaderInner>
      <HeaderLeft>
        <Title>{title}</Title>
      </HeaderLeft>
      <HeaderNav>
        <HeaderNavLink exact to={ROUTES.HOME} activeClassName="is-active">
          Home
        </HeaderNavLink>
        <HeaderNavLink to={ROUTES.HEROES} activeClassName="is-active">
          Heroes
        </HeaderNavLink>
      </HeaderNav>
    </HeaderInner>
  </Wrapper>
);

export default Header;
