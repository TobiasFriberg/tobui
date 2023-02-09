import { InputField } from './inputfield';
import React, { useEffect, useState } from 'react';
import { Search } from 'react-feather';

type Props = {
  handleSearch: (query: string) => void;
  onClear?: () => void;
  placeholder?: string;
  label?: string;
  delay?: number;
  value?: string;
  testId?: string;
};

export const SearchField = ({
  handleSearch,
  placeholder,
  label,
  delay = 1000,
  onClear,
  value = '',
  testId = 'search',
}: Props) => {
  const [searchString, setSearchString] = useState(value);
  const [lastValue, setLastValue] = useState(value);

  useEffect(() => {
    if (searchString === lastValue) {
      return;
    }

    if (!searchString) {
      if (onClear) {
        onClear();
      }
      setLastValue(searchString);
      handleSearch(searchString);
      return;
    }

    const timer = setTimeout(() => {
      setLastValue(searchString);
      handleSearch(searchString);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [searchString]);

  const handleChange = (value: string) => {
    if (searchString !== value) {
      setSearchString(value);
    }
  };

  const handleClear = () => {
    setSearchString('');
    if (!onClear) {
      return;
    }
    onClear();
  };

  return (
    <InputField
      icon={<Search />}
      value={searchString}
      placeholder={placeholder}
      label={label}
      onChange={(e) => handleChange(e)}
      onClear={() => handleClear()}
      testId={testId}
    />
  );
};
