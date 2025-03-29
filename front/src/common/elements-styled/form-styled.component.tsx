import styled from "styled-components";

interface FormStyledProps {
  className?: string;
  key?: string;
  id?: string;
  $customStyle?: string;
}

export const FormStyled = styled.form<FormStyledProps>`
  ${(props) => props.$customStyle}
`;
