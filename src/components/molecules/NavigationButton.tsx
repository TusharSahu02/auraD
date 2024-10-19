import Button from "../atoms/Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

type Props = {
  previousLink: string;
  nextLink: string;
  previousTitle: string;
  nextTitle: string;
};

const NavigationButton = ({
  previousLink,
  nextLink,
  previousTitle,
  nextTitle,
}: Props) => {
  return (
    <div className="flex items-center justify-between mt-10">
      <Link to={previousLink}>
        <Button variant="outline">
          <span className="flex items-center gap-1">
            <FiChevronLeft />
            {previousTitle}
          </span>
        </Button>
      </Link>
      <Link to={nextLink}>
        <Button variant="outline">
          <span className="flex items-center gap-1">
            {nextTitle}
            <FiChevronRight />
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default NavigationButton;
