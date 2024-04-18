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
            Empowering Your Startup Journey
          </h1>
          <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
            In the world of startups, every decision, every strategy, and every innovation counts. That&apos;s where
            exegov.ai steps in—your AI-powered companion designed to navigate the complexities of growing your business.
            From ideation to execution, exegov.ai equips you with the tools and insights you need to thrive in the
            competitive startup landscape.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
