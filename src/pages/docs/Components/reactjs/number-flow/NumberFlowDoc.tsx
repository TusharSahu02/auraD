import NavigationButton from "@/components/molecules/NavigationButton";
import IncrementDecrementNF from "./IncrementDecrementNF";
import IncrementLoaderNF from "./IncrementLoaderNF";
import { SectionCommon } from "@/components/common/SectionCommon";
import { useNumberTabState } from "@/hooks/reactjs/useTabState";
import {
  getIncrementDecrementNF,
  getIncrementLoaderNF,
} from "@/constants/reactjs/codeString.number";
import ManualNFDoc from "./ManualNFDoc";

const NumberFlowDoc = () => {
  const { show: numberShow, toggleTab } = useNumberTabState();

  const sections = [
    {
      title: "Loader",
      key: "incrementLoaderNF" as const,
      component: IncrementLoaderNF,
      codeString: getIncrementLoaderNF(),
    },
    {
      title: "Increment Decrement",
      key: "incrementDecrementNF" as const,
      component: IncrementDecrementNF,
      codeString: getIncrementDecrementNF(),
    },
  ];
  return (
    <>
      <p className="text-gray-500">
        Displays a animated robbin hood style number flow
      </p>
      {sections.map(({ title, key, component, codeString }) => (
        <SectionCommon
          key={key}
          id={key}
          title={title}
          show={numberShow[key]}
          onToggle={() => toggleTab(key)}
          codeString={codeString}
          Component={component}
        />
      ))}
      <div>
        <h2 className="font-medium mt-10 border-b pb-2 text-2xl">
          Manually
        </h2>
      </div>
      <ManualNFDoc />
      <NavigationButton
        previousTitle="Ripple"
        nextTitle="Auth"
        previousLink="/docs/reactjs/components/ripple"
        nextLink="/docs/reactjs/molecules/auth"
      />
    </>
  );
};

export default NumberFlowDoc;
