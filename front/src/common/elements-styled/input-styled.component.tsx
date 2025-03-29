import styled from "styled-components";

interface InputStyledProps {
  $customStyle?: string;
}

export const InputStyled = styled.input<InputStyledProps>`
  ${(props) => props.$customStyle}
`;
