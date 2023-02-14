import Image from "next/image";
import Logo from "public/images/desktop/logo.svg";
import { useState } from "react";
import IconHamburger from "public/images/mobile/icon-hamburger.svg";
import Link from "next/link";

const Links = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Service",
    href: "/",
  },
  {
    name: "Projects",
    href: "/",
  },
];

const MenuPopoverPadding = {
  top: 103,
  left: 26,
  right: 26,
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <nav className="nav">
        <div className="nav-logo-section">
          <Link href="/">
            <Image src={Logo} alt="Creative home" />
          </Link>
        </div>

        <div className="nav-mobile-menu-section">
          <button
            className="hamburger-btn"
            type="button"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
          >
            <Image src={IconHamburger} alt="Toggle menu" />
          </button>
          <nav
            className={`hamburger-content ${
              isMobileMenuOpen ? "open" : "closed"
            }`}
            style={{
              right: `calc(${MenuPopoverPadding.right}px)`,
            }}
          >
            {Links.map((link) => (
              <Link className="link" key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
            <button className="nav-call-button">Schedule a call</button>
          </nav>
        </div>

        <div className="nav-links-section">
          <ul className="nav-links">
            {Links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="nav-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="nav-call-button">Schedule a call</button>
        </div>
      </nav>
    </header>
  );
};
