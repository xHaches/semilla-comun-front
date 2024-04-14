import React, { useEffect } from "react";
import InputText from "../../../../shared/components/forms/InputText/InputText";
import Button from "../../../../shared/components/forms/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import SeedFilled from "../../../../shared/icons/SeedFilled";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { REGISTER_URI } from "../../../../config/uri";
import Dropdown from "../../../../shared/components/forms/Dropdown/Dropdown";
import { useLocalidadesQuery } from "../../../../gql/schema";
import InputDate from "../../../../shared/components/forms/InputDate/InputDate";
import { fromInputToUTCDate } from "../../../../shared/helpers/fromInputToUTCDate";

const Register = () => {
  const { data } = useLocalidadesQuery();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      aPaterno: "",
      aMaterno: "",
      names: "",
      nickName: "",
      email: "",
      calle: "",
      numero_exterior: "",
      numero_interior: "",
      colonia: "",
      municipio: "",
      telefono: "",
      cp: "",
      fecha_nacimiento: "",
      password: "",
      localidad: { name: "", id: "" },
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);
    axios
      .post(REGISTER_URI, {
        nombre: values.names,
        apellido_materno: values.aPaterno,
        apellido_paterno: values.aMaterno,
        usuario: values.nickName,
        password: values.password,
        email: values.email,
        telefono: values.telefono,
        calle: values.calle,
        localidad_id: values.localidad.id,
        numero_exterior: values.numero_exterior,
        numero_interior: values.numero_interior,
        colonia: values.colonia,
        municipio: values.municipio,
        cp: values.cp,
        fecha_nacimiento: fromInputToUTCDate(values.fecha_nacimiento),
      })
      .then((response) => {
        navigate("/user/home");
        localStorage.setItem("user", JSON.stringify(response.data.usuario));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        console.log({ response });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-color">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <SeedFilled width={50} height={50} color="var(--green-400)" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Nueva cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="aPaterno"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="text"
                  label="Apellido paterno"
                  errorText={
                    errors.aPaterno ? "Ingresa un Apellido paterno" : ""
                  }
                />
              )}
            />

            <Controller
              name="aMaterno"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="text"
                  label="Apellido materno"
                  errorText={
                    errors.aMaterno ? "Ingresa un Apellido materno" : ""
                  }
                />
              )}
            />
            <Controller
              name="names"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="text"
                  label="Nombres"
                  errorText={errors.names ? "Ingresa tu(s) nombre(s)" : ""}
                />
              )}
            />
            <Controller
              name="nickName"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="text"
                  label="Nickname"
                  errorText={errors.nickName ? "Ingresa un nickname" : ""}
                />
              )}
            />
            <Controller
              name="telefono"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="text"
                  label="Teléfono"
                  errorText={errors.telefono ? "Ingresa un número" : ""}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="email"
                  label="Email"
                  errorText={
                    errors.email ? "Ingresa un correo electrónico" : ""
                  }
                />
              )}
            />

            <Controller
              name="calle"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="text"
                  label="Calle"
                  errorText={errors.calle ? "Ingresa tu calle" : ""}
                />
              )}
            />
            <Controller
              name="numero_exterior"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="text"
                  label="Número exterior"
                  errorText={
                    errors.numero_exterior ? "Ingresa tu número exterior" : ""
                  }
                />
              )}
            />
            <Controller
              name="numero_interior"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="text"
                  label="Número interior"
                  errorText={
                    errors.numero_interior ? "Ingresa tu número interior" : ""
                  }
                />
              )}
            />
            <Controller
              name="colonia"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="text"
                  label="Colonia"
                  errorText={errors.colonia ? "Ingresa tu número colonia" : ""}
                />
              )}
            />
            <Controller
              name="municipio"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="text"
                  label="Municipio"
                  errorText={errors.municipio ? "Ingresa tu municipio" : ""}
                />
              )}
            />
            <Controller
              name="cp"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="text"
                  label="Código postal"
                  errorText={errors.municipio ? "Ingresa tu código postal" : ""}
                />
              )}
            />
            <Controller
              name="fecha_nacimiento"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputDate
                  value={value}
                  onChange={onChange}
                  label="Fecha de nacimiento"
                  errorText={
                    errors.fecha_nacimiento
                      ? "Ingresa tu fecha de nacimiento"
                      : ""
                  }
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  type="password"
                  label="Contraseña"
                  errorText={errors.aPaterno ? "Ingresa una contraseña" : ""}
                />
              )}
            />

            <Controller
              name="localidad"
              control={control}
              rules={{ required: true, validate: (d) => !!d.id }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <Dropdown
                  value={value}
                  label="Localidad"
                  onChange={onChange}
                  items={data?.localidades.map((l) => ({
                    id: l.localidad_id,
                    name: l.nombre,
                  }))}
                  errorText={errors.localidad ? "Elige una localidad" : ""}
                />
              )}
            />

            <div>
              <Button type="submit" text="Regístrate" />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Ya tienes cuenta?{" "}
            <Link
              to={"/login"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
