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

    setFormDataError((prev: any) => ({
      ...prev,
      [name]: "",
    }));
  };

  //
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const errors: any = {};

    const invalidFields = formItems.filter((prop) => {
      const fieldValue = formData?.[prop.item.name];

      if (prop.item.requiered && !fieldValue) {
        errors[prop.item.name] = `${prop.item.label[language] || "en"} ${
          prop.item.requieredMessage[language] || "en"
        }`;
        return true;
      }

      if (prop.item.regexList && Array.isArray(prop.item.regexList)) {
        for (let i = 0; i < prop?.item?.regexList.length; i++) {
          const { regex, errorMessage } = prop.item.regexList[i];
          const regexTest = new RegExp(regex);

          if (fieldValue && !regexTest.test(fieldValue)) {
            errors[prop.item.name] = errorMessage[language];
            return true;
          }
        }
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

    alert(JSON.stringify(formData, null, 2));
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
