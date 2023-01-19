import React, { useState, useEffect, useRef, useMemo } from "react";

export default function useElementInView(options, targetRef) {
  const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      }
    
      const optionsMemo = useMemo(() => {
        return options
      }, [options]);
    
      useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if(currentTarget) observer.observe(currentTarget)
    
        return () => {
          if(currentTarget) observer.observe(currentTarget)
        }
      }, [targetRef, optionsMemo]);

      return isVisible
}
