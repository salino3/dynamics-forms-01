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

    const requiredFields =
      formItems
        .filter((item: any) => item.type === "input" && item.item?.requiered)
        .map((item: any) => item.item.name) || [];

    const missingFields = requiredFields.filter(
      (field: any) => !formData || !formData[field]
    );

    if (missingFields.length > 0) {
      console.log("❌ Missing required fields:", missingFields);
      alert(`Please fill in the required fields: ${missingFields.join(", ")}`);

      const firstMissingField = document.getElementById(missingFields[0]);

      if (firstMissingField) {
        firstMissingField.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        (firstMissingField as HTMLInputElement).focus();
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
        fnRenderElements(item, formData, setFormData, handleChange)
      )}
      {btnSubmitItem}
    </FormStyled>
  );
};
