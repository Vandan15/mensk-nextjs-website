import { NextResponse } from 'next/server';
import apolloClient from '@/lib/apolloClient';
import { GET_POSTS } from '@/graphql/queries';

export async function POST(request) {
  try {
    const body = await request.json();
    const { after } = body;

    const { data } = await apolloClient.query({
      query: GET_POSTS,
      variables: {
        first: 9,
        after: after || null,
      },
    });

    const posts = data.posts.edges.map((edge) => ({
      id: edge.node.id,
      title: edge.node.title,
      slug: edge.node.slug,
      excerpt: edge.node.excerpt,
      date: edge.node.date,
      image: edge.node.featuredImage?.node?.sourceUrl || null,
      imageAlt: edge.node.featuredImage?.node?.altText || edge.node.title,
      author: edge.node.author?.node?.name || 'Admin',
      authorAvatar: edge.node.author?.node?.avatar?.url || null,
      categories: edge.node.categories?.edges.map(cat => ({
        name: cat.node.name,
        slug: cat.node.slug,
      })) || [],
      tags: edge.node.tags?.edges.map(tag => ({
        name: tag.node.name,
        slug: tag.node.slug,
      })) || [],
    }));

    return NextResponse.json({
      posts,
      pageInfo: data.posts.pageInfo,
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
