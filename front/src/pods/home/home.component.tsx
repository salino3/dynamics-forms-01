import React, { useEffect } from "react";
import { PropsProduct, useProviderSelector } from "../../store";
import { ServicesApp } from "../../services";
import { RenderElements } from "../../hooks";
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
      {product &&
        product?.items_list?.length > 0 &&
        product?.items_list.map((item: PropsProduct) => (
          <RenderElements item={item} />
        ))}
    </div>
  );
};
