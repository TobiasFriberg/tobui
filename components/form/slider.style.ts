import styled from 'styled-components';
import { measurements } from '../../helpers/stylehelpers';

const thumbStyling = (theme: any) => `
  height: 0px;
  width: 0px;
`;

export const StyleSlider = styled.input`
  cursor: pointer;
  padding: 0;
  margin: 0;
  z-index: 3;
  position: absolute;
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  height: 30px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  :focus {
    outline: none;
  }

  ::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  ::-webkit-slider-thumb {
    ${(p) => thumbStyling(p.theme)}
  }

  ::-moz-range-thumb {
    ${(p) => thumbStyling(p.theme)}
  }

  ::-ms-thumb {
    ${(p) => thumbStyling(p.theme)}
  }
`;

export const Thumb = styled.div`
  position: absolute;
  height: ${measurements.large};
  width: ${measurements.large};
  border-radius: 50%;
  background: ${(p) => p.theme.colors.primary};
  pointer-events: none;
  z-index: 3;
`;

export const Wrapper = styled.div`
  display: flex;
  height: ${measurements.extraLarge};
  align-items: center;
  position: relative;
  width: 100%;
`;

export const RelativeWrapper = styled.div`
  width: 100%;
  padding: 0 ${measurements.medium};
`;

export const Track = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  background-color: ${(p) => p.theme.colors.grayLightMore};
  height: 8px;
  border-radius: 4px;
`;

export const TrackProgress = styled.div`
  z-index: 2;
  position: absolute;
  background-color: ${(p) => p.theme.colors.primary};
  height: 8px;
  border-radius: 4px;
`;

export const ThumbLabel = styled.div`
  font-size: calc(${(p) => p.theme.fontSize} / 1.4);
`;
