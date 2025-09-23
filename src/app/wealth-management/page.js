import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { consumerProduct } from "@/data/servicesSection";

const title = "Wealth Management";

export const metadata = {
  title: `${title} | Mensk Consultancy`,
  description: "Make the most of what you've built, and watch it flourish. Strategic wealth preservation and growth for successful expatriate families with investment portfolio optimization and tax efficient structuring.",
};

export default function WealthManagement() {
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