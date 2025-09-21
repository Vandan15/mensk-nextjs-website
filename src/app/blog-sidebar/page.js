import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsSidebar from "@/components/NewsSection/NewsSidebar";
import PageHeader from "@/components/Reuseable/PageHeader";

export const metadata = {
  title: "Blog Sidebar | Mensk Consultancy",
  description: "Blog Sidebar page of Oslim NextJS Template For Business",
};

export default function BlogSidebar() {
  return (
    <Layout pageTitle="Blog Sidebar" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Blog Sidebar" />
      <NewsSidebar />
    </Layout>
  );
}