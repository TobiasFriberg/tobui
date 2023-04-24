import React from 'react';
import { Stepper } from 'tobui';

export const StepperExample = () => {
  return <Stepper steps={[<div>Hello</div>, <div>world</div>, <div>!</div>]} loop />;
};
