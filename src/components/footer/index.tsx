import { tw } from 'twind';
import Facebook from '@/constants/svg/facebook.svg';
import Linkedin from '@/constants/svg/linkedin.svg';
import Twitter from '@/constants/svg/twitterx.svg';
import Github from '@/constants/svg/github.svg';
import { EXEGOV_BLUE } from '@/constants/values/colors';
import FlexBrands from '@/components/flex-brands';
import Logo from '@/components/logo';

function Footer() {
  return (
    <footer id="contact" className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap items-center justify-between`)}>
        <Logo />
        <FlexBrands
          brands={{
            fill: EXEGOV_BLUE,
            items: [
              { icon: Facebook, url: `https://www.facebook.com/profile.php?id=61553821341662`, label: `fb` },
              { icon: Linkedin, url: `https://www.linkedin.com/company/99021822/admin/feed/posts/`, label: `linkedin` },
              { icon: Twitter, url: `https://twitter.com/exegov59086`, label: `x.com` },
              { icon: Github, url: `https://github.com/exegov-ai`, label: `GitHub` },
            ],
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
