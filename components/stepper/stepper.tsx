import React, { useState, ReactNode } from 'react';
import { NavigationButton, StepperContent, StepperIndicator, StepperStyle } from './stepper.style';
import { Flex } from '../view/view.style';
import { Card } from '../card';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { Button } from '../form';

type StepperProps = {
  steps: ReactNode[];
  initStep?: number;
  loop?: boolean;
};

export const Stepper = ({ steps, initStep = 0, loop }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState(initStep);

  const renderStepIndicator = () => {
    return steps.map((_, i) => {
      return <StepperIndicator $active={i === currentStep} onClick={() => setCurrentStep(i)} />;
    });
  };

  const renderStepContent = () => {
    return <StepperContent className="tui-stepper-content">{steps[currentStep]}</StepperContent>;
  };

  const nextStep = () => {
    let next = currentStep + 1;

    if (next > steps.length - 1) {
      next = 0;
      if (!loop) {
        return;
      }
    }

    setCurrentStep(next);
  };

  const prevStep = () => {
    let prev = currentStep - 1;

    if (prev < 0) {
      prev = steps.length - 1;
      if (!loop) {
        return;
      }
    }

    setCurrentStep(prev);
  };

  return (
    <StepperStyle className="tui-stepper">
      <Flex $horizontalAlign="space-between" $verticalAlign="center">
        <NavigationButton
          className="tui-stepper-prev-button"
          icon={<ArrowLeft />}
          iconOnly
          size="large"
          appearance="text"
          onClick={() => prevStep()}
        />
        {renderStepContent()}
        <NavigationButton
          className="tui-stepper-next-button"
          icon={<ArrowRight />}
          iconOnly
          size="large"
          appearance="text"
          onClick={() => nextStep()}
        />
      </Flex>
      <br />
      <Flex $gap="5px" $horizontalAlign="center">
        {renderStepIndicator()}
      </Flex>
    </StepperStyle>
  );
};
