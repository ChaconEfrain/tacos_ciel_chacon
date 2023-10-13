import { useEffect, useId, useRef, useState } from "react";
import { VALID_DAYS } from "@/constants";
import { CloseButton, Soda, Taco } from "@/icons";

const Promotion = ({
  title,
  description,
  tacos,
  drinks,
  price,
  icon,
  chosenPromotion,
  setChosenPromotion,
}) => {
  // const [showForm, setShowForm] = useState(false);
  const [whatsAppMessage, setWhatsAppMessage] = useState("");
  const [isValidTime, setIsValidTime] = useState(false);
  const formRef = useRef(null);
  const nameId = useId();
  const isDomicilio = useId();
  const isNotDomicilio = useId();
  const [day, , , , fullHour] = new Date().toString().split(" ");
  const [hour, minutes] = fullHour.split(":");

  useEffect(() => {
    const validTime =
      VALID_DAYS.includes(day) &&
      ((Number(hour) === 7 && Number(minutes) >= 30) ||
        (Number(hour) > 7 && Number(hour) < 12) ||
        (Number(hour) === 12 && Number(minutes) === 0));
    setIsValidTime(validTime);
  }, []);

  const handleShowForm = () => {
    const newChosenPromotion = {};
    for (const promo of Object.keys(chosenPromotion)) {
      newChosenPromotion[promo] = false;
    }
    newChosenPromotion[title] = true;
    setChosenPromotion(newChosenPromotion);
    formRef.current.reset();
  };

  const handleClose = () =>
    setChosenPromotion((prev) => ({ ...prev, [title]: false }));

  const handleSend = (e) => {
    const formData = new FormData(formRef.current);
    const { nombreSolicitante, servicio } = Object.fromEntries(formData);
    if (!nombreSolicitante || !servicio) {
      e.preventDefault();
      return;
    }
    const message = `Hola! quisiera la promoción *${title}* por favor 😋%0A%0A🤓 Nombre: ${nombreSolicitante}%0A%0A🛵 Servicio: ${servicio}`;
    setWhatsAppMessage(message);
    handleClose();
    formRef.current.reset();
  };

  return (
    <article className="flex flex-col gap-2 relative overflow-x-hidden">
      <header className="flex items-center gap-2">
        <span className="bg-secondary-medium/50 rounded-full w-12 h-12 flex items-center justify-center shadow">
          <span className="w-6 h-6">{icon}</span>
        </span>
        <div className="flex gap-6 items-center">
          <p className="font-bold sm:text-2xl text-xl uppercase text-primary-dark/90">
            {title}
          </p>
          <strong className="sm:text-6xl text-5xl text-secondary-dark sm:hidden inline-block">
            {price}
          </strong>
        </div>
      </header>
      <p className="sm:text-xl text-lg mb-3">{description}</p>
      <div className="sm:text-xl text-lg flex flex-col gap-2">
        <span>Incluye:</span>
        <div className="grid grid-cols-2 items-center">
          <ul className="flex flex-col gap-3 ml-4">
            <li className="flex items-center gap-4">
              <Taco className="w-8 h-8" />
              {tacos}
            </li>
            <li className="flex items-center gap-4">
              <Soda className="w-8 h-8" />
              {drinks}
            </li>
          </ul>
          <div className="flex flex-col gap-2 items-center">
            <strong className="sm:text-6xl text-5xl text-secondary-dark sm:inline-block hidden">
              {price}
            </strong>
            {isValidTime ? (
              <button
                onClick={handleShowForm}
                className="bg-gradient-to-br from-secondary-medium to-secondary-dark font-bold rounded-full py-2 sm:px-16 px-4 text-white sm:text-2xl text-xl inline-block"
              >
                Solicitar
              </button>
            ) : (
              <em className="text-lg text-center">
                Disponible de Martes a Sábado, de 7:30am a 12:00pm
              </em>
            )}
          </div>
        </div>
      </div>
      <form
        ref={formRef}
        className={`bg-primary-dark/95 absolute h-full sm:w-4/5 w-full right-0 text-white flex flex-col justify-between p-6 sm:text-xl text-lg rounded-lg ${
          chosenPromotion[title] ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClose();
            formRef.current.reset();
          }}
          className="absolute top-2 right-2"
        >
          <CloseButton />
        </button>
        <div className="flex flex-col gap-4">
          <fieldset className="flex flex-col sm:gap-2 gap-1">
            <label htmlFor={nameId}>
              Nombre del solicitante
              <span className="text-secondary-medium">*</span>
            </label>
            <input
              defaultValue=""
              name="nombreSolicitante"
              type="text"
              id={nameId}
              className="py-2 px-6 focus:shadow-[0_0_0_2px_#ff7588] rounded-xl text-primary-dark"
            />
          </fieldset>
          <fieldset className="flex flex-col sm:gap-2 gap-1">
            <label>
              Servicio<span className="text-secondary-medium">*</span>
            </label>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <label htmlFor={isDomicilio}>A domicilio</label>
                <input
                  value="A domicilio"
                  type="radio"
                  id={isDomicilio}
                  name="servicio"
                  className="accent-secondary-medium"
                />
              </div>
              <div className="flex gap-1">
                <label htmlFor={isNotDomicilio}>Pasar a buscar</label>
                <input
                  value="Pasar a buscar"
                  type="radio"
                  id={isNotDomicilio}
                  name="servicio"
                  className="accent-secondary-medium"
                />
              </div>
            </div>
          </fieldset>
        </div>
        <a
          onClick={handleSend}
          href={`https://api.whatsapp.com/send?phone=529992787091&text=${whatsAppMessage}`}
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-br from-secondary-medium to-secondary-dark font-bold rounded-full py-2 sm:px-16 px-4 text-white sm:text-2xl text-xl inline-block text-center"
        >
          Enviar
        </a>
      </form>
    </article>
  );
};

export default Promotion;
