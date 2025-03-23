import "./render-elements.styles.scss";

export const RenderElements: React.FC<{ item: any }> = ({ item }) => {
  console.log("Item: ", item);

  let element: any = null;

  switch (item?.type) {
    case "input":
      element = <input type="text" />;

    case "btnSubmit":
      element = (
        <>
          <button>Confirm</button>

          <p
            dangerouslySetInnerHTML={{
              __html: "<a href='https://example.com'>Click here</a>",
            }}
          />
        </>
      );

    case "label":
      element = (
        <label>
          {/* Si el item tiene un objeto label con traducción */}
          {item?.item?.label?.en || item?.item?.label?.es}
        </label>
      );

    default:
      element = null;
  }

  return (
    <div className="renderElement" key={item?.order}>
      {element}
    </div>
  );
};
