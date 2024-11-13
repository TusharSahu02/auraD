const Test = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <ChaleJaaBhosdike />
    </div>
  );
};

export default Test;

const ChaleJaaBhosdike = () => {
  return (
    <div className=" flex items-center justify-center gap-1 flex-col">
      <h1>Hey! you are on the wrong destination</h1>
      <p>
        head back to{" "}
        <a
          href="https://aurad.vercel.app"
          className=" underline underline-offset-2"
        >
          homepage&gt;&gt;
        </a>
      </p>
    </div>
  );
};
