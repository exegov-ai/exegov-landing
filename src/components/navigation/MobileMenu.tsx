'use client';

import { links, TLink, TScrollToSection } from '.';

const secondaryLinks = [
  {
    label: `Contact Us`,
    href: `/`,
  },
];

function MobileMenu({ scrollToSection }: { scrollToSection: TScrollToSection }) {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {links.map((link: TLink) => (
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
          {secondaryLinks.map((link: TLink) => (
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

export default MobileMenu;
