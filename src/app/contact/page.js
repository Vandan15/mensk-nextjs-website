import ContactDetails from "@/components/Contact/ContactDetails";
import ContactOne from "@/components/Contact/ContactOne";
import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";

export const metadata = {
  title: "Contact - Oslim NextJS Template",
  description: "Contact page of Oslim NextJS Template For Business",
};

export default function Contact() {
  return (
    <Layout pageTitle="Contact">
      <Header />
      <PageHeader title="Contact" />
      {/* <ContactDetails /> */}
      {/* <div className="mb-5"> */}
      <ContactOne isTitleTwo />
      {/* </div> */}
      {/* <CtaOne /> */}
    </Layout>
  );
}