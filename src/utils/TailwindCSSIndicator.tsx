const TailwindCSSIndicator = () => {
  if (
    import.meta.env.VITE_APP_ENV === "production" ||
    !import.meta.env.VITE_APP_ENV
  )
    return null;

  return (
    <div className="absolute bottom-0 left-0 size-[40px]  z-9999 rounded-full bg-gray-600 flex items-center justify-center">
      <div className="md:hidden">sm</div>
      <div className="md:block lg:hidden hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block">xl</div>
    </div>
  );
};

export default TailwindCSSIndicator;
