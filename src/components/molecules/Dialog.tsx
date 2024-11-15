import Button from "../atoms/button/Button";

const Dialog = () => {
  return (
    <div>
      <h1>Edit Profile</h1>
      <div className="p-3">
        <div className="  flex gap-4 p-2 items-center">
          <div className="  w-[25%] text-end">Name</div>
          <div className=" w-full">
            <input
              type="text"
              className="w-3/4 bg-transparent border border-white/10 rounded-lg py-1 px-2"
            />
          </div>
        </div>
        <div className="  flex gap-4 p-2 items-center">
          <div className="  w-[25%] text-end">username</div>
          <div className=" w-full">
            <input
              type="text"
              className="w-3/4 bg-transparent border border-white/10 rounded-lg py-1 px-2"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-5">
        <Button variant="outline">Submit</Button>
      </div>
    </div>
  );
};

export default Dialog;
