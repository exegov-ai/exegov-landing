import { tw } from 'twind';
import Facebook from '@/constants/svg/facebook.svg';
import Linkedin from '@/constants/svg/linkedin.svg';
import Twitter from '@/constants/svg/twitterx.svg';
import Github from '@/constants/svg/github.svg';

function Footer() {
  return (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
        <div className={tw(`mb-14 flex items-center w-full`)}>
          <img className={tw(`h-12 w-12 mr-4`)} src="logo.svg" alt="logo" width={48} height={48} />
          <p className={tw(`text-4xl text-indigo-500 font-bold`)} style={{ color: `#4e7a9d` }}>
            Exegov.ai
          </p>
        </div>
      </div>
      <div className={tw(`ml-auto flex items-center`)}>
        <a href="https://www.facebook.com/your-facebook-page" className={tw(`ml-4`)} aria-label="fb">
          <Facebook width={24} height={24} />
        </a>
        <a href="https://www.linkedin.com/your-linkedin-page" className={tw(`ml-4`)} aria-label="linkedin">
          <Linkedin width={24} height={24} />
        </a>
        <a href="https://twitter.com/your-ct" className={tw(`ml-4`)} aria-label="x.com">
          <Twitter width={24} height={24} />
        </a>
        <a href="https://github.com/exegov-ai" className={tw(`ml-4`)} aria-label="GitHub">
          <Github width={24} height={24} />
        </a>
      </div>
      {` `}
    </footer>
  );
}

export default Footer;
