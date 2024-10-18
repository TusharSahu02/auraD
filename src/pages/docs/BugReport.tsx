const BugReport = () => {
  return (
    <div className=" h-full">
      <h1 className=" text-center text-gray-300 ml-1">Report Bug</h1>
      <textarea
        name=""
        id=""
        autoFocus
        placeholder="Describe the bug"
        className="w-full  bg-transparent p-4 border border-gray-400/10 h-[250px] mt-4 resize-none rounded-lg"
      ></textarea>
    </div>
  );
};

export default BugReport;
