import { DateTime } from "luxon";

// ej: '1999-04-14'
export const fromInputToUTCDate = (inputDate: string) => {
  const fechaInicial = DateTime.fromISO(inputDate);
  const fechaTransformada = fechaInicial.set({
    hour: 6,
    minute: 0,
    second: 0,
    millisecond: 0,
  });

  // Convertir la fecha a formato ISO 8601 con la zona horaria UTC
  return fechaTransformada.toISO({ includeOffset: false });
};
