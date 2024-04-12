// src/pages/Popular.tsx

import { useEffect, useState } from 'react'

import { Layout } from '@/pages/_layouts/app'

// Define o tipo para os dados das músicas populares
interface Popular {
  id: number
  title: string
  artist: string
  album: string
}

export function Popular() {
  // Estado para armazenar as músicas populares
  const [popularSongs, setPopularSongs] = useState<Popular[]>([])

  useEffect(() => {
    // Simula a busca por músicas populares ao carregar a página
    fetchPopularSongs()
  }, [])

  // Função para buscar as músicas populares (simulada)
  const fetchPopularSongs = () => {
    // Aqui você pode fazer uma requisição real para obter os dados das músicas populares
    // Exemplo de dados fictícios
    const fakeData: Popular[] = [
      {
        id: 1,
        title: 'Levitating',
        artist: 'Dua Lipa',
        album: 'Future Nostalgia',
      },
      {
        id: 2,
        title: 'Save Your Tears',
        artist: 'The Weeknd',
        album: 'After Hours',
      },
      {
        id: 3,
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
      },
      {
        id: 4,
        title: 'drivers license',
        artist: 'Olivia Rodrigo',
        album: 'SOUR',
      },
      { id: 5, title: 'Peaches', artist: 'Justin Bieber', album: 'Justice' },
    ]
    setPopularSongs(fakeData)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Músicas Populares
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularSongs.map((song) => (
            <div
              key={song.id}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6"
            >
              <h2 className="text-xl text-gray-800 dark:text-white font-bold">
                {song.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Artista: {song.artist}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Álbum: {song.album}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
