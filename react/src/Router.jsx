import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />

        <Route Path="/Products" elements={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
