import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404.tsx'
import { ArtistPage } from './pages/app/artist/index.tsx'
import { Home } from './pages/app/home/index.tsx'
import { PrivacyPolicy } from './pages/app/privacy/index.tsx'
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
