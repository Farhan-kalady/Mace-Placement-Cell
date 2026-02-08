import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Statistics", href: "#stats" },
  { label: "Recruiters", href: "#recruiters" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4"
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold rounded">
            M
          </div>
          <span className="font-serif text-xl font-semibold">
            MACE <span className="text-gray-400">Placement Cell</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="uppercase text-xs tracking-[0.2em] text-gray-300 hover:text-white transition relative group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all"></span>
            </a>
          ))}

          <a
            href="/login"
            className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2"
          >
            Student Login <ArrowUpRight size={16} />
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-b border-white/10 p-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-lg border-b border-white/10 pb-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#login"
            className="block mt-4 bg-white text-black text-center py-3 font-bold rounded"
          >
            Student Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
