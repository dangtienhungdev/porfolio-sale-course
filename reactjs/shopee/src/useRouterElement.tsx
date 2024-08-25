import Login from './pages/login'
import MainLayout from './layouts/main-layout'
import ProductList from './pages/porduct-list'
import Register from './pages/register'
import RegisterLayout from './layouts/register-layout'
import { useRoutes } from 'react-router-dom'

export default function useRouterElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
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
  ])

  return routerElement
}
