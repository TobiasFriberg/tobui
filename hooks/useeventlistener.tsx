import { useEffect, useRef } from 'react';

export const useEventListener = (
  eventName: string,
  handler: Function,
  options?: any,
  element?: null | Window | HTMLElement
) => {
  const savedHandler = useRef<Function>(() => {});

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const el = typeof window === 'undefined' ? null : window;
    const isSupported = el && el.addEventListener;

    if (!isSupported) {
      return () => {};
    }
    const eventListener = (event: Event) => savedHandler.current(event);
    el.addEventListener(eventName, eventListener);

    return () => {
      el.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, element]);
};
