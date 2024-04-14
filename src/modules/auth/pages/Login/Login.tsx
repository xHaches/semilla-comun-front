import React from "react";
import InputText from "../../../../shared/components/forms/InputText/InputText";
import Button from "../../../../shared/components/forms/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import SeedFilled from "../../../../shared/icons/SeedFilled";

import "./Login.css";
import { Controller, useForm } from "react-hook-form";
import { AUTH_URI } from "../../../../config/uri";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);
    axios
      .post(AUTH_URI, {
        password: values.password,
        email: values.email,
      })
      .then((response) => {
        navigate("/user/home");
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.usuario || {})
        );
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.token || {})
        );
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
            Iniciar sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="email"
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  type="email"
                  label="Email"
                  value={value}
                  onChange={onChange}
                  errorText={errors.email ? "Ingrese un email válido" : ""}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{ required: true }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <InputText
                  type="password"
                  label="Contaseña"
                  value={value}
                  onChange={onChange}
                  errorText={errors.email ? "Ingrese la contraseña" : ""}
                />
              )}
            />
            <div>
              <Button text="Iniciar sesión" />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tienes cuenta?{" "}
            <Link
              to={"/register"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
