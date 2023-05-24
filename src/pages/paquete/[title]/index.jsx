import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import MenuDropdownList from "@/components/MenuDropdownList";
import { MAX_FLAVORS_AMOUNT, MIN_FLAVORS_AMOUNT, PACKAGES } from "@/constants";
import EventDataConfirmation from "@/components/EventDataConfirmation";
import Link from "next/link";

const EventsForm = () => {
  const router = useRouter();
  const formRef = useRef(null);
  const [packageSelectedOptions, setPackageSelectedOptions] = useState([]);
  const [tacosForEachPerson, setTacosForEachPerson] =
    useState(MIN_FLAVORS_AMOUNT);
  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    place: "",
    people: "",
    tacos: "",
    flavors: new Array(MAX_FLAVORS_AMOUNT),
  });
  const [error, setError] = useState({
    name: "El nombre es requerido",
    date: "Una fecha es requerida",
    time: "Una hora es requerida",
    place: "Un lugar es requerido",
    people: "La cantidad de personas es requerida",
    tacos: "La cantidad de tacos es requerida",
    flavors: "Mínimo cuatro guisos es requerido",
  });
  const [showErrors, setShowErrors] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      const { title } = router.query;
      document.title = `Paquete ${title}`;
      const options = PACKAGES.find(
        (packageEl) => packageEl.title === title
      ).options;
      setTitle(title);
      setPackageSelectedOptions(options);
      // formRef.current.style.transform = "translateX(0)";
    }
  }, [router.isReady]);

  const validateFormData = (data) => {
    const newError = { ...error };
    //name validation
    if (data.name.length > 0) newError["name"] = "";
    if (data.name.length === 0) newError["name"] = "El nombre es requerido";
    //date validation
    if (data.date.length > 0) newError["date"] = "";
    if (data.date.length === 0) newError["date"] = "La fecha es requerida";
    //time validation
    if (data.time.length > 0) newError["time"] = "";
    if (data.time.length === 0) newError["time"] = "Una hora es requerida";
    //place validation
    if (data.place.length > 0) newError["place"] = "";
    if (data.place.length === 0) newError["place"] = "Un lugar es requerido";
    //people validation
    if (data.people.length > 0) newError["people"] = "";
    if (data.people.length === 0)
      newError["people"] = "La cantidad de personas es requerida";
    if (data.people === "0")
      newError["people"] = "La cantidad de personas debe ser mayor a cero";
    //tacos validation
    if (data.tacos.length > 0) newError["tacos"] = "";
    if (data.tacos.length === 0)
      newError["tacos"] = "La cantidad de tacos es requerida";
    //flavors validation
    if (
      data.flavors.filter((el) => typeof el !== "undefined").length >=
      MIN_FLAVORS_AMOUNT
    )
      newError["flavors"] = "";
    if (
      data.flavors.filter((el) => typeof el !== "undefined").length <
      MIN_FLAVORS_AMOUNT
    )
      newError["flavors"] = "Mínimo cuatro guisos es requerido";

    setError(newError);
  };

  const handleInputChange = (e) => {
    const { name, value, dataset } = e.target;
    const { position } = dataset;
    const newFormData = { ...formData };
    const dealingWithFlavors = name === "flavors";
    const dealingWithTacos = name === "tacos";
    if (dealingWithTacos) {
      const [amountOfFlavors] = packageSelectedOptions
        .find((option) => option.tacos === value)
        .tacosForEach.split(" ");
      setTacosForEachPerson(Number(amountOfFlavors));
      newFormData[name] = value;
    } else if (dealingWithFlavors) {
      const newFlavors =
        value === "default"
          ? newFormData[name].toSpliced(position, 1, undefined)
          : newFormData[name].toSpliced(position, 1, value);
      newFormData[name] = newFlavors;
    } else newFormData[name] = value;
    setFormData(newFormData);
    validateFormData(newFormData);
    if (showErrors) setShowErrors(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const anyErrors = Object.values(error).some((value) => value.length > 0);
    if (anyErrors) {
      setShowErrors(true);
      return;
    }
    setShowConfirmationModal(true);
  };

  return (
    <main className="flex flex-col justify-center items-center sm:text-xl text-lg text-primary-dark font-medium relative">
      <h1 className="sm:text-5xl text-4xl font-bold text-secondary-dark my-8 sm:text-center mx-4">
        Compártenos la información de tu evento
      </h1>
      <div className="grid xl:grid-cols-2 max-w-7xl items-center justify-items-center shadow-xl mb-8 rounded-xl overflow-hidden animate-fade-right animate-once animate-duration-1000 animate-ease-linear">
        <form
          className="grid sm:grid-cols-2 gap-x-4 gap-y-10 p-8"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <header className="col-span-full flex flex-col gap-2 justify-self-start items-start">
            <Link href="/">&larr; Volver</Link>
            <h2 className="sm:text-4xl text-3xl font-bold text-secondary-dark col-span-full self-center">
              {title}
            </h2>
          </header>
          <fieldset className="flex flex-col sm:gap-12 gap-4">
            <div className="flex flex-col gap-2">
              <label
                className="font-bold sm:text-2xl text-xl"
                htmlFor="input-nombre"
              >
                Nombre del solicitante
              </label>
              {error.name.length > 0 && showErrors && (
                <p className="text-red-500 text-lg">{error.name}</p>
              )}
              <input
                onChange={handleInputChange}
                id="input-nombre"
                name="name"
                value={formData.name}
                type="text"
                placeholder="Juán Pérez"
                className="py-2 px-6 focus:shadow-[0_0_0_2px_#ff7588]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="font-bold sm:text-2xl text-xl"
                htmlFor="input-fecha"
              >
                Fecha del evento
              </label>
              {error.date.length > 0 && showErrors && (
                <p className="text-red-500 text-lg">{error.date}</p>
              )}
              <input
                onChange={handleInputChange}
                id="input-fecha"
                name="date"
                value={formData.date}
                type="date"
                className="py-2 px-6 focus:shadow-[0_0_0_2px_#ff7588]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="font-bold sm:text-2xl text-xl"
                htmlFor="input-hora"
              >
                Hora del evento
              </label>
              {error.time.length > 0 && showErrors && (
                <p className="text-red-500 text-lg">{error.time}</p>
              )}
              <input
                onChange={handleInputChange}
                id="input-hora"
                name="time"
                value={formData.time}
                type="time"
                className="py-2 px-6 focus:shadow-[0_0_0_2px_#ff7588]"
              />
            </div>
          </fieldset>
          <fieldset className="flex flex-col sm:gap-12 gap-4">
            <div className="flex flex-col gap-2">
              <label
                className="font-bold sm:text-2xl text-xl"
                htmlFor="input-lugar"
              >
                Lugar del evento
              </label>
              {error.place.length > 0 && showErrors && (
                <p className="text-red-500 text-lg">{error.place}</p>
              )}
              <input
                onChange={handleInputChange}
                id="input-lugar"
                name="place"
                value={formData.place}
                type="text"
                placeholder="Calle 48 #264..."
                className="py-2 px-6 focus:shadow-[0_0_0_2px_#ff7588]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="font-bold sm:text-2xl text-xl"
                htmlFor="input-personas"
              >
                Cantidad de personas
              </label>
              {error.people.length > 0 && showErrors && (
                <p className="text-red-500 text-lg">{error.people}</p>
              )}
              <input
                onChange={handleInputChange}
                id="input-personas"
                name="people"
                value={formData.people}
                type="number"
                min={0}
                placeholder="60"
                className="py-2 px-6 focus:shadow-[0_0_0_2px_#ff7588]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold sm:text-2xl text-xl">
                Cantidad de tacos
              </label>
              {error.tacos.length > 0 && showErrors && (
                <p className="text-red-500 text-lg">{error.tacos}</p>
              )}
              {packageSelectedOptions.map((option, i) => (
                <div key={option.price} className="flex gap-2 items-center">
                  <input
                    onChange={handleInputChange}
                    id={`option-${i}`}
                    type="radio"
                    name="tacos"
                    value={option.tacos}
                    className="py-2 px-6 focus:shadow-[0_0_0_2px_#ff7588]"
                  />
                  <label htmlFor={`option-${i}`}>{option.tacos}</label>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset className="flex flex-col gap-2 col-span-full">
            <label className="font-bold sm:text-2xl text-xl">
              Elige mínimo 4 guisos
            </label>
            {error.flavors.length > 0 && showErrors && (
              <p className="text-red-500 text-lg">{error.flavors}</p>
            )}
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
              {Array(tacosForEachPerson)
                .fill(undefined)
                .map((el, i) => (
                  <MenuDropdownList
                    key={i}
                    name="flavors"
                    position={i}
                    selectedFlavors={formData.flavors}
                    handleInputChange={handleInputChange}
                  />
                ))}
            </ul>
          </fieldset>
          <button className="bg-gradient-to-br from-secondary-medium to-secondary-dark font-bold rounded-full py-2 px-10 text-white col-span-full sm:text-2xl text-xl">
            Confirmar
          </button>
        </form>
        <figure className="p-12 relative items-center justify-center justify-self-stretch self-stretch bg-gradient-to-br from-secondary-medium to-secondary-dark xl:flex hidden">
          <img
            className="aspect-[402/401] w-full z-10 animate-rotate-y animate-once animate-duration-1000 animate-delay-500"
            src="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1682529858/tacos_de_canasta_ciel_chacon/IMG-20230419-WA0026_1_nskbmc-removebg-preview_copyrecorte_mihnvb.png"
            alt="Logo del negocio"
          />
        </figure>
      </div>
      <EventDataConfirmation
        title={title}
        eventData={formData}
        setFormData={setFormData}
        setError={setError}
        showModal={setShowConfirmationModal}
        isShowing={showConfirmationModal}
        form={formRef}
      />
    </main>
  );
};

export default EventsForm;
