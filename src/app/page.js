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
import WorkTogether from "@/components/WorkTogether/WorkTogether";
import { mainSlider } from "@/data/mainSlider";

export const metadata = {
  title: "Home One - Oslim NextJS Template",
  description: "Home page of Oslim NextJS Template For Business",
};

export default function Home() {
  return (
    <Layout pageTitle="Home One">
      <Header />
      <MainSlider sliders={mainSlider} showShape />
      <WelcomeOne />
      <WorkTogether />
      <CaseOne />
      <BenefitsOne />
      <FreeConsultation />
      <OurMission />
      <TeamOne />
      <TestimonialOne />
      <TrustedOne />
      <NewsOne showShape />
      <CtaOne />
    </Layout>
  );
}