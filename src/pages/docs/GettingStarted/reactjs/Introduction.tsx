import Button from "@/components/atoms/Button";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div>
      <h1 className="text-3xl font-black mb-4">Introduction</h1>

      <div>
        <div className="mb-5 text-gray-400">
          <p>Beautifully designed, reusable components at your fingertips.</p>
        </div>

        <p className="w-full mb-5 text-gray-400">
          No need to worry about dependencies or installations. These{" "}
          <strong className="text-white">
            {" "}
            accessible, customizable, and open-source components{" "}
          </strong>
          are ready to be copied and pasted directly into your apps—whether
          you're building in React or React Native.
        </p>

        <p className="w-full mb-5 text-gray-400">
          This is
          <strong className="text-white">
            {" "}
            NOT a traditional component library.{" "}
          </strong>
          Instead, it's a collection of flexible, pre-built components you can
          freely integrate into your projects. No npm install required.
        </p>
        <h3 className="text-xl font-bold">What does that mean?</h3>
        <p className="w-full mb-5 text-gray-400">
          It means you’re not tied to any external libraries or packages. Simply
          pick the components you want, copy the code into your project, and
          customize them however you like.
        </p>

        <h3 className="text-xl font-bold">You own the code.</h3>
        <p className="w-full mb-5 text-gray-400">
          Use these components as inspiration, or as a foundation, for building
          your own libraries, all while retaining full control over how you use
          and modify the components.
        </p>

        <div className="flex justify-center items-center">
          <p className=" font-bold text-xl">( Design. Develop. Deploy. )</p>
        </div>

        <div className="flex justify-end">
          <Link to={"/docs/reactjs/installation"}>
            <Button
              variant="outline"
              icon={<FiChevronRight />}
              iconPosition="right"
            >
              Installation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
