import React, { ReactNode } from 'react';
import { Content, ImageWrapper, StyledCard } from './card.style';

type CardProps = {
  children?: ReactNode;
  image?: ReactNode;
  imagePlacement?: 'top' | 'bottom' | 'left' | 'right';
  maxHeight?: number;
  wrap?: boolean;
};

export const Card = ({ children, maxHeight, image, wrap = false, imagePlacement = 'top' }: CardProps) => {
  const renderContent = () => {
    if (!children) {
      return null;
    }

    return <Content>{children}</Content>;
  };

  const renderImage = () => {
    if (!image) {
      return null;
    }

    return <ImageWrapper>{image}</ImageWrapper>;
  };

  return (
    <StyledCard className="tui-card" $wrap={wrap} $imagePlacement={imagePlacement} style={{ maxHeight: maxHeight }}>
      {renderImage()}
      {renderContent()}
    </StyledCard>
  );
};
