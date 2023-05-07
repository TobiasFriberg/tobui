import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { useEventListener } from '../../hooks';
import { StyledSwiper, Content, SwiperWrapper, TransformWrapper } from './swiper.style';

type StepperProps = {
  views: ReactNode[];
  sensitivity?: number;
  onSwiped?: (dir: 'left' | 'right') => void;
  step?: number;
  loop?: boolean;
  shouldSwipe?: 'left' | 'right' | null;
  height?: string;
  className?: string;
};

export const Swiper = ({
  views,
  step = 0,
  loop,
  sensitivity = 110,
  onSwiped,
  shouldSwipe,
  height = '100px',
  className,
}: StepperProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(step);
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [startDragPoint, setStartDragPoint] = useState(0);
  const [dragged, setDragged] = useState(0);
  const [continueSwipe, setContinueSwipe] = useState<null | 'right' | 'left'>(null);

  useEffect(() => {
    if (continueSwipe) {
      setTimeout(() => {
        let nextStep = currentStep + 1;
        if (loop && nextStep >= views.length) {
          nextStep = 0;
        }

        setCurrentStep(nextStep);
        setContinueSwipe(null);
        setDragged(0);
      }, 100);
    }
  }, [continueSwipe]);

  useEffect(() => {
    if (!shouldSwipe || !onSwiped) {
      return;
    }

    setContinueSwipe(shouldSwipe);
    onSwiped(shouldSwipe);
  }, [shouldSwipe]);

  useEffect(() => {
    if (contentRef.current && swiperRef.current) {
      swiperRef.current.style.minHeight = `${contentRef.current.clientHeight}px`;
    }
  }, [contentRef.current]);

  const onSwipeHandler = (e: React.MouseEvent) => {
    setStartDragPoint(e.pageX);
    setMouseIsDown(true);
  };

  const renderContent = () => {
    let currentContent = views[currentStep];

    if (!loop && currentStep >= views.length) {
      return null;
    }

    if (currentStep > views.length - 1) {
      currentContent = views[0];
    }

    return currentContent;
  };

  const renderNextContent = () => {
    const nextStep = currentStep + 1;
    if (!loop && nextStep >= views.length) {
      return null;
    }

    let nextContent = views[nextStep];

    if (nextStep >= views.length) {
      nextContent = views[0];
    }

    return nextContent;
  };

  useEventListener('pointerup', () => {
    if (mouseIsDown) {
      if (dragged > sensitivity) {
        setContinueSwipe('right');
        onSwiped && onSwiped('right');
      } else if (dragged < -sensitivity) {
        setContinueSwipe('left');
        onSwiped && onSwiped('left');
      } else {
        setDragged(0);
      }
      setMouseIsDown(false);
    }
  });

  useEventListener('pointermove', (e: any) => {
    if (mouseIsDown) {
      onMouseMove(e);
    }
  });

  const onMouseMove = useCallback(
    (e) => {
      const draggedAmount = startDragPoint - e.pageX || (e.touches && e.touches[0]?.clientX) || 1;
      setDragged(draggedAmount * -1);
    },
    [startDragPoint]
  );

  useEventListener('touchend', (e: any) => {
    if (mouseIsDown) {
      if (dragged > sensitivity) {
        setContinueSwipe('right');
        onSwiped && onSwiped('right');
      } else if (dragged < -sensitivity) {
        setContinueSwipe('left');
        onSwiped && onSwiped('left');
      } else {
        setDragged(0);
      }
      setMouseIsDown(false);
    }
  });

  useEventListener('touchmove', (e: any) => {
    if (mouseIsDown) {
      onMouseMove(e);
    }
  });

  return (
    <StyledSwiper style={{ height: height }} className={`${className} tui-swiper`}>
      <SwiperWrapper onPointerDown={(e: any) => onSwipeHandler(e)}>
        <Content className="tui-swiper-next-content">{renderNextContent()}</Content>
        <TransformWrapper
          $swipeDir={continueSwipe}
          style={{ transform: `translateX(${dragged}px) rotate(${dragged * 0.02}deg)` }}
        >
          <Content ref={contentRef} className="tui-swiper-content">
            {renderContent()}
          </Content>
        </TransformWrapper>
      </SwiperWrapper>
    </StyledSwiper>
  );
};
