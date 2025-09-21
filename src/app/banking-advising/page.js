import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { bankingAdvising } from "@/data/servicesSection";

const { title } = bankingAdvising;

export const metadata = {
  title: `${title} | Mensk Consultancy`,
  description: `${title} service page of Oslim NextJS Template For Business`,
};

export default function BankingAdvising() {
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Service Details"
        title={title}
        parent="Services"
        parentHref="/services"
      />
      <ServiceDetails service={bankingAdvising} />
      <CtaOne />
    </Layout>
  );
}