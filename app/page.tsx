import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Concerns } from '@/components/sections/concerns';
import { BeforeAfter } from '@/components/sections/before-after';
import { PostPurchaseRegret } from '@/components/sections/post-purchase-regret';
import { Plans } from '@/components/sections/plans';
import { Testimonials } from '@/components/sections/testimonials';
import { WhyChoose } from '@/components/sections/why-choose';
import { ApplicationFlow } from '@/components/sections/application-flow';
import { CustomerInterview } from '@/components/sections/customer-interview';
import { Faq } from '@/components/sections/faq';
import { OurStory } from '@/components/sections/our-story';
import { FinalCta } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden relative z-0">
      <Header />
      <Hero />
      <Concerns />
      <BeforeAfter />
      <PostPurchaseRegret />
      <Plans />
      <Testimonials />
      <WhyChoose />
      <ApplicationFlow />
      <CustomerInterview />
      <Faq />
      <OurStory />
      <FinalCta />
      <Footer />
    </main>
  );
}