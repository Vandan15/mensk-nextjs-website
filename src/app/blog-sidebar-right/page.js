import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsSidebar from "@/components/NewsSection/NewsSidebar";
import PageHeader from "@/components/Reuseable/PageHeader";

export const metadata = {
  title: "Blog Right Sidebar - Oslim NextJS Template",
  description: "Blog Right Sidebar page of Oslim NextJS Template For Business",
};

export default function BlogSidebarRight() {
  return (
    <Layout pageTitle="Blog Right Sidebar" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Blog Sidebar" />
      <NewsSidebar className="news-sidebar--right" />
    </Layout>
  );
}