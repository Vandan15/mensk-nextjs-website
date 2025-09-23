import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { consumerProduct } from "@/data/servicesSection";

const title = "Company Incorporation";

export const metadata = {
  title: `${title} | Mensk Consultancy`,
  description: "Start your UAE story with effortless company incorporation. 21-day incorporation guarantee with all government approvals included. Banking relationship facilitation and visa processing coordination.",
};

export default function CompanyIncorporation() {
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