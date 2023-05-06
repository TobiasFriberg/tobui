import React, { useState, ReactNode, useEffect, cloneElement, ReactElement } from 'react';
import { ClearIcon, InputIcon, InputLabel, InputWrapper, StyledInputField } from './inputfield.style';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

type Props = {
  value: string;
  onChange: (e: any) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  autoComplete?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  icon?: ReactElement | null;
  iconPosition?: 'left' | 'right';
  rows?: number;
  width?: string;
  className?: string;
  validator?: (value: string) => boolean;
  onClear?: () => void;
  testId?: string;
};

export const InputField = ({
  type = 'text',
  multiline = false,
  rows = 4,
  label = '',
  value = '',
  onChange,
  className = '',
  iconPosition = 'left',
  placeholder = '',
  width = 'auto',
  validator,
  onClear,
  testId = 'input',
  autoComplete = 'on',
  onBlur,
  onFocus,
  ...props
}: Props) => {
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (validator) {
      handleOnChange(value);
    }
  }, []);

  const handleOnChange = (value: string) => {
    let isValid = true;

    if (validator) {
      isValid = validator(value);
    }

    setValid(isValid);
    onChange(value);
  };

  const renderInput = () => {
    if (!multiline) {
      return (
        <input
          autoComplete={autoComplete}
          type={type}
          value={value}
          onChange={(e) => handleOnChange(e.target.value)}
          placeholder={placeholder}
          onBlur={(e) => onBlur && onBlur()}
          onFocus={() => onFocus && onFocus()}
        />
      );
    }

    return (
      <textarea
        autoComplete={autoComplete}
        onChange={(e) => handleOnChange(e.target.value)}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onBlur={(e) => onBlur && onBlur()}
        onFocus={() => onFocus && onFocus()}
      />
    );
  };

  const renderIcon = () => {
    if (!props.icon) {
      return null;
    }

    return cloneElement(props.icon, { size: '1.3em' });
  };

  const renderLabel = () => {
    if (!label) {
      return null;
    }

    return <InputLabel className="tui-label">{label}</InputLabel>;
  };

  const renderClearButton = () => {
    if (!onClear || value === '') {
      return null;
    }

    return (
      <ClearIcon className="tui-clear-icon" onClick={() => onClear()}>
        <Icon path={mdiClose} size="1.3em" />
      </ClearIcon>
    );
  };

  const getClassNames = () => ['tui-input', className, valid ? '' : 'tui-input-invalid'].join(' ');

  return (
    <StyledInputField data-test-id={testId} className={getClassNames()} {...props}>
      {renderLabel()}
      <InputWrapper
        className="tui-input"
        iconPosition={props.icon ? iconPosition : undefined}
        style={{ maxWidth: width }}
        invalid={!valid}
      >
        <InputIcon position={iconPosition} className="tui-input-icon">
          {renderIcon()}
        </InputIcon>
        {renderInput()}
        {renderClearButton()}
      </InputWrapper>
    </StyledInputField>
  );
};
