import React from "react";

interface RippleEffectProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

const RippleEffect: React.FC<RippleEffectProps> = ({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]">
      {Array.from({ length: numCircles }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-ripple rounded-full bg-foreground/30 shadow-xl border top-1/2 left-1/2 translate-x-1/2 translate-y-1/2"
          style={{
            width: `${mainCircleSize + i * 70}px`,
            height: `${mainCircleSize + i * 70}px`,
            opacity: mainCircleOpacity - i * 0.03,
            animationDelay: `${i * 0.08}s`,
            borderStyle: i === numCircles - 1 ? "dashed" : "solid",
            borderWidth: "1px",
            borderColor: `rgba(var(--foreground-rgb), ${(5 + i * 5) / 100})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RippleEffect;
