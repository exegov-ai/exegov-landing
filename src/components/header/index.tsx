import Image from 'next/image';
import Bnp from '@/constants/svg/BNP.svg';
import Aragon from '@/constants/svg/aragon.svg';
import Fiserv from '@/constants/svg/Fiserv_logo.svg';
import TenClouds from '@/constants/svg/10clouds.svg';
import Orange from '@/constants/svg/Orange.svg';

function Header() {
  return (
    <header className="bg-white mb-0">
      <div className="max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-3xl mx-auto">
          <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-center leading-snug text-gray-800">
            Your First Step to Business Success Starts Here
          </h1>
          <p className="mt-10 text-gray-500 text-center text-xl lg:text-3xl">
            In the fast-paced world of startups, Exegov.ai provides affordable, personalized AI consulting to guide you
            every step of the way—delivering expert insights faster and at a fraction of the cost of traditional
            advisors. With tailored support in the key areas of running a business, we’re here to help your company
            thrive without the wait or high fees
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="mt-4 w-50">
          <p className="font-mono uppercase text-center font-medium text-sm text-gray-600">Trusted by</p>
          <div
            className={`
              grid
              sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5
              gap-20 justify-items-center items-center px-28 py-10 max-w-7xl
            `}
          >
            <div className="sm:col-span-2 md:col-span-2 lg:col-span-1">
              <div className="w-full">
                <Image src={Aragon} alt="Aragon logo" />
              </div>
            </div>
            <div className="sm:col-span-2 md:col-span-2 lg:col-span-1">
              <div className="w-full">
                <Image src={Bnp} alt="BNP logo" />
              </div>
            </div>
            <div className="sm:col-span-2 md:col-span-2 lg:col-span-1">
              <div className="w-full">
                <Image src={Fiserv} alt="Fiserv logo" />
              </div>
            </div>
            <div
              className={`
                flex items-center justify-center mx-auto
                sm:col-span-2 md:col-start-1 md:col-end-4 lg:col-span-1
              `}
            >
              <div className="w-full">
                <Image src={TenClouds} alt="TenClouds logo" />
              </div>
            </div>
            <div
              className={`
                flex items-center justify-center mx-auto
                sm:col-span-4 md:col-start-4 md:col-end-7 lg:col-span-1
              `}
            >
              <div className="w-1/2">
                <Image src={Orange} alt="Orange logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
