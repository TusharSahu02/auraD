export const Loader1 = () => {
  return (
    <div className="relative w-10 h-10 transform rotate-[165deg]">
      <div className="before:content-[''] after:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-2 before:h-2 before:rounded-md before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-before8 after:absolute after:top-1/2 after:left-1/2 after:w-2 after:h-2 after:rounded-md after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-after6" />
    </div>
  );
};

export const Loader2 = () => {
  return (
    <div className="relative w-12 h-24 bg-black rounded-[25px] overflow-hidden">
      <div className="absolute top-0 w-5 h-5 bg-gradient-to-b from-pink-500 to-pink-300 rounded-full left-[15px] animate-drop" />
      <div className="absolute top-0 w-5 h-5 bg-gradient-to-b from-green-500 to-cyan-400 rounded-full left-1 animate-drop1" />
      <div className="absolute top-0 w-5 h-5 bg-gradient-to-b from-purple-600 to-pink-300 rounded-full left-[30px] animate-drop2" />
      <div className="absolute top-0 w-5 h-5 bg-gradient-to-b from-blue-600 to-cyan-400 rounded-full left-[20px] animate-drop3" />
    </div>
  );
};

export const Loader3 = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="h-5 w-5 rounded-full bg-[#b3d4fc] animate-pulse1 mr-2"></div>
      <div className="h-5 w-5 rounded-full bg-[#b3d4fc] animate-pulse2 mr-2"></div>
      <div className="h-5 w-5 rounded-full bg-[#b3d4fc] animate-pulse3 mr-2"></div>
      <div className="h-5 w-5 rounded-full bg-[#b3d4fc] animate-pulse4 mr-2"></div>
      <div className="h-5 w-5 rounded-full bg-[#b3d4fc] animate-pulse5"></div>
    </div>
  );
};

export const Loader4 = () => {
  return (
    <div className="flex justify-center items-center mx-auto my-10 w-[calc(3*30px+26px)] h-[calc(2*30px+26px)] relative">
      <div
        className="absolute w-[26px] h-[26px] bg-[#81A263] rounded-[2px] animate-square1"
        style={{ left: "calc(0 * 30px)", top: "calc(0 * 30px)" }}
      ></div>
      <div
        className="absolute w-[26px] h-[26px] bg-[#81A263] rounded-[2px] animate-square2"
        style={{ left: "calc(0 * 30px)", top: "calc(1 * 30px)" }}
      ></div>
      <div
        className="absolute w-[26px] h-[26px] bg-[#81A263] rounded-[2px] animate-square3"
        style={{ left: "calc(1 * 30px)", top: "calc(1 * 30px)" }}
      ></div>
      <div
        className="absolute w-[26px] h-[26px] bg-[#81A263] rounded-[2px] animate-square4"
        style={{ left: "calc(2 * 30px)", top: "calc(1 * 30px)" }}
      ></div>
      <div
        className="absolute w-[26px] h-[26px] bg-[#81A263] rounded-[2px] animate-square5"
        style={{ left: "calc(3 * 30px)", top: "calc(1 * 30px)" }}
      ></div>
    </div>
  );
};

export const Loader5 = () => {
  return (
    <div className="relative w-52 h-16 z-10">
      <div className="circle size-[23px] bg-zinc-900/60 border  absolute rounded-full left-[15%] origin-center animate-circle1" />
      <div className="circle size-[23px] bg-zinc-900/60 border  absolute rounded-full left-[45%] origin-center animate-circle2" />
      <div className="circle size-[23px] bg-zinc-900/60 border  absolute rounded-full right-[15%] origin-center animate-circle3" />
      <div className="shadow  bg-black/50 absolute rounded-full left-[15%] w-4 h-px top-[62px] origin-center blur-[1px] animate-shadow1" />
      <div className="shadow  bg-black/50 absolute rounded-full left-[45%] w-4 h-px top-[62px] origin-center blur-[1px] animate-shadow2" />
      <div className="shadow  bg-black/50 absolute rounded-full right-[15%] w-4 h-px top-[62px] origin-center blur-[1px] animate-shadow3" />
    </div>
  );
};

export const Loader6 = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <div className="loader absolute top-1/2 left-1/2 z-10 w-[160px] h-[100px] -ml-[80px] -mt-[50px] rounded-[5px] bg-[#1e3f57] animate-dot1"></div>
      <div className="loader absolute top-1/2 left-1/2 z-11 w-[150px] h-[90px] -ml-[75px] -mt-[45px] rounded-[3px] bg-[#3c517d] animate-dot2"></div>
      <div className="loader absolute top-1/2 left-1/2 z-12 w-[40px] h-[20px] mt-[50px] -ml-[20px] rounded-b-[5px] bg-[#6bb2cd] animate-dot3"></div>
    </div>
  );
};

export const Loader7 = () => {
  return (
    <div className="relative w-[120px] h-[90px] mx-auto">
      <div className="absolute bottom-[30px] left-[50px] h-[30px] w-[30px] rounded-full bg-[#2a9d8f] animate-loading-bounce"></div>
      <div className="absolute top-0 right-0 h-[7px] w-[45px] rounded-[4px] shadow-[0_5px_0_#f2f2f2,-35px_50px_0_#f2f2f2,-70px_95px_0_#f2f2f2] animate-loading-step"></div>
    </div>
  );
};
