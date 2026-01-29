import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import App from "./App";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetailsPage from "./pages/details";
import ProductsCartPage from "./pages/Cart";
import MainLayout from "../layout/MainLayout";
import ProductsLayout from "../layout/ProductsLayout";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<Products />} />
            <Route path="cart" elements={<ProductsCartPage />} />
            <Route path=":id" elements={<ProductDetailsPage />} />
          </Route>
        </Route>

        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
