import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import ContactSection from '@/components/contact-us';
import Footer from '@/components/footer';
import SecuritySection from '@/components/security-secion';

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
      <main>
        <ListSection />
        <FeatureSection />
        <SecuritySection />
        <VideoSection />
        <ContactSection />
        <CasesSection />
      </main>
      <Footer />
    </Page>
  );
}
