import { useState } from "react";
import { MAX_FLAVORS_AMOUNT } from "@/constants";

const useEventData = ({
  eventData,
  showModal,
  setFormData,
  setError,
  form,
  title,
}) => {
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const { name, date, time, place, people, tacos, flavors } = eventData;

  const handleSendInfo = () => {
    const message = `Hola! Estoy interesad@ en el paquete *${title}*%0A%0ALos datos de mi evento son:%0A%0A🤓 Nombre: ${name}%0A%0A📆 Fecha: ${date}%0A%0A⌚ Hora: ${time}%0A%0A📍 Lugar: ${place}%0A%0A💃 Personas: ${people} personas%0A%0A🌮 Tacos: ${tacos}%0A%0A🥘 Guisos: ${flavors
      .filter((el) => typeof el !== "undefined")
      .join(", ")}`;
    setWhatsappMessage(message);
    showModal(false);
    setFormData({
      name: "",
      date: "",
      time: "",
      place: "",
      people: "",
      tacos: "",
      flavors: new Array(MAX_FLAVORS_AMOUNT),
    });
    form.current.reset();
    setError({
      name: "El nombre es requerido",
      date: "Una fecha es requerida",
      time: "Una hora es requerida",
      place: "Un lugar es requerido",
      people: "La cantidad de personas es requerida",
      tacos: "La cantidad de tacos es requerida",
      flavors: "Mínimo cuatro guisos es requerido",
    });
  };

  const editForm = () => {
    showModal(false);
  };

  return { editForm, handleSendInfo, whatsappMessage };
};

export default useEventData;
