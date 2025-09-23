import BenefitsOne from "@/components/Benefits/BenefitsOne";
import CaseOne from "@/components/CaseSection/CaseOne";
import ContactForm from "@/components/Contact/ContactForm";
import ContactOne from "@/components/Contact/ContactOne";
import CtaOne from "@/components/CtaSection/CtaOne";
import FreeConsultation from "@/components/FreeConsultation/FreeConsultation";
import Header from "@/components/Header/Header";
import HowWeWorks from "@/components/HowWeWorks/HowWeWorks";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsSection/NewsOne";
import OurMission from "@/components/OurMission/OurMission";
import TeamOne from "@/components/TeamSection/TeamOne";
import TestimonialOne from "@/components/TestimonialSection/TestimonialOne";
import TrustedOne from "@/components/TrustedSection/TrustedOne";
import WelcomeOne from "@/components/WelcomeSection/WelcomeOne";
import WhyChooseOne from "@/components/WhyChoose/WhyChooseOne";
import WorkTogether from "@/components/WorkTogether/Services";
import { mainSlider } from "@/data/mainSlider";
import Services from "./services/page";

// export const metadata = {
//   title: "Home One | Mensk Consultancy",
//   description: "Home page of Oslim NextJS Template For Business",
// };

export default function Home() {
  return (
    <Layout pageTitle="Home One">
      <Header />
      <MainSlider sliders={mainSlider} showShape />
      {/* <WelcomeOne /> */}
      <Services />
      {/* <CaseOne /> */}
      {/* <BenefitsOne /> */}
      <FreeConsultation />
      <WhyChooseOne />
      {/* <OurMission /> */}
      <TeamOne />
      {/* <TestimonialOne /> */}
      {/* <TrustedOne /> */}
      <HowWeWorks/>
      <NewsOne showShape />
      <ContactOne isTitleTwo showOnlyForm/>
      <CtaOne />
    </Layout>
  );
}