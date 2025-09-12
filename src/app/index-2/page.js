import BrandOne from "@/components/BrandSection/BrandOne";
import CaseTwo from "@/components/CaseSection/CaseTwo";
import CounterOne from "@/components/Counter/CounterOne";
import CtaOne from "@/components/CtaSection/CtaOne";
import Experience from "@/components/Experience/Experience";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import HeaderTwo from "@/components/Header/HeaderTwo";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsSection/NewsOne";
import OurMissionTwo from "@/components/OurMission/OurMissionTwo";
import QualityWork from "@/components/QualityWork/QualityWork";
import ServicesOne from "@/components/ServicesSection/ServicesOne";
import TestimonialOne from "@/components/TestimonialSection/TestimonialOne";
import WelcomeTwo from "@/components/WelcomeSection/WelcomeTwo";
import WhyChooseOne from "@/components/WhyChoose/WhyChooseOne";
import { mainSliderTwo } from "@/data/mainSlider";

export const metadata = {
  title: "Home Two - Oslim NextJS Template",
  description: "Home page variant 2 of Oslim NextJS Template For Business",
};

export default function Home2() {
  return (
    <Layout pageTitle="Home Two">
      <HeaderTwo />
      <MainSlider
        sliders={mainSliderTwo}
        className="main-slider-two"
        navClassName="main-slider__nav-two"
      />
      <WelcomeTwo />
      <CaseTwo />
      <QualityWork />
      <Experience />
      <ServicesOne serviceCount={3} />
      <TestimonialOne className="testimonial-two" />
      <BrandOne />
      <WhyChooseOne />
      <OurMissionTwo />
      <CounterOne />
      <NewsOne className="news-two" />
      <GoogleMap />
      <CtaOne className="cta-two" />
    </Layout>
  );
}