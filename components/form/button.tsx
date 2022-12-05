import React, { cloneElement, ReactElement, ReactNode, useState } from 'react';
import { Loader } from '../utils';
import { StyledButton, Icon, Content } from './button.style';

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

    return <Icon className="tui-button-icon">{cloneElement(icon, { size: 14 })}</Icon>;
  };

  const getClass = () => {
    return ['tui-button', isLoading ? 'tui-button-loading' : '', className].join(' ');
  };

  return (
    <StyledButton
      data-test-id={testId}
      className={getClass()}
      disabled={disabled}
      onClick={() => handleClick()}
      $loading={isLoading}
      {...props}
    >
      {renderLoader()}
      {renderIcon()}
      <Content className="tui-button-content" $loading={isLoading}>
        {children}
      </Content>
    </StyledButton>
  );
};
