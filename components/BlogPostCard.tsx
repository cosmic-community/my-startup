import Link from 'next/link'
import type { BlogPost } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const category = getMetafieldValue(post.metadata?.category)
  const featuredImage = post.metadata?.featured_image
  const authorName = post.metadata?.author
    ? getMetafieldValue(post.metadata.author.metadata?.full_name) || post.metadata.author.title
    : ''
  const date = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover h-full flex flex-col">
        <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
          {featuredImage?.imgix_url ? (
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={post.title}
              width={400}
              height={225}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-5xl">📝</span>
            </div>
          )}
          {category && (
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <div className="mt-auto pt-4 flex items-center justify-between text-sm text-gray-500">
            {authorName && <span>{authorName}</span>}
            <span>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}