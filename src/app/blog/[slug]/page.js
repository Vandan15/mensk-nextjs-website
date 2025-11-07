import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsSection/NewsDetailsPage";
import PageHeader from "@/components/Reuseable/PageHeader";
import { notFound } from "next/navigation";
import apolloClient from "@/lib/apolloClient";
import { GET_POST_BY_SLUG, GET_ALL_POST_SLUGS } from "@/graphql/queries";

export async function generateStaticParams() {
  try {
    const { data } = await apolloClient.query({
      query: GET_ALL_POST_SLUGS,
    });

    return data.posts.edges.map((edge) => ({
      slug: edge.node.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const { data } = await apolloClient.query({
      query: GET_POST_BY_SLUG,
      variables: { slug: params.slug },
    });

    const post = data.post;

    if (!post) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    // Use Yoast SEO fields if available
    const seoTitle = post.seo?.title || post.title;
    const seoDescription = post.seo?.metaDesc || post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160);
    const canonical = post.seo?.canonical;
    const ogTitle = post.seo?.opengraphTitle || seoTitle;
    const ogDescription = post.seo?.opengraphDescription || seoDescription;
    const ogImage = post.seo?.opengraphImage?.sourceUrl || post.featuredImage?.node?.sourceUrl;
    const twitterTitle = post.seo?.twitterTitle || ogTitle;
    const twitterDescription = post.seo?.twitterDescription || ogDescription;
    const twitterImage = post.seo?.twitterImage?.sourceUrl || ogImage;

    const metadata = {
      title: seoTitle,
      description: seoDescription,
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        type: 'article',
        publishedTime: post.date,
        modifiedTime: post.modified,
        authors: [post.author?.node?.name],
      },
      twitter: {
        card: 'summary_large_image',
        title: twitterTitle,
        description: twitterDescription,
      },
    };

    if (canonical) {
      metadata.alternates = {
        canonical: canonical,
      };
    }

    if (ogImage) {
      metadata.openGraph.images = [{ url: ogImage }];
    }

    if (twitterImage) {
      metadata.twitter.images = [twitterImage];
    }

    // Add noindex if specified
    if (post.seo?.metaRobotsNoindex === 'noindex') {
      metadata.robots = {
        index: false,
        follow: post.seo?.metaRobotsNofollow !== 'nofollow',
      };
    }

    return metadata;
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: "Blog | Mensk Consultancy",
      description: "Read our latest blog post.",
    };
  }
}

export default async function BlogSlugPage({ params }) {
  let post = null;

  try {
    const { data } = await apolloClient.query({
      query: GET_POST_BY_SLUG,
      variables: { slug: params.slug },
    });

    post = data.post;
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  if (!post) {
    notFound();
  }

  const blogDetails = {
    id: post.id,
    title: post.title,
    slug: post.slug,
    content: post.content,
    excerpt: post.excerpt,
    date: post.date,
    modified: post.modified,
    image: post.featuredImage?.node?.sourceUrl || null,
    imageAlt: post.featuredImage?.node?.altText || post.title,
    author: {
      name: post.author?.node?.name || 'Admin',
      avatar: post.author?.node?.avatar?.url || null,
      description: post.author?.node?.description || '',
    },
    categories: post.categories?.edges.map(cat => ({
      name: cat.node.name,
      slug: cat.node.slug,
    })) || [],
    tags: post.tags?.edges.map(tag => ({
      name: tag.node.name,
      slug: tag.node.slug,
    })) || [],
    seo: post.seo,
  };

  return (
    <Layout pageTitle={post.title} footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Blog" title={post.title} imgSrc={blogDetails?.image}/>
      <NewsDetailsPage blogDetails={blogDetails} />
    </Layout>
  );
}