import styled from 'styled-components';
import { device } from '../../helpers/stylehelpers';

export const StyledDropdown = styled.div`
  position: relative;

  @media ${device.phone} {
    position: inherit;
  }
`;

export const DropdownButton = styled.div`
  cursor: pointer;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 15;
  background-color: ${(props) => props.theme.colors.grayLightEvenMore};
  border: 1px solid ${(props) => props.theme.colors.grayLight};
  border-radius: ${(props) => props.theme.roundness};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media ${device.phone} {
    bottom: 0;
    min-height: 100px;
    width: 100%;
    top: auto;
  }
`;
