import React from "react";
import { DivStyled, ImgStyled, InputStyled } from "../../common";
import "./render-elements.styles.scss";

export function fnRenderElements(
  props: any,
  formData?: any,
  setFormData?: React.Dispatch<any>,
  handleChange?: (event: any) => void
) {
  let element: any = null;
  let language = "en";

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
          value={formData && formData[props?.item?.name]}
          onChange={handleChange}
          type={props?.item?.type}
          // required={props?.item?.requiered}
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
