import * as React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const Root = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Root;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.body};
  font-family: ${(props) => props.theme.fonts.body};
`;
