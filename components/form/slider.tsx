import React, { useEffect, useRef, useState } from 'react';
import { Flex } from '../view/view.style';
import { InputLabel, StyledInputField } from './inputfield.style';
import { StyleSlider, Thumb, ThumbLabel, Track, TrackProgress, Wrapper, RelativeWrapper } from './slider.style';

type SliderProps = {
  label?: string;
  min?: number;
  max?: number;
  value?: number;
  showPercent?: boolean;
  showValue?: boolean;
  onChange?: (percent: number, value: number) => void;
};

export const Slider = ({ label, min = 0, max = 100, value, showPercent, showValue, onChange }: SliderProps) => {
  const [progress, setProgress] = useState<number>();
  const [currentValue, setCurrentValue] = useState(value || min);

  useEffect(() => {
    updateValue(currentValue);
  }, []);

  const updateValue = (rangeValue: number) => {
    const resetValue = rangeValue - min;
    const reset = max - min;
    const percentValue = Math.round((resetValue / reset) * 100);
    setProgress(percentValue);
    setCurrentValue(rangeValue);
    onChange && onChange(percentValue, rangeValue);
  };

  const renderLabel = () => {
    if (!label) {
      return null;
    }

    return <InputLabel className="tui-label">{label}</InputLabel>;
  };

  const renderExtras = () => {
    if (!showPercent && !showValue) {
      return null;
    }

    let value: string = '';
    let percent: string = '';
    let labelValue = '';

    if (showPercent) {
      percent = progress?.toString() || min.toString();
      labelValue = percent;
    }

    if (showValue) {
      value = currentValue?.toString() || min.toString();
      labelValue = value;
    }

    if (showValue && showPercent) {
      labelValue = `${percent}% | ${value}`;
    }

    return <ThumbLabel>{labelValue}</ThumbLabel>;
  };

  return (
    <StyledInputField className="tui-slider">
      <RelativeWrapper>
        <Flex $horizontalAlign="space-between" $verticalAlign="center">
          {renderLabel()}
          {renderExtras()}
        </Flex>
        <Wrapper>
          <StyleSlider
            value={currentValue}
            max={max}
            min={min}
            onChange={(e) => updateValue(parseInt(e.target.value))}
            type="range"
          />
          <TrackProgress style={{ width: `${progress}%` }} />
          <Track />
          <Thumb style={{ left: `calc(${progress}% - 10px)` }} />
        </Wrapper>
      </RelativeWrapper>
    </StyledInputField>
  );
};
