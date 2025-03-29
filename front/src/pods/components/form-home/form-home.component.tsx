import React, { useState } from "react";
import { fnRenderElements } from "../../../hooks";
import { FormStyled } from "../../../common";
import { PropsProduct } from "../../../store";
import "./form-home.styles.scss";

interface Props {
  formItems: any[];
  btnSubmitItem: any;
  product: PropsProduct | undefined;
}

export const FormHome: React.FC<Props> = ({
  formItems,
  btnSubmitItem,
  product,
}) => {
  const [formData, setFormData] = useState<any>();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    for (let data in formData) {
      if (!formData[data]) {
        return;
      }
    }
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
    <FormStyled
      onSubmit={handleSubmit}
      $customStyle={product?.general_styles}
      id="FormHome"
    >
      {formItems.map((item) =>
        fnRenderElements(item, formData, setFormData, handleChange)
      )}
      {btnSubmitItem}
    </FormStyled>
  );
};
