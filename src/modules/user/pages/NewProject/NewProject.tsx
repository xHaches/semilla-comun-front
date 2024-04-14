import Screen from "../../../../shared/components/layout/Screen/Screen";
import PageHeader from "../../../../shared/components/layout/PageHeader/PageHeader";
import InputText from "../../../../shared/components/forms/InputText/InputText";

import "./NewProject.css";
import TextBox from "../../../../shared/components/forms/TextBox/TextBox";
import InputDate from "../../../../shared/components/forms/InputDate/InputDate";
import Button from "../../../../shared/components/forms/Button/Button";
import InputCurrency from "../../../../shared/components/forms/InputCurrency/InputCurrency";
import { Controller, useForm } from "react-hook-form";
import FormRow from "../../../../shared/components/forms/FormRow/FormRow";
import FormColumn from "../../../../shared/components/forms/FormColumn/FormColumn";
import { useCrear_ProyectoMutation } from "../../../../gql/schema";
import { fromInputToUTCDate } from "../../../../shared/helpers/fromInputToUTCDate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewProyect = () => {
  const [crearProyecto] = useCrear_ProyectoMutation();
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      proyectName: "",
      incomeGoal: "",
      implementationLimitDate: "",
      refindLimitDate: "",
      description: "",
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);
    crearProyecto({
      variables: {
        crear_proyecto_input: {
          descripcion: values.description,
          fecha_limite_implementacion: fromInputToUTCDate(
            values.implementationLimitDate
          ),
          fecha_limite_recaudacion: fromInputToUTCDate(values.refindLimitDate),
          localidad_id: user.localidad_id,
          meta_recaudacion: Number(values.incomeGoal),
          nombre: values.proyectName,
          usuario_administrador_id: user.usuario_id,
        },
      },
    }).then((r) => {
      navigate("/user/my-projects");
    });
  };

  return (
    <>
      <PageHeader text="Nuevo proyecto" />
      <Screen>
        <form className="new-project__form" onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <FormColumn>
              <Controller
                control={control}
                name="proyectName"
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
                  <InputText
                    onChange={onChange}
                    value={value}
                    label="Nombre del proyecto"
                    errorText={
                      errors.proyectName
                        ? "Por favor, ingrese un nombre para el proyecto"
                        : ""
                    }
                  />
                )}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Controller
                name="incomeGoal"
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
                  <InputCurrency
                    value={value}
                    onChange={onChange}
                    label="Meta de recaudación"
                    errorText={
                      errors.incomeGoal
                        ? "Por favor, ingrese un número mayor a 0"
                        : ""
                    }
                  />
                )}
              />
            </FormColumn>
            <FormColumn>
              <Controller
                name="implementationLimitDate"
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
                  <InputDate
                    label="Fecha límite de implementación"
                    value={value}
                    onChange={onChange}
                    errorText={
                      errors.implementationLimitDate
                        ? "Por favor, ingrese una fecha de recaudación válida"
                        : ""
                    }
                  />
                )}
              />
            </FormColumn>
          </FormRow>

          <FormRow>
            <FormColumn>
              <Controller
                name="refindLimitDate"
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
                  <InputDate
                    label="Fecha límite de fondeo"
                    value={value}
                    onChange={onChange}
                    errorText={
                      errors.refindLimitDate
                        ? "Por favor, ingrese una fecha de recaudación válida"
                        : ""
                    }
                  />
                )}
              />
            </FormColumn>
          </FormRow>

          <FormRow>
            <FormColumn>
              <Controller
                name="description"
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
                  <TextBox
                    value={value}
                    onChange={onChange}
                    errorText={
                      errors.description
                        ? "Por favor, ingrese una descripción"
                        : ""
                    }
                    label="Descripción"
                  />
                )}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <Button type="submit" text="Confirmar"></Button>
          </FormRow>
        </form>
      </Screen>
    </>
  );
};

export default NewProyect;
