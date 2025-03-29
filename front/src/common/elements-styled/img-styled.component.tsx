import styled, { css } from "styled-components";

interface ImgStyledProps {
  src?: string;
  alt?: string;
  $customStyle?: string;
}

export const ImgStyled = styled.img<ImgStyledProps>`
  ${(props) => props.$customStyle}
`;
