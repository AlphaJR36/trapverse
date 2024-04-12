import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | TrapVerse" />
      <ThemeProvider defaultTheme="dark" storageKey="trapverse-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
