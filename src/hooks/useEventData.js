import { useState } from "react";
import { MAX_FLAVORS_AMOUNT } from "@/constants";

const useEventData = ({
  eventData,
  showModal,
  setFormData,
  setError,
  form,
  title,
  initialData,
  initialError,
}) => {
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const { name, date, time, place, people, tacos, flavors } = eventData;

  const handleSendInfo = () => {
    const message = `Hola! Estoy interesad@ en ${
      time ? "el pquete" : "la charola"
    } *${title}*%0A%0ALos datos de mi ${
      time ? "evento" : "pedido"
    } son:%0A%0A🤓 Nombre: ${name}%0A%0A📆 Fecha: ${date}%0A%0A${
      time ? `⌚ Hora: ${time}%0A%0A` : ""
    }${
      place ? `📍 Lugar: ${place}%0A%0A` : ""
    }💃 Personas: ${people} personas%0A%0A🌮 Tacos: ${tacos}%0A%0A🥘 Guisos: ${flavors
      .filter((el) => typeof el !== "undefined")
      .join(", ")}`;
    setWhatsappMessage(message);
    showModal(false);
    setFormData(initialData);
    form.current.reset();
    setError(initialError);
  };

  const editForm = () => {
    showModal(false);
  };

  return { editForm, handleSendInfo, whatsappMessage };
};

export default useEventData;
