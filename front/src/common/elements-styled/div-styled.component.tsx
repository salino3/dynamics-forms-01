import styled from "styled-components";

interface DivStyledProps {
  className?: string;
  key?: string;
  $customStyle?: string;
}

export const DivStyled = styled.div<DivStyledProps>`
  ${(props) => props.$customStyle}
`;
