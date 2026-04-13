import type { PricingTier } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PricingCardProps {
  tier: PricingTier
}

export default function PricingCard({ tier }: PricingCardProps) {
  const planName = getMetafieldValue(tier.metadata?.plan_name) || tier.title
  const price = tier.metadata?.price
  const billingPeriod = getMetafieldValue(tier.metadata?.billing_period) || 'month'
  const featuresListRaw = getMetafieldValue(tier.metadata?.features_list)
  const ctaText = getMetafieldValue(tier.metadata?.cta_text) || 'Get Started'
  const isFeatured = tier.metadata?.featured === true

  const features = featuresListRaw
    ? featuresListRaw.split('\n').map((f) => f.trim()).filter(Boolean)
    : []

  return (
    <div
      className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
        isFeatured
          ? 'border-primary-500 bg-white shadow-xl scale-105'
          : 'border-gray-100 bg-white hover:border-primary-200 hover:shadow-lg'
      }`}
    >
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{planName}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-extrabold text-gray-900">
            {typeof price === 'number' ? `$${price}` : 'Custom'}
          </span>
          {typeof price === 'number' && (
            <span className="text-gray-500 text-sm">/{billingPeriod}</span>
          )}
        </div>
      </div>

      {features.length > 0 && (
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <button
        className={`w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all ${
          isFeatured
            ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:from-primary-700 hover:to-accent-600 shadow-md hover:shadow-lg'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {ctaText}
      </button>
    </div>
  )
}