import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layouts/register-layout'
import Login from './pages/login'
import ProductList from './pages/porduct-list'
import Register from './pages/register'

export default function useRouterElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: <ProductList />
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
