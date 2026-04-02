interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

export default function WaveDivider({ topColor, bottomColor, flip = false }: WaveDividerProps) {
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{
        background: topColor,
        marginBottom: "-1px",
      }}
    >
      <svg
        viewBox="0 0 1200 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full block"
        style={{
          height: "60px",
          transform: flip ? "scaleY(-1)" : "none",
          display: "block",
        }}
      >
        <path
          d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
