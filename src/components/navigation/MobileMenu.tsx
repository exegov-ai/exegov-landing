'use client';

import { links, TLink, TScrollToSection } from '.';

const secondaryLinks = [
  {
    label: `Contact Us`,
    href: `contact-us`,
  },
];

function MobileMenu({ scrollToSection }: { scrollToSection: TScrollToSection }) {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {links.map((link: TLink) => (
          <button
            type="button"
            onClick={(event) => scrollToSection(event, link.href)}
            className="text-gray-500 block px-3 py-2 text-base font-medium"
            key={link.label}
          >
            {link.label}
          </button>
        ))}
      </div>
      <div className="pt-4 pb-3 border-t border-gray-400">
        <div className="px-2 space-y-1">
          {secondaryLinks.map((link: TLink) => (
            <button
              type="button"
              onClick={(event) => scrollToSection(event, link.href)}
              key={`mobile-${link.label}`}
              className="block px-3 py-2 text-base font-medium text-gray-500"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
