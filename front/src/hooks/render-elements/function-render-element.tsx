import { DivStyled, ImgStyled } from "../../common";
import "./render-elements.styles.scss";

export function fnRenderElements(props: any) {
  console.log("Item: ", props);

  let element: any = null;

  switch (props?.type) {
    case "img":
      element = (
        <ImgStyled
          src={props?.item?.href}
          alt={props?.name}
          $customStyle={props?.item?.style}
        />
      );
      break;

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
      element = (
        <label>{props?.item?.label?.en || props?.item?.label?.es}</label>
      );
      break;

    default:
      element = null;
  }

  return (
    <DivStyled
      key={props?.order}
      $customStyle={props?.style}
      className="renderElement"
    >
      {element}
    </DivStyled>
  );
}
