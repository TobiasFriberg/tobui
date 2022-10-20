import React, { cloneElement, ReactElement, ReactNode, useState } from 'react';
import { Loader } from '../utils';
import { StyledButton } from './button.style';

type Props = {
  children: ReactNode;
  onClick: () => void | Promise<any>;
  variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'gradient';
  className?: string;
  appearance?: 'button' | 'text' | 'border';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  icon?: ReactElement | null;
  disabled?: boolean;
  testId?: string;
};

export const Button = ({
  children,
  onClick,
  className = '',
  loading = false,
  icon,
  disabled = false,
  testId = 'button',
  ...props
}: Props) => {
  const [isLoading, setIsLoading] = useState(loading);

  const handleClick = async () => {
    if (isLoading || disabled) {
      return;
    }

    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  };

  const getButtonContentClassName = () => {
    if (!isLoading) {
      return 'tui-buttonContent';
    }

    return 'tui-blockingHidden';
  };

  const renderLoader = () => {
    if (!isLoading) {
      return null;
    }

    return <Loader size="small" />;
  };

  const renderIcon = () => {
    if (!icon) {
      return null;
    }

    return <div className="tui-icon">{cloneElement(icon, { size: 14 })}</div>;
  };

  const getClass = () => {
    return ['tui-button', isLoading ? 'tui-loading' : '', className].join(' ');
  };

  return (
    <StyledButton
      data-test-id={testId}
      className={getClass()}
      disabled={disabled}
      onClick={() => handleClick()}
      {...props}
    >
      {renderLoader()}
      {renderIcon()}
      <span className={getButtonContentClassName()}>{children}</span>
    </StyledButton>
  );
};
