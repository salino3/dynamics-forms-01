import React from "react";
import { DivStyled, ImgStyled, InputStyled } from "../../common";
import "./render-elements.styles.scss";

let language = "en";

export function fnRenderElements(
  props: any,
  formData?: any,
  // setFormData?: React.Dispatch<any>,
  handleChange?: (event: any) => void,
  formDataError?: any
) {
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
      element = (
        <InputStyled
          placeholder={props?.item?.label[language]}
          id={props?.item?.name}
          name={props?.item?.name}
          value={(formData && formData[props?.item?.name]) || ""}
          onChange={handleChange}
          type={props?.item?.type}
        />
      );
      break;

    case "btnSubmit":
      element = (
        <button type={props?.item?.type}>
          {props?.item?.label[language || "en"]}
        </button>
      );
      break;

    case "label":
      element = <label>{props?.item?.label[language || "en"]}</label>;
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
      {formDataError && formDataError[props?.item?.name] && (
        <small className="smallErrorMessage">
          {formDataError[props?.item?.name]}
        </small>
      )}
    </DivStyled>
  );
}

{
  /* <p
dangerouslySetInnerHTML={{
  __html: "<a href='https://example.com'>Click here</a>",
}}
/> */
}
