import { useState, useEffect } from 'react'
import { BookOpen, ExternalLink } from 'lucide-react'

export default function LocationInfo({ wikipediaPage }) {
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWikipediaInfo()
  }, [wikipediaPage])

  const fetchWikipediaInfo = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${wikipediaPage}`
      )
      const data = await response.json()
      setInfo(data)
    } catch (error) {
      console.error('Error fetching Wikipedia info:', error)
      setInfo(null)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <h4 className="font-semibold text-gray-900">Historical Context</h4>
        </div>
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    )
  }

  if (!info) {
    return null
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-blue-600" />
        <h4 className="font-semibold text-gray-900">Historical Context</h4>
      </div>

      {info.thumbnail && (
        <img
          src={info.thumbnail.source}
          alt={info.title}
          className="w-full rounded-lg mb-4"
        />
      )}

      <h5 className="font-bold text-lg text-gray-900 mb-2">{info.title}</h5>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        {info.extract}
      </p>

      <a
        href={info.content_urls?.desktop?.page}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
      >
        Read more on Wikipedia
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  )
}
