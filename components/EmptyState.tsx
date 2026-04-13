interface EmptyStateProps {
  emoji?: string
  title: string
  description?: string
}

export default function EmptyState({ emoji = '📭', title, description }: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      <span className="text-6xl block mb-4">{emoji}</span>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-gray-500 max-w-md mx-auto">{description}</p>
      )}
    </div>
  )
}