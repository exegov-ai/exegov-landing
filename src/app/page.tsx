import Page from '@/components/page';
import Header from '@/components/header';
// import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import WhySection from '@/components/why-section';
import ContactSection from '@/components/contact-us';
import Footer from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Exegov.ai - Your Trusted Partner in Business Growth`,
  description: `
    Combining traditional consulting expertise with cutting-edge
    AI technology to support your growth and success at every stage.
  `,
};

export default function Home() {
  return (
    <Page>
      <Header />
      <main className="mt-0">
        <ListSection />
        <WhySection />
        {/* <VideoSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </Page>
  );
}
