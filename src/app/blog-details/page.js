import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsSection/NewsDetailsPage";
import PageHeader from "@/components/Reuseable/PageHeader";

export const metadata = {
  title: "Blog Details - Oslim NextJS Template",
  description: "Blog Details page of Oslim NextJS Template For Business",
};

export default function BlogDetails() {
  return (
    <Layout pageTitle="Blog Details" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Blog Details" />
      <NewsDetailsPage />
    </Layout>
  );
}