import { useNumberTabState } from "@/hooks/reactjs/useTabState";
import {
  getIncrementDecrementNF,
  getIncrementLoaderNF,
} from "@/constants/reactjs/codeString.number";
import ManualNFDoc from "./ManualNFDoc";
import { SectionCommon } from "@/common/SectionCommon";
import IncrementLoaderNF from "@/components/reactjs/molecules/numberflow/IncrementLoaderNF";
import IncrementDecrementNF from "@/components/reactjs/molecules/numberflow/IncrementDecrementNF";
import NavigationButton from "@/components/reactjs/molecules/NavigationButton";

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
        <h2 className="mt-10 border-b pb-2 text-2xl font-medium">Manually</h2>
      </div>
      <div className="mt-5">
        <ManualNFDoc />
      </div>
      <NavigationButton
        previousTitle="Scroll Translate"
        nextTitle="Auth"
        previousLink="/docs/reactjs/components/scroll-translate"
        nextLink="/docs/reactjs/molecules/auth"
      />
    </>
  );
};

export default NumberFlowDoc;
