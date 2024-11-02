const Input = () => {
  return (
    <>
      <input
        type="text"
        className="border px-4 py-2 border-gray-700 rounded-md placeholder:text-sm text-sm dark:bg-transparent dark:text-white"
        placeholder="username"
      />
    </>
  );
};

export default Input;

import { cn } from "@/lib/utils";
import { OTPInput, SlotProps } from "input-otp";

export function Input44() {
  return (
    <div className="space-y-2">
      <label htmlFor="input-44">OTP input single</label>
      <OTPInput
        id="input-44"
        containerClassName="flex items-center gap-3 has-[:disabled]:opacity-50"
        maxLength={4}
        render={({ slots }) => (
          <div className="flex">
            {slots.map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
          </div>
        )}
      />
    </div>
  );
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative flex size-9 items-center justify-center border-y border-e border-input bg-background font-medium text-foreground shadow-sm shadow-black/[.04] ring-offset-background transition-all first:rounded-s-lg first:border-s last:rounded-e-lg",
        {
          "z-10 border border-ring ring-2 ring-ring/30 ring-offset-2":
            props.isActive,
        }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}

// Dependencies: npm install input-otp lucide-react

import { Minus } from "lucide-react";

export function Input45() {
  return (
    <div className="space-y-2">
      <label htmlFor="input-45">OTP input double</label>
      <OTPInput
        id="input-45"
        containerClassName="flex items-center gap-3 has-[:disabled]:opacity-50"
        maxLength={6}
        render={({ slots }) => (
          <>
            <div className="flex">
              {slots.slice(0, 3).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>

            <div className="text-muted-foreground/80">
              <Minus size={16} strokeWidth={2} aria-hidden="true" />
            </div>

            <div className="flex">
              {slots.slice(3).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>
          </>
        )}
      />
    </div>
  );
}

import { useCharacterCount } from "@/hooks/use-character-limit";

export function Input35() {
  const maxLength = 8;
  const { value, characterCount, handleChange } = useCharacterCount("");

  return (
    <div className="space-y-2 flex flex-col">
      <label htmlFor="input-35">Input with characters left</label>
      <input
        id="input-35"
        type="text"
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        className="px-2 py-1 border border-gray-800 rounded-md placeholder:text-sm text-sm dark:bg-transparent dark:text-white"
      />
      <p
        id="charactes-left"
        className="mt-2 text-xs text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        <span className="tabular-nums">{maxLength - characterCount}</span>{" "}
        characters left
      </p>
    </div>
  );
}

import { Check, Eye, EyeOff, X } from "lucide-react";
import { useMemo, useState } from "react";

export function Input51() {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const checkStrength = (pass: string) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    ];

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }));
  };

  const strength = checkStrength(password);

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);

  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return "Enter a password";
    if (score <= 2) return "Weak password";
    if (score === 3) return "Medium password";
    return "Strong password";
  };

  return (
    <div>
      {/* Password input field with toggle visibility button */}
      <div className="space-y-2">
        <label htmlFor="input-51">Input with password strength indicator</label>
        <div className="flex items-center justify-center border focus-within:outline focus-within:outline-1 border-gray-800 px-4 py-1 rounded-md">
          <input
            id="input-51"
            className="pe-9 dark:bg-transparent focus:outline-none"
            placeholder="Password"
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // aria-invalid={strengthScore < 4}
            // aria-describedby="password-strength"
          />
          <button
            className=" flex h-full w-6 items-center justify-center text-muted-foreground/80 transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            onClick={toggleVisibility}
            // aria-label={isVisible ? "Hide password" : "Show password"}
            // aria-pressed={isVisible}
            // aria-controls="password"
          >
            {isVisible ? (
              <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Eye size={16} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Password strength indicator */}
      <div
        className="mb-4 mt-3 h-1 w-full overflow-hidden rounded-full bg-border"
        role="progressbar"
        aria-valuenow={strengthScore}
        aria-valuemin={0}
        aria-valuemax={4}
        aria-label="Password strength"
      >
        <div
          className={`h-full ${getStrengthColor(
            strengthScore
          )} transition-all duration-500 ease-out`}
          style={{ width: `${(strengthScore / 4) * 100}%` }}
        ></div>
      </div>

      {/* Password strength description */}
      <p
        id="password-strength"
        className="mb-2 text-sm font-medium text-foreground"
      >
        {getStrengthText(strengthScore)}. Must contain:
      </p>

      {/* Password requirements list */}
      <ul className="space-y-1.5" aria-label="Password requirements">
        {strength.map((req, index) => (
          <li key={index} className="flex items-center space-x-2">
            {req.met ? (
              <Check
                size={16}
                className="text-emerald-500"
                aria-hidden="true"
              />
            ) : (
              <X
                size={16}
                className="text-muted-foreground/80"
                aria-hidden="true"
              />
            )}
            <span
              className={`text-xs ${
                req.met ? "text-emerald-600" : "text-muted-foreground"
              }`}
            >
              {req.text}
              <span className="sr-only">
                {req.met ? " - Requirement met" : " - Requirement not met"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Input32() {
  return (
    <div className="group relative ">
      <label
        htmlFor="input-32"
        className="has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)):-translate-y-1/2 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground"
      >
        <span className="inline-flex bg-background px-2 ">
          Input with label
        </span>
      </label>
      <input
        id="input-32"
        type="email"
        placeholder=""
        className="dark:bg-transparent focus:outline-none border border-white/10 bg-background px-4 py-2  rounded-md placeholder:text-xs text-sm "
      />
    </div>
  );
}
