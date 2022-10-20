import { device } from '../../helpers/stylehelpers';
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
      padding: 25px;

      .popupBlocker {
        opacity: 1;
      }
    `;
  }

  return `
    pointer-events: none;

    .popupBlocker {
      opacity: 0;
    }
  `;
};

type PopupProps = {
  open: boolean;
  theme: any;
};

export const StyledPopup = styled.div<PopupProps>`
  ${(props) => getContent(props.open)}

  .tui-popupContent {
    z-index: 900;
    transition: 0.1s;
    max-width: 80%;
    max-height: calc(100% - 40px);
    overflow: auto;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    border-radius: ${(props) => props.theme.roundness};
    padding: 20px;
    padding-top: 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    @media ${device.phone} {
      min-width: calc(100vw - 50px);
    }

    img,
    video {
      max-width: 100%;
      height: auto;
    }

    .tui-topBar {
      padding-top: 15px;
      padding-bottom: 15px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 20;
      background-color: ${(props) => rgba(props.theme.colors.backgroundColor, 0.85)};
    }

    .tui-title {
      justify-content: space-between;
      align-items: center;
      font-size: 1.2em;
      font-weight: bold;
    }

    .tui-footer {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      @media ${device.phone} {
        display: block;
      }

      .tui-buttonGroup {
        display: flex;

        @media ${device.phone} {
          flex-direction: column;
        }

        & > *:not(:last-child) {
          margin-right: 20px;

          @media ${device.phone} {
            margin-right: 0;
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  &.tui-fullscreen {
    padding: 0;

    .tui-popupContent {
      min-width: 100vw;
      min-height: -webkit-fill-available;
    }
  }
`;

export const StyledPopupBlocker = styled.div<any>`
  position: absolute;
  z-index: 800;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: ${(props) => rgba(props.theme.colors.grayDarkEvenMore, 0.6)};
`;
