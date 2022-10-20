import React from 'react';
import FillPage from './fillpage';
import { StyledLoader } from './loader.style';

type Props = {
  size?: string;
  light?: boolean;
  fillPage?: boolean;
  className?: string;
  testId?: string;
};

export const Loader = ({ size, light = false, fillPage = false, className = '', testId = 'loader' }: Props) => {
  const checkFillPage = () => {
    if (fillPage) {
      return <FillPage>{renderLoader()}</FillPage>;
    }

    return renderLoader();
  };

  const getClasses = () => ['tui-loader', size ? size : '', light ? 'tui-light' : '', className].join(' ');

  const renderLoader = () => {
    return (
      <StyledLoader className={getClasses()} data-test-id={testId}>
        <div className="circle" />
        <div className="circleFaded" />
      </StyledLoader>
    );
  };

  return checkFillPage();
};
