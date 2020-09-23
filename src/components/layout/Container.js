import styled from 'styled-components';

const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 960;

  @media (min-width: 450) {
    max-width: 960;
  }

  @media (min-width: 1280) {
    max-width: 1280;
  }
`;

export default LayoutContainer;
