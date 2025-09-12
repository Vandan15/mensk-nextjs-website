import CasesPage from "@/components/CaseSection/CasesPage";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";

export const metadata = {
  title: "Cases - Oslim NextJS Template",
  description: "Cases page of Oslim NextJS Template For Business",
};

export default function Cases() {
  return (
    <Layout pageTitle="Cases" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Cases" title="Our Cases" />
      <CasesPage />
    </Layout>
  );
}