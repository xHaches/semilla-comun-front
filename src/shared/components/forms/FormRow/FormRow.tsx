import React, { ReactNode } from "react";

import "./FormRow.css";

const FormRow = ({
  children,
}: {
  children: ReactNode | ReactNode[] | boolean;
}) => {
  return <div className="new-project__form__row">{children}</div>;
};

export default FormRow;
