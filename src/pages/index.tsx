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
        title="Exegov.ai - Empowering Your Startup Journey"
        description="In the world of startups, every decision, every strategy, and every innovation counts.
         That's where exegov.ai steps in—your 
         AI-powered companion designed to navigate the complexities of growing your business.
         From ideation to execution, exegov.ai equips you with the tools and insights you need
         to thrive in the competitive startup landscape."
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
