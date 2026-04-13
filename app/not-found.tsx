import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <span className="text-7xl block mb-6">🔍</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl hover:from-primary-700 hover:to-accent-600 transition-all shadow-md"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}