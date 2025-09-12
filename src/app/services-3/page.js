import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServicePage from "@/components/ServicesSection/ServicePage";

export const metadata = {
  title: "Services Style Three - Oslim Business Consulting",
  description: "Explore our comprehensive business consulting services with detailed information about our professional solutions and expertise.",
};

export default function Services3() {
  return (
    <Layout pageTitle="Services Style Two" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="services" title="Services Style Two" />
      <ServicePage />
    </Layout>
  );
}