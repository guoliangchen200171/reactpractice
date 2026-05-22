import { Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

export const appRoutes = (
  <Route element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="products" element={<ProductsPage />} />
    <Route path="products/:id" element={<ProductDetailPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
)
