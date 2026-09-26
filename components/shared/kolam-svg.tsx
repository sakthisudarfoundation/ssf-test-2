"use client";

/**
 * Signature visual motif: a generative kolam (Tamil threshold-art) pattern
 * of dots and looping curves, rendered as SVG. Used across the site as the
 * one memorable, culturally-grounded decorative element instead of generic
 * gradient blobs.
 */
export function KolamPattern({
  cols = 12,
  rows = 12,
  spacing = 42,
  size = 500,
  color = "#C9962C",
  opacity = 0.5,
  className,
}: {
  cols?: number;
  rows?: number;
  spacing?: number;
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const dots: React.ReactNode[] = [];
  const curves: React.ReactNode[] = [];

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = cx + (i - cols / 2) * spacing;
      const y = cy + (j - rows / 2) * spacing;
      dots.push(<circle key={`d-${i}-${j}`} cx={x} cy={y} r={2} fill={color} opacity={opacity + 0.1} />);
    }
  }
  for (let i = 0; i < cols - 1; i++) {
    for (let j = 0; j < rows - 1; j++) {
      const x = cx + (i - cols / 2) * spacing;
      const y = cy + (j - rows / 2) * spacing;
      curves.push(
        <path
          key={`c1-${i}-${j}`}
          d={`M${x},${y} Q${x + spacing / 2},${y + spacing / 2} ${x + spacing},${y}`}
          stroke={color}
          strokeWidth={1.2}
          fill="none"
          opacity={opacity}
        />
      );
      curves.push(
        <path
          key={`c2-${i}-${j}`}
          d={`M${x},${y + spacing} Q${x + spacing / 2},${y + spacing / 2} ${x + spacing},${y + spacing}`}
          stroke={color}
          strokeWidth={1.2}
          fill="none"
          opacity={opacity}
        />
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>{curves}</g>
      <g>{dots}</g>
    </svg>
  );
}
