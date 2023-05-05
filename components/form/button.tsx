import React, { cloneElement, ReactElement, ReactNode, useState } from 'react';
import { Loader } from '../utils';
import { StyledButton, Icon, Content } from './button.style';

type Props = {
  children?: ReactNode;
  onClick: () => void | Promise<any>;
  variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'gradient';
  className?: string;
  appearance?: 'button' | 'text' | 'border';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  iconOnly?: boolean;
  icon?: ReactElement | null;
  disabled?: boolean;
  testId?: string;
};

export const Button = ({
  children,
  onClick,
  className,
  loading = false,
  icon,
  disabled = false,
  iconOnly = false,
  testId = 'button',
  ...props
}: Props) => {
  const [isLoading, setIsLoading] = useState(loading);

  const handleClick = async () => {
    if (isLoading || disabled) {
      return;
    }
    await onClick();
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

    const iconProps = { ...icon.props };
    iconProps.size = iconProps.size || '1rem';

    return (
      <Icon className="tui-button-icon" $iconOnly={iconOnly}>
        {cloneElement(icon, iconProps)}
      </Icon>
    );
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
      iconOnly={iconOnly}
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
