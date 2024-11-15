export const TelegramButton = () => {
  return (
    <button className="font-inherit text-lg bg-gradient-to-b from-[#4dc7d9] to-[#66a6ff] text-white px-5 py-3 flex items-center justify-center border-none rounded-[25px] shadow-[0_5px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:transform hover:-translate-y-[3px] hover:shadow-[0_8px_15px_rgba(0,0,0,0.3)] active:scale-95 active:shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white/20 mr-2 transition-all duration-300 hover:bg-white/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[18px] h-[18px] fill-white transition-all duration-300 group-hover:rotate-45"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            />
          </svg>
        </div>
      </div>
      <span className="block ml-[0.4em] transition-all duration-300">Send</span>
    </button>
  );
};

export const SaveHoverAnimationButton = () => {
  return (
    <button className="group w-[100px] h-[40px] rounded-[40px] border border-white/35 bg-[#0c0c0c] flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden hover:scale-95 active:scale-95">
      <span className="w-[30px] h-[30px] bg-gradient-to-b from-[#ff88ff] to-[#ac46ff] rounded-[50px] flex items-center justify-center overflow-hidden z-[2] transition-all duration-300 group-hover:w-[90px]">
        <svg viewBox="0 0 384 512" height="0.9em" className="rounded-[1px]">
          <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
        </svg>
      </span>
      <p className="h-full w-[60px] flex items-center justify-center text-white z-[1] transition-all duration-300 text-[1.04em] group-hover:translate-x-[10px] group-hover:w-0 group-hover:text-[0px]">
        Save
      </p>
    </button>
  );
};

export const GoldShineOnHoverAnimButton = () => {
  return (
    <button className="w-[140px] h-[40px] border-none rounded-[10px] bg-gradient-to-r from-[#77530a] via-[#ffd277] via-[#77530a] via-[#77530a] via-[#ffd277] to-[#77530a] bg-[length:250%] bg-left text-[#ffd277] relative flex items-center justify-center cursor-pointer transition-all duration-1000 overflow-hidden hover:bg-right active:scale-95">
      <span className="absolute w-[97%] h-[90%] rounded-[8px] bg-black/[0.842] flex items-center justify-center text-[#ffd277] transition-all duration-1000">
        SUBSCRIBE
      </span>
    </button>
  );
};

export const HoverWithContentSlideOutButton = () => {
  return (
    <button className="group font-inherit text-xl bg-[#4169e1] text-white py-[0.7em] px-[1em] pl-[0.9em] flex items-center border-none rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer hover:transform active:scale-95">
      <div className="svg-wrapper-1">
        <div className="svg-wrapper group-hover:animate-fly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="block transform-origin-center transition-transform duration-300 ease-in-out group-hover:translate-x-[1.2em] group-hover:rotate-45 group-hover:scale-110"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            />
          </svg>
        </div>
      </div>
      <span className="block ml-[0.3em] transition-all duration-300 ease-in-out group-hover:translate-x-[5em]">
        Send
      </span>
    </button>
  );
};

