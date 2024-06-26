import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Controller, useForm } from "react-hook-form";
import { BanknotesIcon } from "@heroicons/react/16/solid";
import InputCurrency from "../../forms/InputCurrency/InputCurrency";
import FormRow from "../../forms/FormRow/FormRow";
import { useCrear_ContribucionMutation } from "../../../../gql/schema";

interface ModalPayProps {
  title: string;
  description: string;
  onClick: (isConfirmed: boolean) => void;
  isModalOpen: boolean;
  proyectId: string;
}

const ModalPay = ({
  description,
  onClick,
  title,
  isModalOpen,
  proyectId,
}: ModalPayProps) => {
  const cancelButtonRef = useRef(null);
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

  const [crearContribucion] = useCrear_ContribucionMutation();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      amount: "",
    },
  });

  useEffect(() => {
    reset();
  }, [isModalOpen]);

  const onSubmit = (values: any) => {
    console.log(values);
    crearContribucion({
      variables: {
        crear_contribucion: {
          monto: Number(values.amount),
          proyecto_id: proyectId,
          usuario_id: user.usuario_id,
        },
      },
    }).then(() => {
      onClick(true);
    });
  };

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => onClick(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 sm:mx-0 sm:h-10 sm:w-10">
                      <BanknotesIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="w-full flex justify-center">
                    <div className="w-1/2">
                      <Controller
                        name="amount"
                        control={control}
                        rules={{ required: true }}
                        render={({
                          field: { value, onChange },
                          formState: { errors },
                        }) => (
                          <InputCurrency
                            value={value}
                            onChange={onChange}
                            label=""
                            errorText={
                              errors.amount ? "Elige un monto mayor a 0" : ""
                            }
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Confirmar
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => {
                        onClick(false);
                      }}
                      ref={cancelButtonRef}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalPay;
