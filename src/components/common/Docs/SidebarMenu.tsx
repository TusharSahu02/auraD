const SidebarMenu = ({
  setShowSideBar,
}: {
  setShowSideBar: (show: boolean) => void;
}) => {
  return (
    <div className="absolute top-0 right-0 bg-red-400 w-[75%] h-screen">
      <h1
        className="mt-5 ml-5 cursor-pointer"
        onClick={() => {
          setShowSideBar(false);
        }}
      >
        close
      </h1>
      <h1 className="mt-20">close</h1>
    </div>
  );
};

export default SidebarMenu;
