import { DateTime } from "luxon";

export const UTCToInputDate = (UTCDate: string) => {
  // Crear un objeto DateTime con la fecha en formato ISO 8601
  const fechaTransformada = DateTime.fromISO(UTCDate, {
    zone: "utc",
  });

  // Obtener la fecha en el formato deseado ("YYYY-MM-DD")
  return fechaTransformada.toISODate();
};
