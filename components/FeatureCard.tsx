import type { Feature } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const name = getMetafieldValue(feature.metadata?.name) || feature.title
  const description = getMetafieldValue(feature.metadata?.description)
  const icon = getMetafieldValue(feature.metadata?.icon_emoji) || '✨'

  return (
    <div className="group bg-white rounded-2xl p-6 border border-gray-100 card-hover">
      <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-3xl mb-5 group-hover:bg-primary-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
      {description && (
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      )}
    </div>
  )
}