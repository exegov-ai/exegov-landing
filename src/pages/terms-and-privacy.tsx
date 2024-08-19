import React from 'react';
import Page from '@/components/page';
import { NextSeo } from 'next-seo';

export default function TermsAndPrivacy() {
  return (
    <Page>
      <NextSeo title="Terms & Privacy - Exegov.ai" />
      <header className="bg-white min-h-screen pt-16">
        <div className="max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8">
          <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800">
            Terms & Privacy
          </h1>
          <div className="max-w-xl mx-auto">
            <p className="mt-10 text-gray-500 text-center text-xl lg:text-3xl">
              This is a placeholder for the Terms & Privacy page.
            </p>
          </div>
        </div>
      </header>
      <footer className="bg-white border-t border-gray-400 pt-14 pb-16">
        <div className="max-w-7xl mx-auto text-gray-400 px-8 lg:px-0">
          <p className="text-center">© 2024 Exegov.ai. All rights reserved.</p>
        </div>
      </footer>
      <div className="text-center mt-4">
        <span role="img" aria-label="Lawyer" className="text-2xl">
          👨‍⚖️
        </span>
        <span role="img" aria-label="Lawyer" className="text-2xl">
          👩‍⚖️
        </span>
      </div>
    </Page>
  );
}
