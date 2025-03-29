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

let language = "en";

export const FormHome: React.FC<Props> = ({
  formItems,
  btnSubmitItem,
  product,
}) => {
  const [formData, setFormData] = useState<any>();
  const [formDataError, setFormDataError] = useState<any>();

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const errors: any = {};

    const invalidFields = formItems.filter((item) => {
      const fieldValue = formData?.[item.item.name];
      const regex = new RegExp(item.item.regex);

      if (item.item.requiered && !fieldValue) {
        errors[item.item.name] = `${
          item.item.label[language] || "en"
        } is required`;
        return true;
      }

      if (item.item.regex && fieldValue && !regex.test(fieldValue)) {
        errors[item.item.name] = `${
          item.item.label?.en || item.item.label?.es
        } is invalid`;
        return true;
      }

      return false;
    });

    setFormDataError(errors);

    if (invalidFields.length > 0) {
      const firstInvalidField = document.getElementById(
        invalidFields[0]?.item.name
      );
      if (firstInvalidField) {
        firstInvalidField.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        (firstInvalidField as HTMLInputElement).focus();
      }

      return;
    }

    console.log("FormData: ", formData);
  }

  return (
    <FormStyled
      onSubmit={handleSubmit}
      $customStyle={product?.general_styles}
      id="FormHome"
    >
      {formItems.map((item) =>
        fnRenderElements(item, formData, handleChange, formDataError)
      )}
      {btnSubmitItem}
    </FormStyled>
  );
};
