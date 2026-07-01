import { useEffect, useRef, useState, type ReactNode } from 'react';
import './ViewportFit.css';

const NAV_HEIGHT = 52;

type ViewportFitProps = {
  children: ReactNode;
  className?: string;
};

export function ViewportFit({ children, className = '' }: ViewportFitProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const updateScale = () => {
      const content = contentRef.current;
      if (!content) return;

      const availableHeight = window.innerHeight - NAV_HEIGHT;
      const measuredHeight = content.scrollHeight;
      const nextScale =
        measuredHeight > availableHeight ? availableHeight / measuredHeight : 1;

      setContentHeight(measuredHeight);
      setScale(nextScale);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    window.addEventListener('resize', updateScale);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const scaled = scale < 0.999;

  return (
    <div
      className={`viewport-fit ${className}`.trim()}
      style={{ height: `calc(100dvh - ${NAV_HEIGHT}px)` }}
    >
      <div
        className="viewport-fit__scaler"
        style={
          scaled
            ? {
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
                marginBottom: contentHeight * (scale - 1),
              }
            : undefined
        }
      >
        <div ref={contentRef} className="viewport-fit__content">
          {children}
        </div>
      </div>
    </div>
  );
}
