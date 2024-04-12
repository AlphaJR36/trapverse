import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Layout } from '@/pages/_layouts/app'

import { getArtist } from '../../../mocks/deezer'

interface Artist {
  id: number
  name: string
  bio: string
  albums: { id: number; title: string; year: number }[]
}

export function ArtistPage() {
  const { artistId } = useParams<{ artistId?: string }>() // Defina artistId como opcional
  const [artist, setArtist] = useState<Artist | null>(null)

  useEffect(() => {
    if (!artistId) return
    const fetchArtist = async () => {
      try {
        const artistData = await getArtist(parseInt(artistId))
        if (artistData) {
          setArtist(artistData)
        } else {
          console.error('Artista não encontrado')
        }
      } catch (error) {
        console.error('Erro ao buscar informações do artista:', error)
      }
    }

    fetchArtist()
  }, [artistId])

  if (!artist) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {artist.name}
          </h1>
          <p className="text-gray-600">{artist.bio}</p>
        </div>
      </div>
    </Layout>
  )
}
