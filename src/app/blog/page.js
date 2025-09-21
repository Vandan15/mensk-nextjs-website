import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import BlogPagination from "@/components/NewsSection/BlogPagination";
import NewsOne from "@/components/NewsSection/NewsOne";
import PageHeader from "@/components/Reuseable/PageHeader";

export const metadata = {
  title: "Blog | Mensk Consultancy",
  description: "Blog page of Oslim NextJS Template For Business",
};

export default function Blog() {
  return (
    <Layout pageTitle="Blog" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Blog" title="Stay Informed. Stay Ahead. UAE Market Insights." />
      <NewsOne className="news-page" hideTitle>
        {/* <BlogPagination /> */}
      </NewsOne>
    </Layout>
  );
}