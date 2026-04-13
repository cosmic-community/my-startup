import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/cosmic'
import BlogPostCard from '@/components/BlogPostCard'
import SectionHeading from '@/components/SectionHeading'
import EmptyState from '@/components/EmptyState'

export const metadata: Metadata = {
  title: 'Blog - My Startup',
  description: 'Read the latest insights, updates, and stories from the My Startup team.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Blog"
          title="Insights & Updates"
          description="Stay up to date with the latest from our team. Tips, tutorials, and product updates."
        />

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyState
            emoji="📝"
            title="No blog posts yet"
            description="Blog posts will appear here once they are published in Cosmic."
          />
        )}
      </div>
    </section>
  )
}