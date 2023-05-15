import { TRADUCTIONS } from "@/constants";
import { useState } from "react";

const EventDataConfirmation = ({ eventData, title, showModal, isShowing }) => {
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const { name, date, time, place, people, tacos, flavors } = eventData;

  const handleSendInfo = () => {
    const message = `Hola! Estoy interesad@ en el paquete *${title}*%0A%0ALos datos de mi evento son:%0A%0A🤓 Nombre: ${name}%0A%0A📆 Fecha: ${date}%0A%0A⌚ Hora: ${time}%0A%0A📍 Lugar: ${place}%0A%0A💃 Personas: ${people} personas%0A%0A🌮 Tacos: ${tacos}%0A%0A🥘 Guisos: ${flavors}`;
    setWhatsappMessage(message);
  };

  const editForm = () => {
    showModal(false);
  };

  return (
    <>
      <article
        className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-30 bg-secondary-light p-6 flex flex-col gap-6 rounded-xl ${
          !isShowing ? "scale-0" : "scale-100"
        } transition-all duration-300 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]`}
      >
        <div className="flex flex-col gap-2">
          <p className="sm:text-2xl text-xl">
            Corrobora la información de tu evento
          </p>
          <ul className="sm:ml-6">
            {Object.entries(eventData).map(([key, value]) => (
              <li key={key} className="flex gap-2">
                <strong className="text-secondary-medium">
                  {TRADUCTIONS[key]}:
                </strong>
                {key === "flavors" ? (
                  <span>
                    {value.filter((el) => typeof el !== "undefined").join(", ")}
                  </span>
                ) : (
                  <span>{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <footer className="flex gap-2">
          <a
            href={`https://api.whatsapp.com/send?phone=529992787091&text=${whatsappMessage}`}
            onClick={handleSendInfo}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-br from-secondary-medium to-secondary-dark font-bold rounded-full py-2 px-10 text-white col-span-full sm:text-2xl text-xl text-center inline-block w-1/2"
          >
            Enviar
          </a>
          <button
            className="bg-gradient-to-br from-secondary-medium to-secondary-dark font-bold rounded-full py-2 px-10 text-white col-span-full sm:text-2xl text-xl text-center w-1/2"
            onClick={editForm}
          >
            Editar
          </button>
        </footer>
      </article>
      <div
        className={`top-0 left-0 right-0 bottom-0 bg-secondary-darkest/70 z-20 ${
          !isShowing ? "hidden" : "absolute"
        }`}
      />
    </>
  );
};

export default EventDataConfirmation;
