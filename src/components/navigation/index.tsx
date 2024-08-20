'use client';

import { useState } from 'react';
import Button from '@/components/button';
import MenuButton from './MenuButton';
import MobileMenu from './MobileMenu';

export type TScrollToSection = (event: React.MouseEvent, sectionId: string) => void;

export type TLink = {
  label: string;
  href: string;
};

export const links = [
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

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const scrollToSection: TScrollToSection = (event, sectionId) => {
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
                {links.map((link: TLink) => (
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
              <a target="_blank" rel="noopener noreferrer">
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
