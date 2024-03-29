import React, { useState, ReactNode, useEffect } from 'react';
import { NavigationButton, StepperContent, StepperIndicator, StepperStyle } from './stepper.style';
import { Flex } from '../view/view.style';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';

type StepperProps = {
  steps: ReactNode[];
  step?: number;
  loop?: boolean;
  fillContent?: boolean;
  hideArrows?: boolean;
  indicatorNavigation?: boolean;
  className?: string;
};

export const Stepper = ({
  steps,
  step = 0,
  loop,
  fillContent = false,
  hideArrows,
  indicatorNavigation = false,
  className,
}: StepperProps) => {
  const [currentStep, setCurrentStep] = useState(step);

  useEffect(() => {
    let stepToSet = step;

    if (step > steps.length - 1) {
      stepToSet = steps.length - 1;
    }

    if (step < 0) {
      stepToSet = 0;
    }

    setCurrentStep(stepToSet);
  }, [step]);

  const renderStepIndicator = () => {
    return steps.map((_, i) => {
      return (
        <StepperIndicator
          key={i}
          $active={i === currentStep}
          onClick={() => indicatorNavigation && setCurrentStep(i)}
        />
      );
    });
  };

  const renderStepContent = () => {
    return (
      <StepperContent $fillContent={fillContent} className="tui-stepper-content">
        {steps[currentStep]}
      </StepperContent>
    );
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

  const renderNextStepButton = () => {
    if (currentStep >= steps.length - 1 && !loop) {
      return <span />;
    }

    return (
      <NavigationButton
        className="tui-stepper-next-button"
        icon={<Icon path={mdiArrowRight} />}
        iconOnly
        size="large"
        appearance="text"
        onClick={() => nextStep()}
      />
    );
  };

  const renderPrevStepButton = () => {
    if (currentStep <= 0 && !loop) {
      return <span />;
    }

    return (
      <NavigationButton
        className="tui-stepper-prev-button"
        icon={<Icon path={mdiArrowLeft} />}
        iconOnly
        size="large"
        appearance="text"
        onClick={() => prevStep()}
      />
    );
  };

  return (
    <StepperStyle className={`${className} tui-stepper`}>
      {renderStepContent()}
      <br />
      <Flex $horizontalAlign="space-between">
        {!hideArrows && renderPrevStepButton()}
        {!hideArrows && renderNextStepButton()}
      </Flex>
      <Flex $gap="5px" $horizontalAlign="center">
        {renderStepIndicator()}
      </Flex>
    </StepperStyle>
  );
};
