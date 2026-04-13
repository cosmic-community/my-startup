import Link from 'next/link'
import { getFeatures, getPricingTiers, getTeamMembers, getBlogPosts, getTestimonials } from '@/lib/cosmic'
import FeatureCard from '@/components/FeatureCard'
import PricingCard from '@/components/PricingCard'
import TeamMemberCard from '@/components/TeamMemberCard'
import BlogPostCard from '@/components/BlogPostCard'
import TestimonialCard from '@/components/TestimonialCard'
import SectionHeading from '@/components/SectionHeading'

export default async function HomePage() {
  const [features, tiers, team, posts, testimonials] = await Promise.all([
    getFeatures(),
    getPricingTiers(),
    getTeamMembers(),
    getBlogPosts(),
    getTestimonials(),
  ])

  const topFeatures = features.slice(0, 6)
  const topTeam = team.slice(0, 4)
  const topPosts = posts.slice(0, 3)
  const topTestimonials = testimonials.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary-600 text-sm font-semibold uppercase tracking-wider mb-4 px-4 py-1.5 bg-primary-50 rounded-full border border-primary-100">
              Welcome to My Startup 🚀
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Build Something{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500">
                Amazing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              We provide the tools and platform you need to take your ideas from concept to reality. Start building today and join thousands of happy customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl hover:from-primary-700 hover:to-accent-600 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
              >
                Explore Features →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {topFeatures.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="Features"
              title="Everything You Need"
              description="Powerful features designed to help you build, launch, and scale your products."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topFeatures.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
            {features.length > 6 && (
              <div className="text-center mt-10">
                <Link
                  href="/features"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors"
                >
                  View all features →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {tiers.length > 0 && (
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="Pricing"
              title="Simple, Transparent Pricing"
              description="Choose the plan that's right for you. All plans include a 14-day free trial."
            />
            <div className={`grid gap-8 items-center ${tiers.length === 1 ? 'max-w-md mx-auto' : tiers.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'}`}>
              {tiers.map((tier) => (
                <PricingCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {topTestimonials.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="Testimonials"
              title="Loved by Customers"
              description="See what our customers have to say about their experience."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            {testimonials.length > 3 && (
              <div className="text-center mt-10">
                <Link
                  href="/testimonials"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors"
                >
                  Read more testimonials →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Team Section */}
      {topTeam.length > 0 && (
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="Team"
              title="Meet the Team"
              description="The talented people behind My Startup."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topTeam.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
            {team.length > 4 && (
              <div className="text-center mt-10">
                <Link
                  href="/team"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors"
                >
                  View full team →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Blog Section */}
      {topPosts.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="Blog"
              title="Latest from Our Blog"
              description="Insights, updates, and stories from the My Startup team."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
            {posts.length > 3 && (
              <div className="text-center mt-10">
                <Link
                  href="/blog"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors"
                >
                  Read all posts →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers building amazing products with My Startup.
          </p>
          <Link
            href="/pricing"
            className="inline-block px-10 py-4 text-base font-semibold text-primary-600 bg-white rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </>
  )
}