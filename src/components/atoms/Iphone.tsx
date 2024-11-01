import formatDateAndTime from "@/utils/fetchDateTime";
import { Battery, Signal, Wifi } from "lucide-react";

const Iphone = ({ children }: { children: React.ReactNode }) => {
  // const { time, date } = formatDateAndTime();
  const { time } = formatDateAndTime();

  return (
    <div className="relative">
      <div className="relative w-[355px] h-[712px] bg-black  rounded-[55px] overflow-hidden shadow-xl border-[14px] border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[138px] h-[30px] bg-black rounded-b-3xl z-20"></div>

        {/* Screen */}
        <div className="relative w-full h-full bg-zinc-900 bg-cover bg-center">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-4 pt-2 text-white text-sm">
            <div>{time}</div>
            <div className="flex items-center space-x-1">
              <Signal className="w-4 h-4" />
              <Wifi className="w-4 h-4" />
              <Battery className="w-6 h-4" />
            </div>
          </div>

          {/* render the component here */}
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {children}
          </div>

          {/* Lock Screen */}
          {/* <div className="flex flex-col items-center mt-20 text-white">
            <div className="text-7xl font-thin">{time}</div>
            <div className="text-lg mt-2">{date}</div>
          </div> */}

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="absolute top-52 z-50 -right-[2px] w-[2px] h-14 bg-gray-700 rounded-r-md"></div>
      <div className="absolute top-20 -right-[2px] z-50 w-[2px] h-[100px] bg-gray-700 rounded-r-md"></div>
    </div>
  );
};

export default Iphone;
