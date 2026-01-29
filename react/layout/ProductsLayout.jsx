import React from "react";
import { Outlet } from "react-router";

const ProductsLayout = () => {
  return (
    <div>
      <img
        src="https://img.pikbest.com/templates/20240715/e-commerce-product-banner-design-with-green-colors_10669967.jpg!w700wp"
        className="w-full h-96 object-cover"
      />
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
