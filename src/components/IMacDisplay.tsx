import './IMacDisplay.css';

type IMacDisplayProps = {
  demoSrc: string;
  demoAlt?: string;
};

export function IMacDisplay({ demoSrc, demoAlt = '' }: IMacDisplayProps) {
  return (
    <div className="imac-display">
      <div className="imac-display__stage">
        {/* Figma: Display 550×440, viewport 500×281, frame insets −8.68% −5.08% −48.96% −5.08% */}
        <div className="imac-display__display">
          <div className="imac-display__viewport">
            <div className="imac-display__screen">
              <img
                src={demoSrc}
                alt={demoAlt}
                className="imac-display__screen-media"
                draggable={false}
              />
            </div>
            <div className="imac-display__frame-wrap" aria-hidden>
              <img
                src="/images/case-studies/machinery/imac-frame.png"
                alt=""
                className="imac-display__frame"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
