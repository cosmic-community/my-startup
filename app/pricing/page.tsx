import type { Metadata } from 'next'
import { getPricingTiers } from '@/lib/cosmic'
import PricingCard from '@/components/PricingCard'
import SectionHeading from '@/components/SectionHeading'
import EmptyState from '@/components/EmptyState'

export const metadata: Metadata = {
  title: 'Pricing - My Startup',
  description: 'Choose the perfect plan for your needs. Simple, transparent pricing with no hidden fees.',
}

export default async function PricingPage() {
  const tiers = await getPricingTiers()

  return (
    <section className="py-20 md:py-28 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Pricing"
          title="Plans for Every Stage"
          description="Start free and scale as you grow. All plans include a 14-day free trial with no credit card required."
        />

        {tiers.length > 0 ? (
          <div
            className={`grid gap-8 items-center ${
              tiers.length === 1
                ? 'max-w-md mx-auto'
                : tiers.length === 2
                ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'
            }`}
          >
            {tiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        ) : (
          <EmptyState
            emoji="💰"
            title="No pricing tiers yet"
            description="Pricing plans will appear here once they are added in Cosmic."
          />
        )}

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change my plan later?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Absolutely. All plans include a 14-day free trial. No credit card required to get started.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}