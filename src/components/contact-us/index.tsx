import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

type ContactFeature = {
  header: string;
  description: string;
};

const features: ContactFeature[] = [
  {
    header: `Feedback and Suggestions:`,
    description: `Share your thoughts on what you love about   and where we can improve. 
    Your suggestions fuel our innovation, helping us tailor our platform to better suit your needs.`,
  },
  {
    header: `Report Bugs:`,
    description: `Stumbled upon a glitch? Let us know!
     Our dedicated team is quick to address and resolve any issues, ensuring our platform runs smoothly for you.`,
  },
  {
    header: `General Inquiries:`,
    description: `Have questions or need more information about our features?
     Our knowledgeable team is ready to provide you with the answers and support you need.`,
  },
];

function ContactSection() {
  return (
    <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
      <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
        <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
          <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
            <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>Get in Touch with Exegov.ai</h2>
            <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>
              At Exegov.ai , we believe in the power of collaboration and open communication. Whether you&apos;re
              navigating the early stages of your startup journey or scaling new heights, your insights and experiences
              are invaluable to us. We&apos;re committed to creating a platform that not only meets but exceeds your
              expectations. That&apos;s why we&apos;re always here to listen.
            </p>
            <div className={tw(`mt-8`)}>
              <div className={tw(`flex items-center`)}>
                <div>
                  <h3
                    className={tw(
                      `flex-shrink-0 pr-4 text-sm leading-5
          tracking-wider font-semibold uppercase text-indigo-600`,
                    )}
                  >
                    We Want to Hear From You
                  </h3>
                </div>
                <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
              </div>
              <div>
                <p className={tw(`mt-4 text-sm text-gray-700`)}>
                  Have feedback or suggestions? Encountered a bug within our tool? Or simply have a question about how
                  {` `}
                  <a href="http://Exegov.ai" className={tw(`text-indigo-600 underline`)}>
                    Exegov.ai
                  </a>
                  {` `}
                  can transform your startup&apos;s operations? Whatever it is, we’re all ears. Your input is critical
                  helping us enhance our platform and services. Here’s how you can reach out:
                </p>
              </div>
              <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
                {features.map((feature) => (
                  <li className={tw(`flex items-start lg:col-span-1`)} key={feature.header}>
                    <div className={tw(`flex-shrink-0`)}>
                      <Check className={tw(`h-8 w-8 mr-3 mb-1`)} />
                    </div>
                    <div>
                      <h4 className={tw(`font-bold`)}>{feature.header}</h4>
                      <p className={tw(`text-sm text-gray-600`)}>{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={tw(
              `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
            )}
          >
            <p className={tw(`text-lg font-medium text-gray-800`)}>If you order now...</p>
            <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`)}>
              $99/mo
            </div>
            <Button primary modifier="mt-6">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
