import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Accueil" },
  { path: "/libraire", label: "Le Libraire" },
  { path: "/pepites", label: "Nos Pépites" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="border-b-[3px] border-foreground bg-card">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="font-heading text-2xl md:text-3xl text-foreground tracking-wide">
          La Petite Bulle Parisienne
        </Link>
        <ul className="flex gap-1 md:gap-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-heading text-lg md:text-xl px-3 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? "comic-button"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
