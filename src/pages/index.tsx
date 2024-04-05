import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Exegov.ai - Empowering Your Startup Journey"
        description="In the world of startups, every decision, every strategy, and every innovation counts."
      />
      <Header />
      <main>
        <ListSection />
        <FeatureSection />
        <VideoSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
