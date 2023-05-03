import React from 'react';
import FillPage from './fillpage';
import { Circle, CircleFaded, StyledLoader } from './loader.style';

type Props = {
  size?: string;
  light?: boolean;
  fillPage?: boolean;
  testId?: string;
  className?: string;
};

export const Loader = ({ size, light = false, fillPage = false, testId = 'loader', className }: Props) => {
  const checkFillPage = () => {
    if (fillPage) {
      return <FillPage>{renderLoader()}</FillPage>;
    }

    return renderLoader();
  };

  const getClasses = () => ['tui-loader', size ? size : '', light ? 'tui-loader-light' : '', className].join(' ');

  const renderLoader = () => {
    return (
      <StyledLoader className={getClasses()} data-test-id={testId}>
        <Circle small={size === 'small'} light={light} />
        <CircleFaded small={size === 'small'} light={light} />
      </StyledLoader>
    );
  };

  return checkFillPage();
};
