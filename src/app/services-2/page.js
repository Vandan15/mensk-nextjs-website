import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServicesOneCarousel from "@/components/ServicesSection/ServicesOneCarousel";

export const metadata = {
  title: "Services Carousel - Oslim NextJS Template",
  description: "Services carousel page of Oslim NextJS Template For Business",
};

export default function Services2() {
  return (
    <Layout pageTitle="Services Carousel" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="services" title="Services Carousel" />
      <ServicesOneCarousel />
    </Layout>
  );
}