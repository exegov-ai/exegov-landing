import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import ContactSection from '@/components/contact-us';
import Footer from '@/components/footer';
import SecuritySection from '@/components/security-secion';
import { tw } from 'twind';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Exegov.ai - Your Trusted Partner in Business Growth"
        description="Combining traditional consulting expertise with cutting-edge AI technology
         to support your growth and success at every stage."
      />
      <Header />
      <main className={tw(`mt-0`)}>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <SecuritySection />
        <ContactSection />
      </main>
      <Footer />
    </Page>
  );
}
