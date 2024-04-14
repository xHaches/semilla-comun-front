import React, { useState } from "react";
import InputText from "../../../../shared/components/forms/InputText/InputText";
import FormRow from "../../../../shared/components/forms/FormRow/FormRow";
import FormColumn from "../../../../shared/components/forms/FormColumn/FormColumn";

import "./MyProfile.css";
import PageHeader from "../../../../shared/components/layout/PageHeader/PageHeader";
import { UTCToInputDate } from "../../../../shared/helpers/UTCToInputDate";

const MyProfile = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

  return (
    <>
      <PageHeader text="Mi perfil" />
      <div className="my-profile">
        <FormRow>
          <FormColumn>
            <InputText value={user?.nombre} label="Nombre" disabled />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText
              value={user.apellido_materno}
              label="Apellido paterno"
              disabled
            />
          </FormColumn>
          <FormColumn>
            <InputText
              value={user.apellido_materno}
              label="Apellido paterno"
              disabled
            />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText value={user.usuario} label="Nickname" disabled />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText value={user.email} label="Email" disabled />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText value={user.telefono} label="Teléfono" disabled />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText value={user.calle} label="Calle" disabled />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText
              value={user.numero_exterior}
              label="Número exterior"
              disabled
            />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText
              value={user.numero_interior}
              label="Número interior"
              disabled
            />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText value={user.colonia} label="Colonia" disabled />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText value={user.municipio} label="Municipio" disabled />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText value={user.cp} label="Código postal" disabled />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText
              value={UTCToInputDate(user.fecha_nacimiento) || ""}
              label="Fecha de nacimiento"
              disabled
            />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <InputText
              value={UTCToInputDate(user.fecha_registro) || ""}
              label="Fecha de registro"
              disabled
            />
          </FormColumn>
        </FormRow>
      </div>
    </>
  );
};

export default MyProfile;
