import { Switch } from "@/components/ui/switch";
import { useSelectedOption } from "@/context/SelectedOptionContext";
import { useNavigate } from "react-router-dom";

const ToogleJsToNative = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const { selectedOption, setSelectedOption } = useSelectedOption();

  const toggleSwitch = () => {
    setSelectedOption(
      selectedOption === "react-js" ? "react-native" : "react-js"
    );
    setActive(!active);
    navigate(
      selectedOption === "react-js"
        ? "/docs/react-native/components/button"
        : "/docs/reactjs/components/button"
    );
  };
  return (
    <div className="flex gap-2 text-gray-600 mr-2 text-sm my-5">
      <p className={`${!active ? "text-white" : "text-gray-600"}`}>React JS</p>
      <Switch onCheckedChange={toggleSwitch} />
      <p className={` ${active ? "text-white" : "text-gray-600"}`}>
        React Native
      </p>
    </div>
  );
};

export default ToogleJsToNative;
