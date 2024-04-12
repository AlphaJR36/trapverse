import { useEffect, useState } from 'react'

import { Layout } from '@/pages/_layouts/app'

interface Trend {
  id: number
  title: string
  artist: string
  album: string
}

export function Trends() {
  const [trends, setTrends] = useState<Trend[]>([])

  useEffect(() => {
    fetchTrends()
  }, [])

  const fetchTrends = () => {
    const fakeData: Trend[] = [
      {
        id: 1,
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
      },
      {
        id: 2,
        title: 'Save Your Tears',
        artist: 'The Weeknd',
        album: 'After Hours',
      },
      {
        id: 3,
        title: 'drivers license',
        artist: 'Olivia Rodrigo',
        album: 'SOUR',
      },
      {
        id: 4,
        title: 'Levitating',
        artist: 'Dua Lipa',
        album: 'Future Nostalgia',
      },
      { id: 5, title: 'Peaches', artist: 'Justin Bieber', album: 'Justice' },
    ]
    setTrends(fakeData)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Tendências
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trends.map((trend) => (
            <div
              key={trend.id}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6"
            >
              <h2 className="text-xl text-gray-800 dark:text-white font-bold">
                {trend.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Artista: {trend.artist}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Álbum: {trend.album}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
