// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { getBlogPostBySlug, getBlogPosts, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found - My Startup' }
  }

  return {
    title: `${post.title} - My Startup Blog`,
    description: post.title,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const content = getMetafieldValue(post.metadata?.content)
  const category = getMetafieldValue(post.metadata?.category)
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const authorName = author
    ? getMetafieldValue(author.metadata?.full_name) || author.title
    : ''
  const authorAvatar = author?.metadata?.headshot
  const date = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Category badge */}
        {category && (
          <span className="inline-block bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {category}
          </span>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author & Date */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
          {authorAvatar?.imgix_url ? (
            <img
              src={`${authorAvatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
              alt={authorName}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
          )}
          <div>
            {authorName && (
              <p className="font-semibold text-gray-900">{authorName}</p>
            )}
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>

        {/* Featured Image */}
        {featuredImage?.imgix_url && (
          <div className="aspect-video rounded-2xl overflow-hidden mb-10 bg-gray-100">
            <img
              src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        {content && (
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 mb-4">Enjoyed this post?</p>
          <Link
            href="/blog"
            className="inline-block px-6 py-3 text-sm font-semibold text-primary-600 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
          >
            Read More Posts →
          </Link>
        </div>
      </div>
    </article>
  )
}