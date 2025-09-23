import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { consumerProduct } from "@/data/servicesSection";

const title = "Real Estate";

export const metadata = {
  title: `${title} | Mensk Consultancy`,
  description: "Strategic Real Estate Solutions. Finance your UAE property deals with ease. Guidance on mortgage qualification, legal review of financing contracts, and tax-efficient property holding structures.",
};

export default function RealEstate() {
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