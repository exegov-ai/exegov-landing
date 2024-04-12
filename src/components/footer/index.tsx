import { tw } from 'twind';
import Facebook from '@/constants/svg/facebook.svg';
import Linkedin from '@/constants/svg/linkedin.svg';
import Twitter from '@/constants/svg/twitterx.svg';
import Github from '@/constants/svg/github.svg';
import { EXEGOV_BLUE } from '@/constants/values/colors';

function Footer() {
  return (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex items-center justify-between`)}>
        <div className={tw(`flex items-center`)}>
          <img className={tw(`h-12 w-12 mr-4`)} src="logo.svg" alt="logo" width={48} height={48} />
          <p className={tw(`text-4xl text-indigo-500 font-bold`)} style={{ color: EXEGOV_BLUE }}>
            Exegov.ai
          </p>
        </div>
        <div className={tw(`flex items-center`)}>
          <a href="https://www.facebook.com/your-facebook-page" className={tw(`ml-4`)} aria-label="fb">
            <Facebook />
          </a>
          <a href="https://www.linkedin.com/your-linkedin-page" className={tw(`ml-4`)} aria-label="linkedin">
            <Linkedin />
          </a>
          <a href="https://twitter.com/your-ct" className={tw(`ml-4`)} aria-label="x.com">
            <Twitter />
          </a>
          <a href="https://github.com/exegov-ai" className={tw(`ml-4`)} aria-label="GitHub">
            <Github />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
