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
