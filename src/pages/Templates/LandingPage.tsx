const LandingPage = () => {
  return (
    <div className="grid xl:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-4">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="h-[320px] p-2 rounded-lg border dark:border-white/10 cursor-pointer border-gray-300 overflow-hidden"
        ></div>
      ))}
    </div>
  );
};

export default LandingPage;
