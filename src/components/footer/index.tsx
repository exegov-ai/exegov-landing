import { tw } from 'twind';
import Facebook from '@/constants/svg/facebook.svg';
import Linkedin from '@/constants/svg/linkedin.svg';
import Twitter from '@/constants/svg/twitterx.svg';
import Github from '@/constants/svg/github.svg';
import { EXEGOV_BLUE } from '@/constants/values/colors';
import FlexBrands from '@/components/flex-brands';

function Footer() {
  return (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap items-center justify-between`)}>
        <div className={tw(`flex items-center mb-4 lg:mb-0`)}>
          <img className={tw(`h-12 w-12 mr-4`)} src="logo.svg" alt="logo" width={48} height={48} />
          <p className={tw(`text-4xl text-indigo-500 font-bold`)} style={{ color: EXEGOV_BLUE }}>
            Exegov.ai
          </p>
        </div>
        <FlexBrands
          brands={{
            fill: EXEGOV_BLUE,
            items: [
              { icon: Facebook, url: `https://www.facebook.com/your-facebook-page`, label: `fb` },
              { icon: Linkedin, url: `https://www.linkedin.com/your-linkedin-page`, label: `linkedin` },
              { icon: Twitter, url: `https://twitter.com/your-ct`, label: `x.com` },
              { icon: Github, url: `https://github.com/exegov-ai`, label: `GitHub` },
            ],
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
