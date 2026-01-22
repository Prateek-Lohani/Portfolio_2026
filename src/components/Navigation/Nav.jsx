const Nav = () => {
  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section>
      <nav className="z-[999] hidden md:flex flex items-center justify-center w-full">
        <ul className="flex px-10 py-4 text-white font-medium text-md bottom-6 fixed  rounded-4xl justify-center gap-12 border border-indigo-600">
          {items.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="group relative block h-[24px] overflow-hidden"
              >
                {/* default text */}
                <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-[120%]">
                  {label}
                </span>

                {/* hover text */}
                <span className="absolute left-0 top-0 block translate-y-[120%] transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
