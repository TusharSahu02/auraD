import React from "react";

export const Loader1 = React.memo(() => {
  return (
    <div className="relative h-10 w-10 rotate-[165deg] transform">
      <div className="before:absolute before:left-1/2 before:top-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:animate-before8 before:rounded-md before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:transform after:animate-after6 after:rounded-md after:content-['']" />
    </div>
  );
});

export const Loader2 = () => {
  return (
    <div className="relative h-24 w-12 overflow-hidden rounded-[25px] bg-black dark:bg-white/20">
      <div className="absolute left-[15px] top-0 h-5 w-5 animate-drop rounded-full bg-gradient-to-b from-pink-500 to-pink-300" />
      <div className="absolute left-1 top-0 h-5 w-5 animate-drop1 rounded-full bg-gradient-to-b from-green-500 to-cyan-400" />
      <div className="absolute left-[30px] top-0 h-5 w-5 animate-drop2 rounded-full bg-gradient-to-b from-purple-600 to-pink-300" />
      <div className="absolute left-[20px] top-0 h-5 w-5 animate-drop3 rounded-full bg-gradient-to-b from-blue-600 to-cyan-400" />
    </div>
  );
};

export const Loader3 = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mr-2 h-5 w-5 animate-pulse1 rounded-full bg-[#b3d4fc]" />
      <div className="mr-2 h-5 w-5 animate-pulse2 rounded-full bg-[#b3d4fc]" />
      <div className="mr-2 h-5 w-5 animate-pulse3 rounded-full bg-[#b3d4fc]" />
      <div className="mr-2 h-5 w-5 animate-pulse4 rounded-full bg-[#b3d4fc]" />
      <div className="h-5 w-5 animate-pulse5 rounded-full bg-[#b3d4fc]" />
    </div>
  );
};

export const Loader4 = () => {
  return (
    <div className="relative mx-auto my-10 flex h-[calc(2*30px+26px)] w-[calc(3*30px+26px)] items-center justify-center">
      <div
        className="absolute h-[26px] w-[26px] animate-square1 rounded-[2px] bg-[#81A263]"
        style={{ left: "calc(0 * 30px)", top: "calc(0 * 30px)" }}
      />
      <div
        className="absolute h-[26px] w-[26px] animate-square2 rounded-[2px] bg-[#81A263]"
        style={{ left: "calc(0 * 30px)", top: "calc(1 * 30px)" }}
      />
      <div
        className="absolute h-[26px] w-[26px] animate-square3 rounded-[2px] bg-[#81A263]"
        style={{ left: "calc(1 * 30px)", top: "calc(1 * 30px)" }}
      />
      <div
        className="absolute h-[26px] w-[26px] animate-square4 rounded-[2px] bg-[#81A263]"
        style={{ left: "calc(2 * 30px)", top: "calc(1 * 30px)" }}
      />
      <div
        className="absolute h-[26px] w-[26px] animate-square5 rounded-[2px] bg-[#81A263]"
        style={{ left: "calc(3 * 30px)", top: "calc(1 * 30px)" }}
      />
    </div>
  );
};

export const Loader5 = () => {
  return (
    <div className="relative z-10 h-16 w-52">
      <div className="circle absolute left-[15%] size-[23px] origin-center animate-circle1 rounded-full border bg-zinc-900/60 dark:bg-white/60" />
      <div className="circle absolute left-[45%] size-[23px] origin-center animate-circle2 rounded-full border bg-zinc-900/60 dark:bg-white/60" />
      <div className="circle absolute right-[15%] size-[23px] origin-center animate-circle3 rounded-full border bg-zinc-900/60 dark:bg-white/60" />
      <div className="absolute left-[15%] top-[62px] h-px w-4 origin-center animate-shadow1 rounded-full bg-black/50 shadow blur-[1px] dark:bg-white/50" />
      <div className="absolute left-[45%] top-[62px] h-px w-4 origin-center animate-shadow2 rounded-full bg-black/50 shadow blur-[1px] dark:bg-white/50" />
      <div className="absolute right-[15%] top-[62px] h-px w-4 origin-center animate-shadow3 rounded-full bg-black/50 shadow blur-[1px] dark:bg-white/50" />
    </div>
  );
};

export const Loader6 = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="loader animate-dot1 absolute left-1/2 top-1/2 z-10 -ml-[80px] -mt-[50px] h-[100px] w-[160px] rounded-[5px] bg-[#1e3f57]" />
      <div className="loader z-11 animate-dot2 absolute left-1/2 top-1/2 -ml-[75px] -mt-[45px] h-[90px] w-[150px] rounded-[3px] bg-[#3c517d]" />
      <div className="loader z-12 animate-dot3 absolute left-1/2 top-1/2 -ml-[20px] mt-[50px] h-[20px] w-[40px] rounded-b-[5px] bg-[#6bb2cd]" />
    </div>
  );
};

export const Loader7 = () => {
  return (
    <div className="relative mx-auto h-[90px] w-[120px]">
      <div className="animate-loading-bounce absolute bottom-[30px] left-[50px] h-[30px] w-[30px] rounded-full bg-[#2a9d8f]" />
      <div className="animate-loading-step absolute right-0 top-0 h-[7px] w-[45px] rounded-[4px] shadow-[0_5px_0_#f2f2f2,-35px_50px_0_#f2f2f2,-70px_95px_0_#f2f2f2]" />
    </div>
  );
};
