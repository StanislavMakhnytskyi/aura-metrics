import type { SVGProps } from "react"

interface LogoProps extends SVGProps<SVGSVGElement> {
  /** Height of the mark in px. Width scales automatically. */
  size?: number
  /** Force a color theme. Omit to inherit from CSS (auto). */
  theme?: "light" | "dark"
  /** Render only the circular mark, no wordmark. */
  markOnly?: boolean
  className?: string
}

const L = {
  ring: "#dad9d4",
  arc: "#c96442",
  dot: "#c96442",
  dotInner: "#faf9f5",
  disc: "#ede9de",
  discEdge: "#dad9d4",
  bar1: "#c96442",
  bar2: "#b05730",
  bar3: "#b4552d",
  baseline: "#b4b2a7",
  wordmark: "#3d3929",
  tagline: "#83827d",
}

const D = {
  ring: "#3e3e38",
  arc: "#d97757",
  dot: "#d97757",
  dotInner: "#262624",
  disc: "#30302e",
  discEdge: "#3e3e38",
  bar1: "#d97757",
  bar2: "#c96442",
  bar3: "#b4552d",
  baseline: "#52514a",
  wordmark: "#faf9f5",
  tagline: "#b7b5a9",
}

export function Logo({
  size = 32,
  theme,
  markOnly = true,
  className,
  ...props
}: LogoProps) {
  const t = theme === "dark" ? D : L

  const MARK = 32
  const VB_W = markOnly ? MARK : 180
  const svgW = markOnly ? size : Math.round((size / MARK) * VB_W)

  const cx = 16,
    cy = 16
  const R = 13.5 // orbit ring radius
  const Ri = 8.5 // inner disc radius
  const baselineY = cy + 4.5
  const barW = 2.8

  const bars = [
    { x: cx - 7.5, h: 6.5, op: 0.75, color: "bar1" },
    { x: cx - 3.8, h: 9.5, op: 0.9, color: "bar1" },
    { x: cx + 0, h: 12.5, op: 1, color: "bar2" },
    { x: cx + 3.8, h: 10.5, op: 0.9, color: "bar1" },
    { x: cx + 7.5, h: 8, op: 0.75, color: "bar3" },
  ] as const

  return (
    <svg
      width={svgW}
      height={size}
      viewBox={`0 0 ${VB_W} ${MARK}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AuraMetrics"
      className={className}
      {...props}
    >
      {/* orbit ring */}
      <circle cx={cx} cy={cy} r={R} stroke={t.ring} strokeWidth={0.9} />

      {/* arc highlight — top to right, clockwise */}
      <path
        d={`M ${cx} ${cy - R} A ${R} ${R} 0 0 1 ${cx + R} ${cy}`}
        stroke={t.arc}
        strokeWidth={2.2}
        strokeLinecap="round"
      />

      {/* orbit dot */}
      <circle cx={cx + R} cy={cy} r={2.8} fill={t.dot} />
      <circle cx={cx + R} cy={cy} r={1.1} fill={t.dotInner} />

      {/* inner disc */}
      <circle cx={cx} cy={cy} r={Ri} fill={t.disc} />
      <circle cx={cx} cy={cy} r={Ri} stroke={t.discEdge} strokeWidth={0.6} />

      {/* BI bars */}
      {bars.map(({ x, h, op, color }, i) => (
        <rect
          key={i}
          x={x - barW / 2}
          y={baselineY - h}
          width={barW}
          height={h}
          rx={0.8}
          fill={t[color]}
          opacity={op}
        />
      ))}

      {/* baseline */}
      <line
        x1={cx - 9}
        y1={baselineY}
        x2={cx + 9}
        y2={baselineY}
        stroke={t.baseline}
        strokeWidth={0.7}
      />

      {/* wordmark */}
      {!markOnly && (
        <g>
          <text
            x={38}
            y={12}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize={13}
            fontWeight={600}
            fill={t.wordmark}
            letterSpacing={-0.3}
            dominantBaseline="central"
          >
            AuraMetrics
          </text>
          <text
            x={38}
            y={24}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize={6}
            fontWeight={400}
            fill={t.tagline}
            letterSpacing={1.8}
            dominantBaseline="central"
          >
            REAL-TIME BI CONSOLE
          </text>
        </g>
      )}
    </svg>
  )
}
