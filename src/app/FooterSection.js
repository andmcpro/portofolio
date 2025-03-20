const FooterSection = ({ title, links }) => {
  return (
    <section className="flex flex-col gap-3 w-[262px] max-sm:w-full">
      <h2 className="mb-4 text-base font-bold text-stone-900">{title}</h2>
      <nav className="flex flex-col gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-base cursor-pointer text-stone-900 hover:underline"
          >
            {link}
          </a>
        ))}
      </nav>
    </section>
  );
};

export default FooterSection;
