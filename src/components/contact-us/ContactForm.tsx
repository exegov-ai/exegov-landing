'use client';

import { sendEmail as SendEmailAction } from '@/lib/actions/sendEmail';
import { SendEmailStatuses, TSendEmailState, TSendEmailStatus } from '@/lib/actions/sendEmail.types';
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useActionState, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { getCaptchaToken } from '@/utils/captcha';
import Spinner from '../spinner';

type TContactFormProps = {
  sendEmailAction: typeof SendEmailAction;
};

type TSubmitProps = {
  buttonMessage: string;
  status?: TSendEmailStatus;
};

const initialActionState: TSendEmailState = {
  message: ``,
};

function Submit({ buttonMessage, status }: TSubmitProps) {
  const { pending } = useFormStatus();
  const isDisabled = pending || status === SendEmailStatuses.success;

  const spinner = pending ? (
    <span className="-translate-x-7">
      <Spinner />
    </span>
  ) : null;

  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={`
          block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm
          font-semibold text-white shadow-sm focus-visible:outline
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
          ${isDisabled && `opacity-75 cursor-not-allowed`}
          ${!isDisabled && `hover:bg-indigo-500`}
        `}
    >
      <span className="flex justify-center relative">
        {spinner}
        {buttonMessage}
      </span>
    </button>
  );
}

export default function ContactForm({ sendEmailAction }: TContactFormProps) {
  const [actionState, sendEmail] = useActionState(async (prevState: TSendEmailState, formData: FormData) => {
    const token = await getCaptchaToken();
    return sendEmailAction(prevState, formData, token);
  }, initialActionState);

  const [formState, setFormState] = useState({
    firstName: ``,
    lastName: ``,
    company: ``,
    email: ``,
    phone: ``,
    message: ``,
  });

  useEffect(() => {
    if (actionState.status === SendEmailStatuses.success) {
      setFormState({
        firstName: ``,
        lastName: ``,
        company: ``,
        email: ``,
        phone: ``,
        message: ``,
      });
    }
  }, [actionState.status]);

  return (
    <form action={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
            First name *
          </label>
          <div className="mt-2.5">
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formState.firstName}
              onChange={(e) => setFormState({ ...formState, firstName: e.currentTarget.value })}
              autoComplete="given-name"
              placeholder="John"
              className={`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `}
            />
          </div>
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
            Last name
          </label>
          <div className="mt-2.5">
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formState.lastName}
              onChange={(e) => setFormState({ ...formState, lastName: e.currentTarget.value })}
              autoComplete="family-name"
              placeholder="Doe"
              className={`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
            Company
          </label>
          <div className="mt-2.5">
            <input
              id="company"
              name="company"
              type="text"
              value={formState.company}
              onChange={(e) => setFormState({ ...formState, company: e.currentTarget.value })}
              autoComplete="organization"
              placeholder="ABC Inc."
              className={`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
            Email *
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.currentTarget.value })}
              autoComplete="email"
              placeholder="john.doe@example.com"
              className={`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
            Phone number
          </label>
          <div className="relative mt-2.5">
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={(e) => setFormState({ ...formState, phone: e.currentTarget.value })}
              autoComplete="tel"
              placeholder="+1 123 456 7890"
              className={`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            Message *
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.currentTarget.value })}
              rows={4}
              placeholder="Type your message here..."
              className={`
                  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                `}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Submit buttonMessage={actionState.message || `Send message`} status={actionState.status} />
      </div>
    </form>
  );
}
