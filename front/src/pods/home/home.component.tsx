import React, { useEffect } from "react";
import { useProviderSelector } from "../../store";
import { ServicesApp } from "../../services";
import "./home.styles.scss";

export const HomePage: React.FC = () => {
  const { setProducts, product } = useProviderSelector(
    "setProducts",
    "product"
  );

  useEffect(() => {
    ServicesApp?.fetchMockItems().then(
      (res) => setProducts && setProducts(res)
    );
  }, []);
  return (
    <div className="rootHomePage">
      <h1>Home page</h1>
      <p>{product && product?.id}</p>
    </div>
  );
};
