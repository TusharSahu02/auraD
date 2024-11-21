import { SectionCommon } from "@/common/SectionCommon";
import MysteriousText from "@/components/reactjs/atoms/text/MysteriousText";
import NavigationButton from "@/components/reactjs/molecules/NavigationButton";
import { getMysteriousTextCodeString } from "@/constants/reactjs/codeString.number";
import { useAnimatedNumberTabState } from "@/hooks/reactjs/useTabState";

const AnimatedTextDoc = () => {
  const { show: animatedNumberShow, toggleTab } = useAnimatedNumberTabState();

  const sections = [
    {
      title: "Mysterious Blur Fade",
      key: "mysteriousText" as const,
      component: MysteriousText,
      codeString: getMysteriousTextCodeString(),
    },
    // {
    //   title: "Mysterious Blur Fade",
    //   key: "infiniteTextDemo" as const,
    //   component: InfiniteTextDemo,
    //   codeString: getMysteriousTextCodeString(),
    // },
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
          show={animatedNumberShow[key]}
          onToggle={() => toggleTab(key)}
          codeString={codeString}
          Component={component}
        />
      ))}
      {/* <div>
        <h2 className="font-medium mt-10 border-b pb-2 text-2xl">Manually</h2>
      </div> */}
      {/* <ManualNFDoc /> */}
      <NavigationButton
        previousTitle="Number Flow"
        nextTitle="Auth"
        previousLink="/docs/reactjs/text/number-flow"
        nextLink="/docs/reactjs/molecules/auth"
      />
    </>
  );
};

export default AnimatedTextDoc;