export const PremiumUnlockButton = () => {
  return (
    <button
      className="w-fit flex gap-[0.4rem] px-[1.1em] py-[0.8em] font-bold rounded-[30px] cursor-pointer text-white border-none
        text-shadow-[2px_2px_3px_rgba(136,0,136,0.5)]
        bg-gradient-to-r from-[#880088] via-[#aa2068] via-[#cc3f47] via-[#de6f3d] via-[#f09f33] via-[#de6f3d] via-[#cc3f47] via-[#aa2068] to-[#880088]
        bg-[length:300%] bg-left hover:bg-[length:320%] hover:bg-right
        transition-[background] duration-300 ease"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 24"
        className="w-[23px] fill-[#f09f33] transition-all duration-300 ease hover:fill-white"
      >
        <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z" />
      </svg>
      Unlock Pro
    </button>
  );
};

export const BackToTopButtonWithAnimation = () => {
  return (
    <button
      className="group w-[50px] h-[50px] rounded-full bg-[rgb(20,20,20)] border-none font-semibold 
  flex items-center justify-center shadow-[0px_0px_0px_4px_rgba(180,160,255,0.253)]
  cursor-pointer duration-300 overflow-hidden relative
  hover:w-[140px] hover:rounded-[50px] hover:bg-[rgb(181,160,255)]"
    >
      <svg
        className="w-[12px] transform transition-all duration-300 group-hover:-translate-y-[200%]"
        viewBox="0 0 384 512"
      >
        <path
          className="fill-white"
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
      <span
        className="absolute -bottom-[20px] text-white text-[0px] transition-all duration-300
    group-hover:text-[13px] group-hover:bottom-[15px]"
      >
        Back to Top
      </span>
    </button>
  );
};

export const RotateOnHoverSocialBtn = () => {
  return (
    <div className="inline-block relative z-0">
      <button className="group w-[45px] h-[45px] flex items-center justify-center border-none bg-transparent relative rounded-[7px] cursor-pointer transition-all duration-300">
        <span className="w-full h-full flex items-center justify-center bg-transparent backdrop-blur-[4px] tracking-[0.8px] rounded-[10px] transition-all duration-300 border border-[rgba(156,156,156,0.466)] hover:bg-[rgba(156,156,156,0.466)]">
          <svg
            fill="white"
            className="h-[1.5em]"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </span>
        <span className="absolute w-full h-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] -z-10 rounded-[9px] pointer-events-none transition-all duration-300 group-hover:rotate-[35deg] origin-bottom"></span>
      </button>
    </div>
  );
};

export const AmoungUsPlayButton = () => {
  return (
    <button
      className="flex items-center justify-center gap-2.5 px-2.5 text-white 
        uppercase cursor-pointer border-2 border-black tracking-wider font-semibold text-[17px] 
        bg-[#fdd835] rounded-[50px] relative overflow-hidden transition-all duration-500 ease-in-out
        active:scale-90 active:duration-100 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        className="w-9 h-9 transition-all duration-500 ease-in-out z-[2] origin-left
          group-hover:scale-[3] group-hover:translate-x-[50%]"
      >
        <rect width={36} height={36} x={0} y={0} fill="#fdd835" />
        <path
          fill="#e53935"
          d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
        />
        <path
          fill="#b71c1c"
          d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
        />
        <path
          fill="#212121"
          d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
        />
        <path
          fill="#01579b"
          d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
        />
        <path
          fill="#212121"
          d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
        />
        <path
          fill="#81d4fa"
          d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
        />
        <path
          fill="#212121"
          d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
        />
        <path
          fill="#e1f5fe"
          d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
        />
      </svg>
      <span
        className="absolute left-0 -translate-x-full transition-all duration-500 ease-in-out z-[2]
          group-hover:translate-x-[10px] group-hover:delay-300"
      >
        now!
      </span>
      <span
        className="transition-all duration-500 ease-in-out delay-300
          group-hover:translate-x-[200%] group-hover:delay-300"
      >
        play
      </span>
    </button>
  );
};

export const MacBookCommandKeyBoardBtn = () => {
  return (
    <button
      className="flex flex-col items-end justify-between bg-black text-white text-[13px]
           border border-black/10 pb-2 h-[65px] p-3 rounded-[15px_15px_12px_12px] cursor-pointer
           will-change-transform transition-all duration-100 ease-in-out select-none
           bg-gradient-to-r from-black/80 to-transparent
           bg-gradient-to-b from-black/80 to-transparent bg-bottom-right bg-no-repeat
           shadow-[inset_-4px_-10px_0px_rgba(255,255,255,0.4),inset_-4px_-8px_0px_rgba(0,0,0,0.3),0px_2px_1px_rgba(0,0,0,0.3),0px_2px_1px_rgba(255,255,255,0.1)]
           transform perspective-[70px] rotate-x-[5deg] rotate-y-0
           hover:shadow-[inset_-4px_-8px_0px_rgba(255,255,255,0.2),inset_-4px_-6px_0px_rgba(0,0,0,0.8),0px_1px_0px_rgba(0,0,0,0.9),0px_1px_0px_rgba(255,255,255,0.2)]
           active:transform active:perspective-[80px] active:rotate-x-[5deg] active:rotate-y-[1deg] active:translate-y-[3px] active:scale-[0.96]
           active:h-[64px] active:border-[0.25px] active:border-black/20
           focus:outline-none
           before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r
           before:from-black/80 before:to-transparent before:bg-bottom-right
           before:bg-no-repeat before:-z-10 before:rounded-[15px]
           after:content-[''] after:absolute after:inset-0
           after:bg-gradient-to-b after:from-white/20 after:to-black/50
           after:-z-10 after:rounded-[15px]
           after:shadow-[inset_4px_0px_0px_rgba(255,255,255,0.1),inset_4px_-8px_0px_rgba(0,0,0,0.3)]
           active:after:bg-gradient-to-b active:after:from-black/50 active:after:to-white/20
           active:before:content-[''] active:before:block active:before:absolute
           active:before:top-[5%] active:before:left-[20%] active:before:w-[50%]
           active:before:h-[80%] active:before:bg-white/10 active:before:animate-overlay
           active:before:pointer-events-none"
    >
      <svg
        stroke="#ffffff"
        xmlSpace="preserve"
        viewBox="0 0 80 80"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        id="Capa_1"
        version="1.1"
        fill="#ffffff"
        className="w-[15px] h-[15px]"
      >
        <path d="M64,48L64,48h-8V32h8c8.836,0,16-7.164,16-16S72.836,0,64,0c-8.837,0-16,7.164-16,16v8H32v-8c0-8.836-7.164-16-16-16 S0,7.164,0,16s7.164,16,16,16h8v16h-8l0,0l0,0C7.164,48,0,55.164,0,64s7.164,16,16,16c8.837,0,16-7.164,16-16l0,0v-8h16v7.98 c0,0.008-0.001,0.014-0.001,0.02c0,8.836,7.164,16,16,16s16-7.164,16-16S72.836,48.002,64,48z M64,8c4.418,0,8,3.582,8,8 s-3.582,8-8,8h-8v-8C56,11.582,59.582,8,64,8z M8,16c0-4.418,3.582-8,8-8s8,3.582,8,8v8h-8C11.582,24,8,20.417,8,16z M16,72 c-4.418,0-8-3.582-8-8s3.582-8,8-8l0,0h8v8C24,68.418,20.418,72,16,72z M32,48V32h16v16H32z M64,72c-4.418,0-8-3.582-8-8l0,0v-8 h7.999c4.418,0,8,3.582,8,8S68.418,72,64,72z"></path>
      </svg>
      command
    </button>
  );
};
