import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Products'
export const mainRouters = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/products',
      element: <Products />
    },
  ];