import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import MainLayout from './layouts/main-layout'
import RegisterLayout from './layouts/register-layout'
import Login from './pages/login'
import ProductList from './pages/porduct-list'
import ProfilePage from './pages/profile'
import Register from './pages/register'

const isAuthenticated = false

const ProtectedRoute = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

const RejectedRoute = () => {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouterElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/profile',
          element: (
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])

  return routerElement
}
