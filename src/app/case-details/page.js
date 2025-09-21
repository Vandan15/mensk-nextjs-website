import CaseDetailsPage from "@/components/CaseSection/CaseDetailsPage";
import SimilarCase from "@/components/CaseSection/SimilarCase";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";

export const metadata = {
  title: "Case Details | Mensk Consultancy",
  description: "Case Details page of Oslim NextJS Template For Business",
};

export default function CaseDetails() {
  return (
    <Layout pageTitle="Case Details" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="case Details" />
      <CaseDetailsPage />
      <SimilarCase />
    </Layout>
  );
}