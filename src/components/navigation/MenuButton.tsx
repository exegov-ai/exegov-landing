'use client';

type TMenuButton = {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
};

function MenuButton({ toggleMenu, showMenu }: TMenuButton) {
  return (
    <button
      type="button"
      aria-controls="mobile-menu"
      aria-expanded={showMenu}
      aria-label={showMenu ? `Close menu` : `Open menu`}
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

export default MenuButton;
