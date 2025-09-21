import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import FAQsPage from "@/components/FAQsPage/FAQsPage";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";

export const metadata = {
  title: "FAQs | Mensk Consultancy",
  description: "FAQs page of Oslim NextJS Template For Business",
};

export default function Faq() {
  return (
    <Layout pageTitle="FAQs">
      <Header />
      <PageHeader title="FAQs" />
      <FAQsPage />
      <ContactPage />
      <CtaOne />
    </Layout>
  );
}