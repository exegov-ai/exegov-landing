import { tw } from 'twind';
import CoolItem from '@/components/cool-items';
import Check from '@/constants/svg/check.svg';

const securityFeatures = [
  {
    title: `Unmatched Security with AWS`,
    description: `AWS is a global leader in cloud computing, renowned for its robust, scalable,
     and secure infrastructure. By hosting Exegov.ai on AWS,
      we benefit from a network architected to protect your information, identities, applications, and devices.`,
    Icon: Check,
  },
  {
    title: `Comprehensive Compliance`,
    description: `AWS complies with the most stringent regulatory standards,
     ensuring that meets global security requirements. From GDPR to HIPAA,
      AWS&apos;s compliance enables us to protect your data according to international laws and regulations.`,
    Icon: Check,
  },
  {
    title: `Advanced Encryption`,
    description: `Your data is encrypted both in transit and at rest,
     using advanced encryption methods. AWS’s encryption mechanisms provide a secure barrier,
      safeguarding your information from unauthorized access.`,
    Icon: Check,
  },
  {
    title: `Continuous Monitoring and Protection`,
    description: `AWS’s infrastructure provides continuous monitoring and real-time protection
     against threats and vulnerabilities. 
     This proactive stance on security ensures that any potential risks are identified and mitigated swiftly,
      keeping your data safe 24/7.`,
    Icon: Check,
  },
  {
    title: `Reliability and Resilience`,
    description: `AWS’s global network of data centers offers unmatched reliability and redundancy.
     In the unlikely event of a system failure, your data remains secure and accessible,
      minimizing downtime and ensuring business continuity.`,
    Icon: Check,
  },
];

function SecuritySection() {
  return (
    <section id="security" className={tw(`bg-white pb-6`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
          <div className={tw(`mb-16 text-center`)}>
            <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Security</h4>
            <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
              At Exegov.ai , we understand that the foundation of trust is built on the assurance of security.
            </p>
          </div>
          <div className={tw(`flex flex-wrap my-12`)}>
            {securityFeatures.map((feature) => (
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

export default SecuritySection;
