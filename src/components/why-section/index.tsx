import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import CoolItem from '@/components/cool-items';

const features = [
  {
    title: `Extensive Experience in Large Corporations and Growing Startups`,
    description: `Leverage our extensive experience working with both large corporations and emerging startups.
    We understand the unique challenges and opportunities at every stage of growth,
    enabling us to provide tailored solutions that drive success across diverse business landscapes.`,
    Icon: Check,
  },
  {
    title: `Advanced AI Support Beyond Traditional Solutions`,
    description: `Our platform is powered by advanced AI agents that surpass traditional AI tools like OpenAI.
    These sophisticated agents offer deep insights and powerful analytics,
    helping you make informed decisions and optimize your business operations more effectively than ever before.`,
    Icon: Check,
  },
  {
    title: `Security and Client-Centric Approach`,
    description: `At Exegov.ai, your security and satisfaction are our top priorities.
    We are committed to delivering client-centric solutions that ensure data privacy and align with your business goals.
    Our team works closely with you to provide a secure, personalized experience that meets your unique needs.`,
    Icon: Check,
  },
];

function WhySection() {
  return (
    <section id="features" className={tw(`bg-white pb-6`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
          <div className={tw(`mb-16 text-center`)}>
            <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Why Choose Exegov?</p>
          </div>
          <div className={tw(`flex flex-wrap my-12`)}>
            {features.map((feature) => (
              <CoolItem
                key={feature.title}
                title={feature.title}
                description={feature.description}
                Icon={feature.Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
