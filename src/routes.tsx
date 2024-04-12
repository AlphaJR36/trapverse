import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404.tsx'
import { About } from './pages/app/about/index.tsx'
import { ArtistPage } from './pages/app/artist/index.tsx'
import { Home } from './pages/app/home/index.tsx'
import { Popular } from './pages/app/popular/index.tsx'
import { PrivacyPolicy } from './pages/app/privacy/index.tsx'
import { Trends } from './pages/app/trade/index.tsx'
// import { SignIn } from './pages/auth/sign-in.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/trend',
        element: <Trends />,
      },
      {
        path: '/popular',
        element: <Popular />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/artist/:id',
        element: <ArtistPage />,
      },
    ],
  },
])
