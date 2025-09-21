import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsSection/NewsDetailsPage";
import PageHeader from "@/components/Reuseable/PageHeader";
import { getBlogDetailsBySlug, newsOne } from "@/data/newsSection";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return newsOne.newsData.map((blog) => ({
    slug: blog.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }) {
  const blogDetails = getBlogDetailsBySlug(params.slug);

  if (!blogDetails) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blogDetails.title} | Mensk Consultancy`,
    description: blogDetails.text.substring(0, 160) + "...",
  };
}

export default function BlogSlugPage({ params }) {
  const blogDetails = getBlogDetailsBySlug(params.slug);

  if (!blogDetails) {
    notFound();
  }

  return (
    <Layout pageTitle={blogDetails.title} footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Blog Details" title={blogDetails.title} />
      <NewsDetailsPage blogSlug={params.slug} />
    </Layout>
  );
}