import styled from 'styled-components';
import { device, getContrastColor } from '../helpers/stylehelpers';

export const StyledHeader = styled.div`
  height: 60px;
  background-color: ${(p) => p.theme.colors.primary};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 0 40px;
  position: sticky;
  top: 0;
  z-index: 120;
  color: ${(p) => getContrastColor(p.theme, p.theme.colors.primary)};
`;

export const StyledMenu = styled.div`
  min-width: 200px;
  background-color: ${(p) => p.theme.colors.grayLightEvenMore};
  position: sticky;
  top: 60px;
  z-index: 25;
  height: calc(100vh - 60px);
`;

export const ViewContent = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media ${(p) => device(p.theme).tablet} {
    margin-left: 45px;
  }
`;

export const Page = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin: auto;
  max-width: 1200px;
  width: 100%;
`;
