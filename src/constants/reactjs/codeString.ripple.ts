export const getRippleCodeString = () => {
  return `
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
            width: \`\${mainCircleSize + i * 70}px\`,
            height: \`\${mainCircleSize + i * 70}px\`,
            opacity: mainCircleOpacity - i * 0.03,
            animationDelay: \`\${i * 0.08}s\`,
            borderStyle: i === numCircles - 1 ? "dashed" : "solid",
            borderWidth: "1px",
            borderColor: \`\rgba(var(--foreground-rgb), \${(5 + i * 5) / 100})\`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RippleEffect;

// Add this to your tailwind.config.js
/* 
module.exports = {
  theme: {
    extend: {
      animation: {
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
    },
  },
};

*/

`;
};

export const getRippleCodeString2 = () => {
  return `
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
            width: \`\${mainCircleSize + i * 70}px\`,
            height: \`\${mainCircleSize + i * 70}px\`,
            opacity: mainCircleOpacity - i * 0.03,
            animationDelay: \`\${i * 0.08}s\`,
            borderStyle: i === numCircles - 1 ? "dashed" : "solid",
            borderWidth: "1px",
            borderColor: \`\rgba(var(--foreground-rgb), \${(5 + i * 5) / 100})\`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RippleEffect;
  `;
};

export const getRippleTailwindCodeString = () => {
  return `
module.exports = {
  theme: {
    extend: {
      animation: {
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
    },
  },
};
`;
};

export const getRippleImportCodeString = () => {
  return `
import React from "react";
import RippleEffect from "@/components/atoms/RippleEffect";

const App = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <RippleEffect
        mainCircleSize={210}
        mainCircleOpacity={0.24}
        numCircles={8}
      />
    </div>
  );
};

export default App;
    `;
};
