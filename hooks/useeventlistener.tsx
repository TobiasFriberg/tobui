import { useEffect, useRef } from 'react';

export const useEventListener = (
  eventName: string,
  handler: Function,
  element: null | Window | HTMLElement = typeof window === 'undefined' ? null : window
) => {
  const savedHandler = useRef<Function>(() => {});

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;

    if (!isSupported) {
      return () => {};
    }
    const eventListener = (event: Event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};
