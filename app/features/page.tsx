import type { Metadata } from 'next'
import { getFeatures } from '@/lib/cosmic'
import FeatureCard from '@/components/FeatureCard'
import SectionHeading from '@/components/SectionHeading'
import EmptyState from '@/components/EmptyState'

export const metadata: Metadata = {
  title: 'Features - My Startup',
  description: 'Explore all the powerful features My Startup offers to help you build and scale your products.',
}

export default async function FeaturesPage() {
  const features = await getFeatures()

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Features"
          title="Powerful Features for Modern Teams"
          description="Discover everything you need to build, launch, and grow your product with confidence."
        />

        {features.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        ) : (
          <EmptyState
            emoji="🚀"
            title="No features yet"
            description="Features will appear here once they are added in Cosmic."
          />
        )}
      </div>
    </section>
  )
}