import Button from "@/components/reactjs/atoms/button/Button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/reactjs/atoms/Sheet";

const SheetDoc = () => {
  return (
    <div className="flex items-center justify-center h-[400px] border w-full">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline">Click Me</Button>
        </SheetTrigger>
        <SheetContent>grege</SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetDoc;
