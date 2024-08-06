import { tw, css } from 'twind/css';

const headerStyle = css`
  background-color: #ffffff;
  margin-bottom: 0;
`;

function Header() {
  return (
    <header className={tw(headerStyle)}>
      <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
        <div className={tw(`max-w-xl lg:max-w-3xl mx-auto`)}>
          <h1
            className={tw(
              `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`,
            )}
          >
            Your Trusted Partner in Business Growth
          </h1>
          <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
            Combining traditional consulting expertise with cutting-edge AI technology to support your growth and
            success at every stage.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
