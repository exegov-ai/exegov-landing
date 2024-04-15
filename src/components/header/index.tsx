import { tw, css } from 'twind/css';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

function Header() {
  return (
    <header className={tw(headerStyle)}>
      <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
        <div className={tw(`max-w-xl mx-auto`)}>
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
