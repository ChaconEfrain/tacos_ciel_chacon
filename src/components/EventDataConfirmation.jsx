import { useState } from "react";

const EventDataConfirmation = ({ eventData, title }) => {
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const { name, date, time, place, people, tacos, flavors } = eventData;

  const handleSendInfo = () => {
    const message = `Hola! Estoy interesad@ en el paquete *${title}*%0A%0ALos datos de mi evento son:%0A%0A🤓 Nombre: ${name}%0A%0A📆 Fecha: ${date}%0A%0A⌚ Hora: ${time}%0A%0A📍 Lugar: ${place}%0A%0A💃 Personas: ${people}%0A%0A🌮 Tacos: ${tacos}%0A%0A🥘 Guisos: ${flavors}`;
    setWhatsappMessage(message);
  };

  return (
    <div>
      <p>Corrobora la información de tu evento</p>
      <ul>
        {Object.entries(eventData).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <footer>
        <a
          href={`https://api.whatsapp.com/send?phone=529999943965&text=${whatsappMessage}`}
          onClick={handleSendInfo}
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-br from-secondary-medium to-secondary-dark font-bold rounded-full py-2 px-10 text-white col-span-full text-2xl text-center"
        >
          Enviar
        </a>
        <button className="bg-gradient-to-br from-secondary-medium to-secondary-dark font-bold rounded-full py-2 px-10 text-white col-span-full text-2xl text-center">
          Editar
        </button>
      </footer>
    </div>
  );
};

export default EventDataConfirmation;
