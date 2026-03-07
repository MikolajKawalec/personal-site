export default function TechPattern({ className }: { className?: string }) {
  const colors = {
    dot: "var(--tech-pattern-dot)",
    lineStrong: "var(--tech-pattern-line-strong)",
    lineMuted: "var(--tech-pattern-line-muted)",
    lineAccent: "var(--tech-pattern-line-accent)",
    nodeAccent: "var(--tech-pattern-node-accent)",
    nodeNeutral: "var(--tech-pattern-node-neutral)",
    highlight: "var(--tech-pattern-highlight)",
    text: "var(--tech-pattern-text)",
    textMuted: "var(--tech-pattern-text-muted)",
    crosshair: "var(--tech-pattern-crosshair)",
    block: "var(--tech-pattern-block)",
  } as const;

  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Very subtle dot grid for the background */}
        <pattern
          id="dot-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill={colors.dot} />
        </pattern>

        {/* The main repeatable Y-axis texture pattern */}
        <pattern
          id="tech-texture"
          width="240"
          height="800"
          patternUnits="userSpaceOnUse"
        >
          {/* Base dot grid */}
          <rect width="240" height="800" fill="url(#dot-grid)" />

          {/* --- VERTICAL TRACKS --- */}
          {/* Track 1: Leftmost continuous */}
          <line
            x1="24"
            y1="0"
            x2="24"
            y2="800"
            stroke={colors.lineStrong}
            strokeWidth="2"
          />
          {/* Track 2: Dashed secondary */}
          <line
            x1="72"
            y1="0"
            x2="72"
            y2="800"
            stroke={colors.lineMuted}
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          {/* Track 3: Solid accent */}
          <line
            x1="144"
            y1="0"
            x2="144"
            y2="800"
            stroke={colors.lineAccent}
            strokeWidth="1"
          />
          {/* Track 4: Rightmost solid */}
          <line
            x1="192"
            y1="0"
            x2="192"
            y2="800"
            stroke={colors.lineStrong}
            strokeWidth="1"
          />

          {/* --- HORIZONTAL BRANCHES & CIRCUIT NODES --- */}
          <g strokeWidth="1">
            {/* Branch 1 */}
            <line x1="24" y1="80" x2="72" y2="80" stroke={colors.lineMuted} />
            <circle cx="24" cy="80" r="3" fill={colors.nodeAccent} />
            <rect x="70" y="78" width="4" height="4" fill={colors.lineMuted} />

            {/* Branch 2 */}
            <line x1="72" y1="220" x2="144" y2="220" stroke={colors.lineStrong} />
            <circle
              cx="144"
              cy="220"
              r="4"
              fill="none"
              stroke={colors.nodeAccent}
              strokeWidth="1.5"
            />
            <circle cx="144" cy="220" r="1.5" fill={colors.nodeAccent} />

            {/* Branch 3 */}
            <line
              x1="144"
              y1="360"
              x2="192"
              y2="360"
              stroke={colors.lineAccent}
            />
            <path
              d="M 190 358 L 194 358 L 194 362 L 190 362 Z"
              fill={colors.highlight}
            />

            {/* Branch 4 */}
            <line
              x1="24"
              y1="500"
              x2="144"
              y2="500"
              stroke={colors.lineMuted}
              strokeDasharray="2 2"
            />
            <circle cx="24" cy="500" r="3" fill={colors.nodeNeutral} />
            <circle cx="72" cy="500" r="2" fill={colors.nodeNeutral} />

            {/* Branch 5 */}
            <line x1="72" y1="680" x2="192" y2="680" stroke={colors.lineStrong} />
            <rect x="70" y="678" width="4" height="4" fill={colors.nodeAccent} />
            <circle cx="192" cy="680" r="3" fill="none" stroke={colors.lineMuted} />
          </g>

          {/* --- TECH SYMBOLS & TEXT --- */}
          <g fontFamily="monospace" fontSize="12" fill={colors.text}>
            {/* Top Section */}
            <text x="32" y="40" fill={colors.nodeAccent}>
              {"</>"}
            </text>
            <text x="84" y="110">
              {"{}"}
            </text>
            <text x="156" y="60" fontSize="10">
              {"[]"}
            </text>
            <text x="204" y="150" fill={colors.highlight}>
              {"/*  */"}
            </text>

            {/* Mid Section 1 */}
            <text x="32" y="180" fontSize="10" fill={colors.textMuted}>
              {"&&"}
            </text>
            <text x="84" y="270" fill={colors.textMuted}>
              {"() =>"}
            </text>
            <text x="156" y="300" fontSize="14" fill={colors.nodeAccent}>
              {"||"}
            </text>
            <text x="32" y="340">
              {"< >"}
            </text>

            {/* Mid Section 2 */}
            <text x="84" y="420" fontSize="10" fill={colors.highlight}>
              {"==="}
            </text>
            <text x="156" y="460">
              {"<!--"}
            </text>
            <text x="204" y="490">
              {"-->"}
            </text>
            <text x="32" y="550" fill={colors.nodeAccent}>
              {"!=!"}
            </text>

            {/* Bottom Section */}
            <text x="84" y="600" fontSize="14">
              {"[...]"}
            </text>
            <text x="156" y="640" fontSize="10" fill={colors.textMuted}>
              {"?:"}
            </text>
            <text x="32" y="730">
              {"${}"}
            </text>
            <text x="204" y="760" fill={colors.nodeAccent}>
              {"0101"}
            </text>
          </g>

          {/* --- CROSSHAIRS & GEOMETRIC ACCENTS --- */}
          <g stroke={colors.crosshair} strokeWidth="1.5">
            {/* + signs */}
            <path d="M 120 145 L 120 155 M 115 150 L 125 150" />
            <path d="M 48 405 L 48 415 M 43 410 L 53 410" />
            <path d="M 216 275 L 216 285 M 211 280 L 221 280" />
            <path d="M 120 625 L 120 635 M 115 630 L 125 630" />

            {/* Corner brackets */}
            <path d="M 15 250 L 10 250 L 10 255" fill="none" />
            <path d="M 230 520 L 235 520 L 235 515" fill="none" />
          </g>

          {/* --- DATA BLOCKS (Small repeating rectangles) --- */}
          <g fill={colors.block}>
            <rect x="22" y="120" width="4" height="12" />
            <rect x="22" y="136" width="4" height="12" />

            <rect x="190" y="420" width="4" height="8" fill={colors.nodeAccent} />
            <rect x="190" y="432" width="4" height="8" fill={colors.nodeAccent} />
            <rect x="190" y="444" width="4" height="8" fill={colors.nodeAccent} />

            <rect x="70" y="750" width="4" height="4" />
            <rect x="70" y="758" width="4" height="4" />
            <rect x="70" y="766" width="4" height="4" />
          </g>
        </pattern>
      </defs>

      {/* Fill the entire SVG with the repeating texture */}
      <rect width="100%" height="100%" fill="url(#tech-texture)" />
    </svg>
  );
}
