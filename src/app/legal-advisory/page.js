import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { consumerProduct } from "@/data/servicesSection";

const title = "Legal Advisory";

export const metadata = {
  title: `${title} | Mensk Consultancy`,
  description: "Make every decision in the UAE with confident legal advisory at your side. Contract drafting and review, regulatory compliance guidance, dispute resolution support, and employment law advisory.",
};

export default function LegalAdvisory() {
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