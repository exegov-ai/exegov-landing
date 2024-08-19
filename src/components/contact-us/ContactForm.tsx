/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { tw } from 'twind';
import { sendEmail } from '@/lib/actions';

// type ContactFormRequest = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   company: string;
//   message: string;
// };

export default function ContactForm() {
  return (
    <div className={tw(`isolate inset-0 relative bg-white px-6 py-1 sm:py-2 lg:px-8`)} style={{ clipPath: `inset(0)` }}>
      <div
        aria-hidden="true"
        className={tw(`
            absolute inset-x-0 inset-y-0 top-[-10rem] -z-10 transform-gpu blur-3xl overflow-hidden sm:top-[-20rem]
          `)}
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
          className={tw(`
            relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none rotate-[30deg]
            bg-gradient-to-tr from-[#4e46e5] to-[#3b83f6] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]
            translate-y-1/4 -translate-x-1/
          `)}
        />
      </div>
      <form action={sendEmail} className={tw(`mx-auto mt-16 max-w-xl sm:mt-20`)}>
        <div className={tw(`grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2`)}>
          <div>
            <label htmlFor="firstName" className={tw(`block text-sm font-semibold leading-6 text-gray-900`)}>
              First name *
            </label>
            <div className={tw(`mt-2.5`)}>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                placeholder="John"
                className={tw(`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className={tw(`block text-sm font-semibold leading-6 text-gray-900`)}>
              Last name
            </label>
            <div className={tw(`mt-2.5`)}>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Doe"
                className={tw(`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `)}
              />
            </div>
          </div>
          <div className={tw(`sm:col-span-2`)}>
            <label htmlFor="company" className={tw(`block text-sm font-semibold leading-6 text-gray-900`)}>
              Company
            </label>
            <div className={tw(`mt-2.5`)}>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="ABC Inc."
                className={tw(`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `)}
              />
            </div>
          </div>
          <div className={tw(`sm:col-span-2`)}>
            <label htmlFor="email" className={tw(`block text-sm font-semibold leading-6 text-gray-900`)}>
              Email *
            </label>
            <div className={tw(`mt-2.5`)}>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="john.doe@example.com"
                className={tw(`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `)}
              />
            </div>
          </div>
          <div className={tw(`sm:col-span-2`)}>
            <label htmlFor="phone-number" className={tw(`block text-sm font-semibold leading-6 text-gray-900`)}>
              Phone number
            </label>
            <div className={tw(`relative mt-2.5`)}>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+1 123 456 7890"
                className={tw(`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `)}
              />
            </div>
          </div>
          <div className={tw(`sm:col-span-2`)}>
            <label htmlFor="message" className={tw(`block text-sm font-semibold leading-6 text-gray-900`)}>
              Message *
            </label>
            <div className={tw(`mt-2.5`)}>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Type your message here..."
                className={tw(`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `)}
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div className={tw(`mt-10`)}>
          <button
            type="submit"
            className={tw(`
              block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm
              font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
            `)}
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
  );
}
