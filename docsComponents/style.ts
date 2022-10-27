import styled from 'styled-components';
import { device, getContrastColor } from '../helpers/stylehelpers';

export const StyledHeader = styled.div`
  height: 60px;
  background-color: ${(p) => p.theme.colors.primary};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 0 40px;
  color: ${(p) => getContrastColor(p.theme, p.theme.colors.primary)};
`;

export const StyledMenu = styled.div`
  min-width: 200px;
  background-color: ${(p) => p.theme.colors.grayLightEvenMore};
`;

export const ViewContent = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`;

export const PageContent = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media ${device.tablet} {
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
