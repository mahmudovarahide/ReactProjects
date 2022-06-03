import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Products'
import Product from '../Pages/Products/Product'
import Cart from '../Pages/Cart';

export const mainRouters = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/products',
      element: <Products />
    },
    {
      path: '/products/:id',
      element: <Product />
    },
    {
      path: '/cart',
      element: <Cart/>
    },
  ];