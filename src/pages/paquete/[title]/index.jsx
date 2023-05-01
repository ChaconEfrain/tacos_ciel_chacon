import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import MenuDropdownList from "@/components/MenuDropdownList";
import { PACKAGES } from "@/constants";

const EventsForm = () => {
  const router = useRouter();
  const formRef = useRef(null);
  const [whatsappMessage, setWhatsappMessage] = useState("");
  const [packageSelectedOptions, setPackageSelectedOptions] = useState([]);
  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    place: "",
    people: "",
    tacos: "",
    flavors: [],
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (router.isReady) {
      const { title } = router.query;
      document.title = `Paquete ${title}`;
      const options = PACKAGES.find(
        (packageEl) => packageEl.title === title
      ).options;
      setTitle(title);
      setPackageSelectedOptions(options);
    }
  }, [router.isReady]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData };
    if (name === "flavors") newFormData[name].push(value);
    else newFormData[name] = value;
    setFormData(newFormData);
  };

  const handleSendInfo = () => {
    const anyFieldEmpty = Object.values(formData).some(
      (field) => field === "" || field.length === 0
    );
    if (anyFieldEmpty) setError("Todos los campos son requeridos");
    const { name, date, time, place, people, tacos, flavors } = formData;
    const message = `Hola! Estoy interesad@ en el paquete *${title}*%0A%0ALos datos de mi evento son:%0A%0A🤓 Nombre: ${name}%0A%0A📆 Fecha: ${date}%0A%0A⌚ Hora: ${time}%0A%0A📍 Lugar: ${place}%0A%0A💃 Personas: ${people}%0A%0A🌮 Tacos: ${tacos}%0A%0A🥘 Guisos: ${flavors}`;
    setWhatsappMessage(message);
    formRef.current.reset();
    setFormData({
      name: "",
      date: "",
      time: "",
      place: "",
      people: "",
      tacos: "",
      flavors: [],
    });
  };

  return (
    <main className="flex flex-col justify-center items-center text-xl text-primary-dark font-medium">
      <h1 className="text-5xl font-bold text-secondary-dark my-8">
        Compártenos la información de tu evento
      </h1>
      <div className="grid grid-cols-2 items-center justify-items-center h-screen shadow-xl mb-8 overflow-hidden">
        <form className="grid grid-cols-2 gap-x-4 gap-y-10 p-8" ref={formRef}>
          <h2 className="text-4xl font-bold text-secondary-dark col-span-full self-center">
            {title}
          </h2>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-2xl" htmlFor="input-nombre">
                Nombre del solicitante
              </label>
              <input
                onChange={handleInputChange}
                id="input-nombre"
                name="name"
                value={formData.name}
                type="text"
                placeholder="Juán Pérez"
                className="py-2 px-6"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-2xl" htmlFor="input-fecha">
                Fecha del evento
              </label>
              <input
                onChange={handleInputChange}
                id="input-fecha"
                name="date"
                value={formData.date}
                type="date"
                className="py-2 px-6"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-2xl" htmlFor="input-hora">
                Hora del evento
              </label>
              <input
                onChange={handleInputChange}
                id="input-hora"
                name="time"
                value={formData.time}
                type="time"
                className="py-2 px-6"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-2xl" htmlFor="input-lugar">
                Lugar del evento
              </label>
              <input
                onChange={handleInputChange}
                id="input-lugar"
                name="place"
                value={formData.place}
                type="text"
                placeholder="Calle 48 #264..."
                className="py-2 px-6"
              />
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-2xl" htmlFor="input-personas">
                Cantidad de personas
              </label>
              <input
                onChange={handleInputChange}
                id="input-personas"
                name="people"
                value={formData.people}
                type="number"
                placeholder="60"
                className="py-2 px-6"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-2xl">Cantidad de tacos</label>
              {packageSelectedOptions.map((option, i) => (
                <div key={option.price} className="flex">
                  <input
                    onChange={handleInputChange}
                    id={`option-${i}`}
                    type="radio"
                    name="tacos"
                    value={option.tacos}
                    className="py-2 px-6"
                  />
                  <label htmlFor={`option-${i}`}>{option.tacos}</label>
                </div>
              ))}
              {/* <input
              onChange={handleInputChange} type="number" placeholder="100" className="py-2 px-6" /> */}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-2xl">Guisos a escoger</label>
              <ul className="flex flex-col gap-2">
                {[1, 2, 3, 4].map((el) => (
                  <MenuDropdownList
                    key={el}
                    name="flavors"
                    handleInputChange={handleInputChange}
                  />
                ))}
              </ul>
            </div>
          </div>
          <a
            href={`https://api.whatsapp.com/send?phone=529999943965&text=${whatsappMessage}`}
            onClick={handleSendInfo}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-br from-secondary-medium to-secondary-dark font-bold rounded-full py-2 px-10 text-white col-span-full text-2xl text-center"
          >
            Enviar
          </a>
        </form>
        <figure className="p-12 relative flex items-center justify-center justify-self-stretch self-stretch bg-gradient-to-br from-secondary-medium to-secondary-dark">
          <img
            className="aspect-[402/401] w-full z-10"
            src="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1682529858/tacos_de_canasta_ciel_chacon/IMG-20230419-WA0026_1_nskbmc-removebg-preview_copyrecorte_mihnvb.png"
            alt="Logo del negocio"
          />
          {/* <img
            className="aspect-[3628/5180]"
            src="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1682535610/tacos_de_canasta_ciel_chacon/Untitled-3_jict3p.png"
            alt="Collage de personas comiendo tacos de canasta"
          /> */}
        </figure>
      </div>
    </main>
  );
};

export default EventsForm;
