import { useState } from 'react';
import Button from '@/components/button';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type ScrollToSection = (event: React.MouseEvent, sectionId: string) => void;

type Link = {
  label: string;
  href: string;
};

const loginUrl = `https://app.exegov.ai/users/sign_in`;
const signUpUrl = `https://app.exegov.ai/users/sign_up`;

const links = [
  {
    label: `Services`,
    href: `services`,
  },
  {
    label: `Why`,
    href: `why`,
  },
  {
    label: `Contacts us`,
    href: `contact`,
  },
];

const secondaryLinks = [
  {
    label: `Log in`,
    href: loginUrl,
  },
  {
    label: `Get Started`,
    href: signUpUrl,
  },
];

function MenuButton({ toggleMenu, showMenu }: IMenuButton) {
  return (
    <button
      type="button"
      aria-controls="mobile-menu"
      aria-expanded={showMenu}
      onClick={toggleMenu}
      className="p-2 text-gray-400"
    >
      <span className="sr-only">Open menu</span>
      {showMenu ? (
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          width={24}
          height={24}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          width={24}
          height={24}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  );
}

function MobileMenu({ scrollToSection }: { scrollToSection: ScrollToSection }) {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {links.map((link: Link) => (
          <a
            href={link.href}
            onClick={(event) => scrollToSection(event, link.href)}
            className="text-gray-500 block px-3 py-2 text-base font-medium"
            key={link.label}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="pt-4 pb-3 border-t border-gray-400">
        <div className="px-2 space-y-1">
          {secondaryLinks.map((link: Link) => (
            <a
              key={`mobile-${link.label}`}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const scrollToSection: ScrollToSection = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: `smooth` });
  };
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src="logo.svg" alt="logo" width={48} height={48} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link: Link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(event) => scrollToSection(event, link.href)}
                    className="text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                <Button modifier="border-0 mr-2">Log in</Button>
              </a>
              <a href={signUpUrl} target="_blank" rel="noopener noreferrer">
                <Button primary>Get started</Button>
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu scrollToSection={scrollToSection} /> : null}
      {` `}
    </nav>
  );
}

export default Navigation;
