import React, { ReactNode } from "react";

import "./FormColumn.css";

const FormColumn = ({
  children,
}: {
  children: ReactNode | ReactNode[] | boolean;
}) => {
  return <div className="new-project__form__col">{children}</div>;
};

export default FormColumn;
