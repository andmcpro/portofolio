const Navigation = () => {
  return (
    <header className="flex items-center p-4 border-b border-solid bg-stone-50 border-b-stone-900 border-b-opacity-10">
      <nav className="flex gap-2 ml-auto max-sm:hidden">
        {[
          "Products",
          "Solutions",
          "Community",
          "Resources",
          "Pricing",
          "Contact",
        ].map((item) => (
          <button
            key={item}
            className="p-2 text-base rounded cursor-pointer text-stone-900 hover:bg-stone-100"
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
