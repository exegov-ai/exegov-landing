import React from 'react';
import Page from '@/components/page';
import { NextSeo } from 'next-seo';
import { tw } from 'twind';

export default function Security() {
  return (
    <Page>
      <NextSeo title="Security - Exegov.ai" />
      <header className={tw(`bg-white min-h-screen pt-16`)}>
        <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
          <h1
            className={tw(
              `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`,
            )}
          >
            🛡️ Security 🛡️
          </h1>
          <div className={tw(`max-w-xl mx-auto`)}>
            <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
              At{` `}
              <a href="http://Exegov.ai" className={tw(`text-indigo-600 underline`)}>
                Exegov.ai
              </a>
              , we understand that the foundation of trust is built on the assurance of security. Our commitment to
              protecting your information is paramount. That&apos;s why we&apos;ve chosen Amazon Web Services (AWS) as
              our cloud infrastructure partner, leveraging their world-class security standards to ensure your data is
              always safe with us.
            </p>
          </div>
          <h2
            className={tw(
              `font-sans font-bold text-2xl md:text-3xl lg:text-6xl text-center
                             leading-snug text-gray-800 mt-8`,
            )}
          >
            Unmatched Security with AWS
          </h2>
          <div className={tw(`max-w-xl mx-auto`)}>
            <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
              AWS is a global leader in cloud computing, renowned for its robust, scalable, and secure infrastructure.
              By hosting Exegov.ai on AWS, we benefit from a network architected to protect your information,
              identities, applications, and devices. Here’s how AWS security standards contribute to keeping your data
              secure on Exegov.ai :
            </p>
          </div>
          <h2
            className={tw(
              `font-sans font-bold text-2xl md:text-3xl lg:text-6xl text-center leading-snug text-gray-800 mt-8`,
            )}
          >
            Comprehensive Compliance
          </h2>
          <div className={tw(`max-w-xl mx-auto`)}>
            <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
              AWS complies with the most stringent regulatory standards, ensuring that meets global security
              requirements. From GDPR to HIPAA, AWS&apos;s compliance enables us to protect your data according to
              international laws and regulations.
            </p>
          </div>
          <h2
            className={tw(
              `font-sans font-bold text-2xl md:text-3xl lg:text-6xl text-center leading-snug text-gray-800 mt-8`,
            )}
          >
            Advanced Encryption
          </h2>
          <div className={tw(`max-w-xl mx-auto`)}>
            <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
              Your data is encrypted both in transit and at rest, using advanced encryption methods. AWS’s encryption
              mechanisms provide a secure barrier, safeguarding your information from unauthorized access.
            </p>
          </div>
          <h2
            className={tw(
              `font-sans font-bold text-2xl md:text-3xl lg:text-6xl text-center leading-snug text-gray-800 mt-8`,
            )}
          >
            Continuous Monitoring and Protection
          </h2>
          <div className={tw(`max-w-xl mx-auto`)}>
            <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
              AWS’s infrastructure provides continuous monitoring and real-time protection against threats and
              vulnerabilities. This proactive stance on security ensures that any potential risks are identified and
              mitigated swiftly, keeping your data safe 24/7.
            </p>
          </div>
          <h2
            className={tw(
              `font-sans font-bold text-2xl md:text-3xl lg:text-6xl text-center leading-snug text-gray-800 mt-8`,
            )}
          >
            Reliability and Resilience
          </h2>
          <div className={tw(`max-w-xl mx-auto`)}>
            <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
              AWS’s global network of data centers offers unmatched reliability and redundancy. In the unlikely event of
              a system failure, your data remains secure and accessible, minimizing downtime and ensuring business
              continuity.
            </p>
          </div>
          <h2
            className={tw(
              `font-sans font-bold text-2xl md:text-3xl lg:text-6xl text-center leading-snug text-gray-800 mt-8`,
            )}
          >
            Our Commitment to Your Security
          </h2>
          <div className={tw(`max-w-xl mx-auto`)}>
            <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
              We’re dedicated to maintaining the highest standards of security and data protection. Our team
              continuously monitors security systems, updates protocols, and adopts best practices to ensure the
              integrity and confidentiality of your information. With http://Exegov.ai and AWS, you can focus on growing
              your business, knowing your data is in safe hands.
            </p>
          </div>
          <h2
            className={tw(
              `font-sans font-bold text-2xl md:text-3xl lg:text-6xl text-center leading-snug text-gray-800 mt-8`,
            )}
          >
            Security Questions? We’re Here for You
          </h2>
          <div className={tw(`max-w-xl mx-auto`)}>
            <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
              Your trust is important to us. If you have any questions about our security practices or how we protect
              your data with AWS, please don’t hesitate to reach out. Our team is ready to provide you with the
              information you need to feel secure and supported.
            </p>
          </div>
        </div>
      </header>
      <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
        <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0`)}>
          <p className={tw(`text-center`)}>© 2022 Exegov.ai. All rights reserved.</p>
        </div>
      </footer>
    </Page>
  );
}
