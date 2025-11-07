import CasesPageCarousel from "@/components/CaseSection/CasesPageCarousel";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";

export const metadata = {
  title: "Cases Carousel - Oslim Business Consulting",
  description: "Browse our portfolio of successful business consulting projects and case studies displayed in an interactive carousel format.",
};

export default function Cases2() {
  return (
    <Layout pageTitle="Cases Carousel" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Cases" title="Cases Carousel" />
      <CasesPageCarousel />
    </Layout>
  );
}