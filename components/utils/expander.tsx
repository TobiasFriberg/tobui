import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { StyledExpander } from './expander.style';

type Props = {
  title: string;
  children: Object;
  expanded?: boolean;
};

export const Expander = ({ title = '', children, expanded = false }: Props) => {
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

    return <div className="tui-expanderContent">{children}</div>;
  };

  return (
    <StyledExpander>
      <div className="tui-expanderButton" onClick={() => toggleExpander()}>
        <div className="tui-expanderTitle">{title}</div>
        {renderArrow()}
      </div>
      {renderContent()}
    </StyledExpander>
  );
};
