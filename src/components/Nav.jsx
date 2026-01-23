import { portfolioData } from "../data/portfolioData";

const Nav = () => {
  return (
    <section>
      <nav className="z-[99] hidden md:flex flex fixed items-center justify-center w-full">
        <ul className="flex px-10 py-4 text-white font-medium text-md bottom-6 fixed rounded-4xl justify-center gap-12 
        bg-black/40 backdrop-blur-md backdrop-saturate-150
        border border-[#4C36EF] shadow-md shadow-indigo-500/50
        
        ">
          {portfolioData.navigation.map(({ label, href }) => (
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
                <span className="underline absolute left-0 top-0 block translate-y-[120%] transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0 text-indigo-500">
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
