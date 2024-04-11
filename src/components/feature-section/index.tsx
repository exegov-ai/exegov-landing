import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import CoolItem from '@/components/cool-items';

const features = [
  {
    title: `AI-Driven Insights:`,
    description: `Leverage the power of AI to gain actionable insights 
    tailored to your startup's unique challenges opportunities.`,
    Icon: Check,
  },
  {
    title: `Comprehensive Support`,
    description: `From strategy to product management,
     and finance to marketing, exegov.ai covers all the bases, ensuring you have the tools to succeed.`,
    Icon: Check,
  },
  {
    title: `Scalable Solutions`,
    description: `Our platform grows with you,
     providing the resources and flexibility you need at every stage of your startup journey.`,
    Icon: Check,
  },
];

function FeatureSection() {
  return (
    <section id="features" className={tw(`bg-white pb-6`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
          <div className={tw(`mb-16 text-center`)}>
            <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Features</h4>
            <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
              Why Chose exegov.ai?
            </p>
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

export default FeatureSection;
