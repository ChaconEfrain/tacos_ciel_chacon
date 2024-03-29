import Link from "next/link";
import useEventForm from "@/hooks/useEventForm";
import MenuDropdownList from "@/components/MenuDropdownList";
import EventDataConfirmation from "@/components/EventDataConfirmation";
import { INITIAL_EVENT_DATA, INITIAL_EVENT_ERRORS } from "@/constants";

const EventsForm = () => {
  const {
    handleSubmit,
    handleInputChange,
    showConfirmationModal,
    setShowConfirmationModal,
    showErrors,
    error,
    title,
    formRef,
    tacosForEachPerson,
    formData,
    setFormData,
    setError,
    packageSelectedOptions,
  } = useEventForm(INITIAL_EVENT_ERRORS, INITIAL_EVENT_DATA);
  return (
    <main className="flex flex-col justify-center items-center sm:text-xl text-lg text-primary-dark font-medium relative h-screen">
      <h1 className="sm:text-5xl text-4xl font-bold text-secondary-dark my-8 sm:text-center mx-4">
        Compártenos la información de tu evento
      </h1>
      <div className="grid xl:grid-cols-2 max-w-7xl items-center justify-items-center shadow-xl mb-8 rounded-xl overflow-scroll animate-fade-right animate-once animate-duration-1000 animate-ease-linear">
        <form
          className="grid sm:grid-cols-2 gap-x-4 gap-y-10 p-8"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <header className="col-span-full flex flex-col gap-2 justify-self-start items-start">
            <Link href="/#eventos">&larr; Volver</Link>
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
                    className="py-2 px-6 focus:shadow-[0_0_0_2px_#ff7588] accent-secondary-medium"
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
        initialData={INITIAL_EVENT_DATA}
        initialError={INITIAL_EVENT_ERRORS}
      />
    </main>
  );
};

export default EventsForm;
