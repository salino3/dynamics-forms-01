import React, { useState } from "react";
import { fnRenderElements } from "../../../hooks";
import { FormStyled } from "../../../common";
import "./form-home.styles.scss";

interface Props {
  formItems: any[];
  btnSubmitItem: any;
  style?: string;
}

export const FormHome: React.FC<Props> = ({
  formItems,
  btnSubmitItem,
  style,
}) => {
  const [formData, setFormData] = useState<any>();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    console.log("FormData: ", formData);
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <FormStyled onSubmit={handleSubmit} $customStyle={style} id="FormHome">
      {formItems.map((item) =>
        fnRenderElements(item, formData, setFormData, handleChange)
      )}
      {btnSubmitItem}
    </FormStyled>
  );
};
