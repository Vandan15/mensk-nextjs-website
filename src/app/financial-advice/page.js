import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { financialAdvice } from "@/data/servicesSection";

const { title } = financialAdvice;

export const metadata = {
  title: `${title} - Oslim NextJS Template`,
  description: `${title} service page of Oslim NextJS Template For Business`,
};

export default function FinancialAdvice() {
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Service Details"
        title={title}
        parent="Services"
        parentHref="/services"
      />
      <ServiceDetails service={financialAdvice} />
      <CtaOne />
    </Layout>
  );
}