import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import App from "./App";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetailsPage from "./pages/details";
import ProductCart from "./pages/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route
          path="/products"
          element={
            <>
              <img
                src="https://img.pikbest.com/templates/20240715/e-commerce-product-banner-design-with-green-colors_10669967.jpg!w700wp"
                style={{
                  width: "100%",
                  height: "300px",
                  Object: "cover",
                }}
              />
              <Outlet />
            </>
          }
        >
          <Route index element={<Products />} />
          {/* <Route path=":id" elements={<ProductDetailsPage />} /> */}
          <Route path="cart" elements={<ProductCart />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
