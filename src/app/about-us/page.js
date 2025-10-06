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

      {/* About Content Section */}
      <section className="py-5 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">About MENSK Consultancy</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Welcome to MENSK Consultancy, an upcoming consultancy firm dedicated to providing comprehensive and innovative solutions to businesses and individuals navigating the intricate landscape of law and commerce in the United Arab Emirates (UAE). With a strong foothold in India and a reputation for excellence, we bring unparalleled expertise and insight.
          </p>
          <p className="text-lg leading-relaxed">
            At MENSK, we specialize in a diverse range of legal services tailored to meet the evolving needs of our clients. Whether you're a budding entrepreneur seeking startup advisory, a forward-thinking investor exploring opportunities in Digital Assets and Real Estate.
          </p>
        </div>
      </section>

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
