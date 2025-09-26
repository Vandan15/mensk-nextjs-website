import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { consumerProduct } from "@/data/servicesSection";

const title = "Wills";

export const metadata = {
  title: `${title} | Mensk Consultancy`,
  description: "Give your loved ones the certainty and security they deserve. DIFC Courts registered wills for expatriate families with asset protection strategies and cross-border inheritance solutions.",
};

export default function Wills() {
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Service Details"
        title={title}
        parent="Services"
        parentHref="/services"
      />
      <ServiceDetails service={consumerProduct} />
      <CtaOne />
    </Layout>
  );
}