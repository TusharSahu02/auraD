import { Link } from "react-router-dom";
import Button from "../components/atoms/Button";

const Home = () => {
  return (
    <div className="flex items-center justify-center text-black w-full h-screen">
      <Link to="/docs/components/button">
        <Button>Go to Components</Button>
      </Link>
    </div>
  );
};

export default Home;
