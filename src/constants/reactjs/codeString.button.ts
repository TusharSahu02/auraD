export const getTelegramButtonCode = () => {
  return `
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
`;
};

export const getSaveHoverAnimationButton = () => {
  return `
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
`;
};
