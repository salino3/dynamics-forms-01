import React, { useEffect, useMemo } from "react";
import { useProviderSelector } from "../../store";
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
  }, [setProducts]);

  // Order and separate elements
  const { headerItems, formItems, btnSubmitItem, footerItems } = useMemo(() => {
    let headerItems: any[] = [];
    let formItems: any[] = [];
    let btnSubmitItem: any = undefined;
    let footerItems: any[] = [];

    if (product && product.items_list && product.items_list.length > 0) {
      // deconstruct array and sorted
      const sorted = [...product.items_list].sort(
        (a: { order: number }, b: { order: number }) => a.order - b.order
      );

      sorted.forEach((item: any) => {
        if (item.order < 0) {
          headerItems.push(item);
        } else if (item.order >= 0) {
          if (item.type === "btnSubmit") {
            btnSubmitItem = item;
          } else if (!btnSubmitItem) {
            formItems.push(item);
          } else {
            footerItems.push(item);
          }
        }
      });
    }
    return { headerItems, formItems, btnSubmitItem, footerItems };
  }, [product]);

  return (
    <div className="rootHomePage">
      <h1>Home page</h1>
      <p>{product && product.id}</p>

      {headerItems.map((item) => (
        <RenderElements key={item.order} item={item} />
      ))}

      <form>
        {formItems.map((item) => (
          <RenderElements key={item.order} item={item} />
        ))}
        {btnSubmitItem && (
          <RenderElements key={btnSubmitItem.order} item={btnSubmitItem} />
        )}
      </form>

      {footerItems.map((item) => (
        <RenderElements key={item.order} item={item} />
      ))}
    </div>
  );
};
