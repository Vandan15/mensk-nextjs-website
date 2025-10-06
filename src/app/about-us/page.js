import BrandOne from "@/components/BrandSection/BrandOne";
import CtaOne from "@/components/CtaSection/CtaOne";
import FreeConsultation from "@/components/FreeConsultation/FreeConsultation";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import OurMissionTwo from "@/components/OurMission/OurMissionTwo";
import QualityWork from "@/components/QualityWork/QualityWork";
import PageHeader from "@/components/Reuseable/PageHeader";
import TeamOne from "@/components/TeamSection/TeamOne";
import TestimonialOne from "@/components/TestimonialSection/TestimonialOne";
import WorkTogetherTwo from "@/components/WorkTogether/WorkTogetherTwo";
import ContactBg from "@/images/backgrounds/contact-bg.jpg";

export const metadata = {
  title: "About Us | Mensk Consultancy",
  description: "About Us | Mensk Consultancy",
};

export default function AboutUs() {
  return (
    <Layout pageTitle="About Us">
      <Header />
      <PageHeader page="About Us" title="About us" imgSrc={ContactBg.src}/>
      {/* <WorkTogetherTwo /> */}
      {/* <QualityWork /> */}
      {/* <OurMissionTwo className="our-mission-three" shape={1} /> */}
      <TeamOne />
      {/* <FreeConsultation /> */}
      {/* <TestimonialOne className="testimonial-two" /> */}
      {/* <BrandOne /> */}
      <CtaOne />
    </Layout>
  );
}
