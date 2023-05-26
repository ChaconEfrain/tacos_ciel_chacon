import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { MAX_FLAVORS_AMOUNT, MIN_FLAVORS_AMOUNT, PACKAGES } from "@/constants";

const useEventForm = () => {
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

  return {
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
  };
};

export default useEventForm;
