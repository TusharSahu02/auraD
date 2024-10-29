import formatDateAndTime from "@/utils/fetchDateTime";
import { Battery, Signal, Wifi } from "lucide-react";

const Iphone = ({ children }: { children: React.ReactNode }) => {
  const { time, date } = formatDateAndTime();

  return (
    <div className="relative w-[355px] h-[712px] bg-black rounded-[55px] overflow-hidden shadow-xl border-[14px] border-gray-800">
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
        <div className="h-full flex items-center justify-center">
          {children}
        </div>

        {/* Lock Screen */}
        <div className="flex flex-col items-center mt-20 text-white">
          <div className="text-7xl font-thin">{time}</div>
          <div className="text-lg mt-2">{date}</div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
      </div>

      {/* Action Button */}
      <div className="absolute top-24 left-[-14px] w-3 h-10 bg-gray-400 rounded-l-md"></div>

      {/* Volume Buttons */}
      <div className="absolute top-32 left-[-14px] w-3 h-16 bg-gray-400 rounded-l-md"></div>
      <div className="absolute top-52 left-[-14px] w-3 h-16 bg-gray-400 rounded-l-md"></div>
    </div>
  );
};

export default Iphone;
