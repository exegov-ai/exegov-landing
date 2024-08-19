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
                    className={`flex-shrink-0 pr-4 text-sm leading-5
          tracking-wider font-semibold uppercase text-indigo-600`}
                  >
                    Contact Us
                  </h3>
                </div>
                <div className="flex-1 border-t-2 border-gray-200" />
              </div>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
