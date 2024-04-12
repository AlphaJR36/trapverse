// pages/Home.tsx

import { useEffect, useState } from 'react'

import { Layout } from '@/pages/_layouts/app'

import { getArtist, searchTracks } from '../../../mocks/deezer'

interface Track {
  id: number
  title: string
  artist: string
  album: string
}

interface Artist {
  id: number
  name: string
  bio: string
}

export function Home() {
  const [trendingTracks, setTrendingTracks] = useState<Track[]>([])
  const [featuredArtists, setFeaturedArtists] = useState<Artist[]>([])

  useEffect(() => {
    const fetchTrendingTracks = async () => {
      try {
        const tracks = await searchTracks()
        setTrendingTracks(tracks)
      } catch (error) {
        console.error('Erro ao buscar músicas tendência:', error)
      }
    }

    const fetchFeaturedArtists = async () => {
      try {
        // Supondo que os IDs dos artistas em destaque sejam 1, 2 e 3
        const artistIds = [1, 2, 3]
        const artistsData = await Promise.all(
          artistIds.map((id) => getArtist(id)),
        )
        const filteredArtists = artistsData.filter(
          (artist) => artist !== undefined,
        ) as Artist[]
        setFeaturedArtists(filteredArtists)
      } catch (error) {
        console.error('Erro ao buscar artistas em destaque:', error)
      }
    }

    fetchTrendingTracks()
    fetchFeaturedArtists()
  }, [])

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center my-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Bem-vindo ao Nosso Site!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Explore as tendências e descubra músicas populares.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingTracks.map((track) => (
            <div
              key={track.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {track.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Artista: {track.artist}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Álbum: {track.album}
              </p>
              <a
                href={`/track/${track.id}`}
                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Explorar
              </a>
            </div>
          ))}
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Artistas em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArtists.map((artist) => (
              <div
                key={artist.id}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {artist.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Biografia: {artist.bio}
                </p>
                <a
                  href={`/artist/${artist.id}`}
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Ver mais
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
