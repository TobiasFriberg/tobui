import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { ExpanderButton, ExpanderContent } from './expander.style';

type Props = {
  title: string;
  children: Object;
  expanded?: boolean;
  className?: string;
};

export const Expander = ({ title = '', children, expanded = false, className }: Props) => {
  const [expandedState, setExpandedState] = useState<boolean>(expanded);

  const renderArrow = () => {
    let arrow = <ChevronDown />;

    if (expandedState) {
      arrow = <ChevronUp />;
    }
    return arrow;
  };

  const toggleExpander = () => {
    setExpandedState(!expandedState);
  };

  const renderContent = () => {
    if (!expandedState) {
      return null;
    }

    return <ExpanderContent className="tui-expander-content">{children}</ExpanderContent>;
  };

  return (
    <div className={`${className} tui-expander`}>
      <ExpanderButton className="tui-expander-trigger" onClick={() => toggleExpander()}>
        <div className="tui-expander-title">{title}</div>
        {renderArrow()}
      </ExpanderButton>
      {renderContent()}
    </div>
  );
};
