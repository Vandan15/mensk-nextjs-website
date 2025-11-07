import BenefitsOne from "@/components/Benefits/BenefitsOne";
import CaseOne from "@/components/CaseSection/CaseOne";
import CtaOne from "@/components/CtaSection/CtaOne";
import FreeConsultation from "@/components/FreeConsultation/FreeConsultation";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsSection/NewsOne";
import OurMission from "@/components/OurMission/OurMission";
import TeamOne from "@/components/TeamSection/TeamOne";
import TestimonialOne from "@/components/TestimonialSection/TestimonialOne";
import TrustedOne from "@/components/TrustedSection/TrustedOne";
import WelcomeOne from "@/components/WelcomeSection/WelcomeOne";
import WorkTogether from "@/components/WorkTogether/Services";
import { onePageNavItems } from "@/data/headerData";
import { mainSlider } from "@/data/mainSlider";

export const metadata = {
  title: "One Page Home - Oslim Business Consulting",
  description: "Complete one-page business consulting website showcasing all our services, team, case studies, and solutions in a single scrollable experience.",
};

export default function HomeOnePage() {
  return (
    <Layout onePage navItems={onePageNavItems} pageTitle="Onepage || Home One">
      <Header onePage navItems={onePageNavItems} />
      <MainSlider sliders={mainSlider} showShape id="home" />
      <WelcomeOne id="services" />
      <WorkTogether id="about" />
      <CaseOne id="cases" />
      <BenefitsOne />
      <FreeConsultation />
      <OurMission />
      <TeamOne id="team" />
      <TestimonialOne />
      <TrustedOne />
      <NewsOne showShape id="news" />
      <CtaOne />
    </Layout>
  );
}