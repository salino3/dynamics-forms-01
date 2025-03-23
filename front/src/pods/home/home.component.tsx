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

  const list =
    product && product?.items_list?.length > 0
      ? [...product?.items_list].sort(
          (a: { order: number }, b: { order: number }) => a?.order - b?.order
        )
      : [];

  const btnSubmit =
    product && product?.items_list?.length > 0
      ? [...product?.items_list].find((i: any) => i?.type === "btnSubmit")
      : undefined;

  return (
    <div className="rootHomePage">
      <h1>Home page</h1>
      <p>{product && product?.id}</p>
      {list.map(
        (item: any) => item?.order < 0 && <RenderElements item={item} />
      )}
      <form>
        {list.map(
          (item: any) =>
            item?.order > 0 &&
            item?.order < btnSubmit?.order && <RenderElements item={item} />
        )}
        {<RenderElements item={btnSubmit} />}
      </form>
      {list.map(
        (item: any) =>
          item?.order > btnSubmit?.order && <RenderElements item={item} />
      )}
    </div>
  );
};
