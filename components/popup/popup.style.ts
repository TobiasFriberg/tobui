import { device, measurements } from '../../helpers/stylehelpers';
import { rgba } from 'polished';
import styled from 'styled-components';

const getContent = (open: boolean) => {
  if (open) {
    return `
      position: fixed;
      z-index: 800;
      height: 100vh;
      width: 100vw;
      left: 0;
      top: 0;
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: baseline;
      padding: ${measurements.medium};

      ${PopupBlocker} {
        opacity: 1;
      }
    `;
  }

  return `
    pointer-events: none;

    ${PopupBlocker} {
      opacity: 0;
    }
  `;
};

type PopupProps = {
  open: boolean;
  theme: any;
  $fullscreen: boolean;
};

export const StyledPopup = styled.div<PopupProps>`
  ${(p) => getContent(p.open)}

  ${(p) =>
    p.$fullscreen &&
    `
    padding: 0;
    ${Content} {
      min-width: 100vw;
      min-height: -webkit-fill-available;
    }
  `}
`;

export const Content = styled.div`
  z-index: 900;
  transition: 0.1s;
  max-width: 80%;
  max-height: calc(100% - 40px);
  overflow: auto;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  border-radius: ${(props) => props.theme.roundness};
  padding: ${measurements.medium};
  padding-top: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  @media ${device.phone} {
    min-width: calc(100vw - 50px);
  }
`;

export const TopBar = styled.div`
  padding-top: ${measurements.medium};
  padding-bottom: ${measurements.medium};
  display: flex;
  align-items: center;
  margin-bottom: ${measurements.large};
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: ${(props) => rgba(props.theme.colors.backgroundColor, 0.85)};
`;

export const Title = styled.div`
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
`;

export const Footer = styled.div`
  margin-top: ${measurements.large};
  display: flex;
  justify-content: space-between;

  @media ${device.phone} {
    display: block;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: ${measurements.large};

    @media ${device.phone} {
      margin-right: 0;
      margin-bottom: ${measurements.small};
    }
  }

  @media ${device.phone} {
    flex-direction: column;
  }
`;

export const PopupBlocker = styled.div<any>`
  position: absolute;
  z-index: 800;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: ${(props) => rgba(props.theme.colors.grayDarkEvenMore, 0.6)};
`;
