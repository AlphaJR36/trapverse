import { Layout } from '@/pages/_layouts/app'

export function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Sobre Nós
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Somos uma plataforma dedicada a fornecer acesso fácil e conveniente à
          música. Nosso objetivo é tornar a descoberta de novas músicas uma
          experiência agradável e envolvente para todos os nossos usuários.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Sinta-se à vontade para explorar nossas páginas de tendências, músicas
          populares e artistas em destaque para encontrar sua próxima música
          favorita.
        </p>
      </div>
    </Layout>
  )
}
