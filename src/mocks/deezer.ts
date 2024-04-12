// api/deezer.ts

// Definindo um tipo para as músicas
interface Track {
  id: number
  title: string
  artist: string
  album: string
}

// Função para pesquisar músicas
export const searchTracks = async (): Promise<Track[]> => {
  // Simulação de dados de músicas
  const tracks: Track[] = [
    {
      id: 1,
      title: 'Shape of You',
      artist: 'Ed Sheeran',
      album: '÷ (Deluxe)',
    },
    {
      id: 2,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
    },
    {
      id: 3,
      title: 'Someone You Loved',
      artist: 'Lewis Capaldi',
      album: 'Divinely Uninspired To A Hellish Extent',
    },
    // Adicione mais músicas conforme necessário
  ]

  // Simulação de pesquisa de músicas
  // Aqui você pode implementar a lógica real para buscar músicas de uma API externa
  // Por enquanto, estamos retornando dados estáticos
  return tracks
}

// Dados estáticos simulando informações de um artista
export const getArtist = (artistId: number) => {
  // Simulação de dados do artista
  const artists = [
    {
      id: 1,
      name: 'Ed Sheeran',
      bio: 'Edward Christopher Sheeran, mais conhecido como Ed Sheeran, é um cantor e compositor britânico.',
      albums: [
        { id: 1, title: '÷ (Deluxe)', year: 2017 },
        { id: 2, title: '×', year: 2014 },
        { id: 3, title: '+', year: 2011 },
      ],
    },
    {
      id: 2,
      name: 'The Weeknd',
      bio: 'Abel Makkonen Tesfaye, mais conhecido como The Weeknd, é um cantor, compositor e produtor musical canadense.',
      albums: [
        { id: 4, title: 'After Hours', year: 2020 },
        { id: 5, title: 'Starboy', year: 2016 },
        { id: 6, title: 'Beauty Behind the Madness', year: 2015 },
      ],
    },
    {
      id: 3,
      name: 'Lewis Capaldi',
      bio: 'Lewis Marc Capaldi é um cantor e compositor britânico nascido em 7 de outubro de 1996. Sua música "Someone You Loved" alcançou grande sucesso.',
      albums: [
        { id: 7, title: 'Divinely Uninspired To A Hellish Extent', year: 2019 },
        { id: 8, title: 'Breach', year: 2018 },
      ],
    },
    {
      id: 4,
      name: 'Billie Eilish',
      bio: "Billie Eilish Pirate Baird O'Connell é uma cantora e compositora norte-americana. Nascida e criada em Los Angeles, Califórnia, ela iniciou sua carreira musical aos 14 anos.",
      albums: [
        {
          id: 9,
          title: 'When We All Fall Asleep, Where Do We Go?',
          year: 2019,
        },
        { id: 10, title: "Don't Smile at Me", year: 2017 },
      ],
    },
    // Adicione mais artistas conforme necessário
  ]

  // Encontrar o artista pelo ID
  const artist = artists.find((artist) => artist.id === artistId)

  return artist
}
