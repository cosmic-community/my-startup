interface SectionHeadingProps {
  tag?: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeading({
  tag,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span className="inline-block text-primary-600 text-sm font-semibold uppercase tracking-wider mb-2">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {description && (
        <p className={`text-gray-500 text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}