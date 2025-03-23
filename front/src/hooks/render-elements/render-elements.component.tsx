import "./render-elements.styles.scss";

export const RenderElements: React.FC<{ item: any }> = ({ item }) => {
  console.log("Item: ", item);

  let element: any = null;

  switch (item?.type) {
    case "input":
      element = <input type="text" />;
      break;

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
      break;

    case "label":
      element = <label>{item?.item?.label?.en || item?.item?.label?.es}</label>;
      break;

    default:
      element = null;
  }

  return <div className="renderElement">{element}</div>;
};
