import { useCallback, useState } from 'react';
import './MenuRow.css';

type MenuRowProps =
  | {
      number: string;
      variant: 'static';
      children: React.ReactNode;
    }
  | {
      number: string;
      variant: 'link';
      href: string;
      children: React.ReactNode;
      external?: boolean;
    }
  | {
      number: string;
      variant: 'construction';
      children: React.ReactNode;
      tooltip: string;
    };

export function MenuRow(props: MenuRowProps) {
  const { number } = props;

  if (props.variant === 'static') {
    return (
      <div className="menu-row menu-row--static">
        <span className="menu-row__number">{number}</span>
        <span className="menu-row__text">{props.children}</span>
      </div>
    );
  }

  if (props.variant === 'link') {
    return (
      <a
        className="menu-row menu-row--link"
        href={props.href}
        target={props.external ? '_blank' : undefined}
        rel={props.external ? 'noopener noreferrer' : undefined}
      >
        <span className="menu-row__number">{number}</span>
        <span className="menu-row__text">{props.children}</span>
      </a>
    );
  }

  return <ConstructionRow number={number} tooltip={props.tooltip}>{props.children}</ConstructionRow>;
}

function ConstructionRow({
  number,
  tooltip,
  children,
}: {
  number: string;
  tooltip: string;
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <>
      <div
        className="menu-row menu-row--construction"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={handleMouseMove}
      >
        <span className="menu-row__number">{number}</span>
        <span className="menu-row__text">{children}</span>
      </div>
      {visible && (
        <div
          className="menu-row__tooltip"
          style={{ left: position.x + 16, top: position.y + 16 }}
          role="tooltip"
        >
          {tooltip}
        </div>
      )}
    </>
  );
}
