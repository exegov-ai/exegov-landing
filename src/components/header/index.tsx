import { tw, css } from 'twind/css';
import Bnp from '@/constants/svg/BNP.svg';
import Aragon from '@/constants/svg/aragon.svg';
import Fiserv from '@/constants/svg/Fiserv_logo.svg';
import TenClouds from '@/constants/svg/10clouds.svg';
import Orange from '@/constants/svg/Orange.svg';

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
      <div className={tw(`flex justify-center w-full`)}>
        <div className={tw(`mt-4 w-50`)}>
          <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Trusted by</p>
          <div className={tw(`grid grid-cols-2 gap-20 justify-items-center align-items-center`)}>
            <Aragon className={tw(`h-30`)} />
            <Bnp className={tw(`h-30`)} />
            <Fiserv className={tw(`h-30`)} />
            <TenClouds className={tw(`h-30`)} />
            <Orange className={tw(`h-30`)} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
