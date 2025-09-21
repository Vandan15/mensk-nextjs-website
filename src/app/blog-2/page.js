import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsPageCarousel from "@/components/NewsSection/NewsPageCarousel";
import PageHeader from "@/components/Reuseable/PageHeader";

export const metadata = {
  title: "Blog Carousel | Mensk Consultancy",
  description: "Blog Carousel page of Oslim NextJS Template For Business",
};

export default function Blog2() {
  return (
    <Layout pageTitle="Blog Carousel" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Blog" title="Blog Posts Carousel" />
      <NewsPageCarousel />
    </Layout>
  );
}