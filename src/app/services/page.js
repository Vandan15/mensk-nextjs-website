import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServicesOne from "@/components/ServicesSection/ServicesOne";

export const metadata = {
  title: "Services | Mensk Consultancy",
  description: "Services page of Oslim NextJS Template For Business",
};

export default function Services() {
  return (
    <Layout pageTitle="Services" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="services" title="Our Services" />
      <ServicesOne hideTitle />
    </Layout>
  );
}