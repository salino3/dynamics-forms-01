import React from "react";
import "./container-layout.styles.scss";

interface Props {
  children: React.ReactNode;
}

export const ContainerLayout: React.FC<Props> = ({ children }) => {
  return <div className="rootContainerLayout">{children}</div>;
};
