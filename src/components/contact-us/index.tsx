import { sendEmail } from '@/lib/actions/sendEmail';
import ContactForm from './ContactForm';

function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12">
      <div className="relative max-w-7xl mx-auto mb-24">
        <div className="overflow-hidden lg:max-w-none lg:flex">
          <div className="py-8 px-6 md:px-0 lg:flex-shrink-1">
            <h2 className="text-4xl lg:text-7xl font-bold text-gray-800 mb-12 md:px-6 lg:px-8">
              Get in Touch with Exegov.ai
            </h2>
            <p className="mt-6 text-base leading-6 text-gray-500 md:px-6 lg:px-8">
              At Exegov.ai, we believe in the power of collaboration and open communication. Whether you&apos;re
              navigating the early stages of your startup journey or scaling new heights, your insights and experiences
              are invaluable to us. We&apos;re committed to creating a platform that not only meets but exceeds your
              expectations. That&apos;s why we&apos;re always here to listen.
            </p>
            <div className="mt-8 md:px-6 lg:px-8">
              <div className="flex items-center">
                <div>
                  <h3
                    className={`
                      flex-shrink-0 pr-4 text-sm leading-5tracking-wider font-semibold uppercase text-indigo-600
                    `}
                  >
                    Contact Us
                  </h3>
                </div>
                <div className="flex-1 border-t-2 border-gray-200" />
              </div>
              <div className="mt-8">
                <div
                  className="isolate inset-0 relative bg-white px-6 py-1 sm:py-2 lg:px-8"
                  style={{ clipPath: `inset(0)` }}
                >
                  <div
                    aria-hidden="true"
                    className={`
                      absolute inset-x-0 inset-y-0 top-[-10rem] -z-10 transform-gpu blur-3xl
                      overflow-hidden sm:top-[-20rem]
                    `}
                  >
                    <div
                      style={{
                        clipPath: `polygon(
                          74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%,
                          80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%,
                          47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 
                          17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%
                        )`,
                      }}
                      className={`
                        relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none rotate-[30deg]
                        bg-gradient-to-tr from-[#4e46e5] to-[#3b83f6] opacity-30 sm:left-[calc(50%-40rem)]
                        sm:w-[72.1875rem] translate-y-1/4 -translate-x-1/
                      `}
                    />
                  </div>
                  <ContactForm sendEmailAction={sendEmail} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
