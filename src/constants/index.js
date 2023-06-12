import { Couple, Facebook, Family, Instagram, Person, WhatsApp } from "@/icons";

export const MAX_FLAVORS_AMOUNT = 6;

export const MIN_FLAVORS_AMOUNT = 4;

export const ADMIN_EMAIL = "cielmchacong97@gmail.com";

export const NAV_MENU = [
  {
    label: "Promociones",
    pointsTo: "#promociones",
    icon: null,
  },
  {
    label: "Eventos",
    pointsTo: "#eventos",
    icon: null,
  },
  {
    label: "WhatsApp",
    pointsTo: "https://api.whatsapp.com/send?phone=529992787091",
    icon: <WhatsApp className="w-8 h-8" />,
  },
  {
    label: "Facebook",
    pointsTo: "https://www.facebook.com/profile.php?id=100085831440625",
    icon: <Facebook className="w-8 h-8" />,
  },
  {
    label: "Instagram",
    pointsTo: "https://www.instagram.com/lacanastayucateca/",
    icon: <Instagram className="w-8 h-8" />,
  },
];

export const PROMOTIONS = [
  {
    title: "Personal",
    description:
      "Si buscas algo rápido, con buen sabor y a un excelente precio, la promoción personal es ideal para ti!",
    tacos: "4 tacos",
    drinks: "1 bebida",
    price: "$58",
    icon: <Person />,
  },
  {
    title: "Pareja",
    description:
      "El paquete perfecto para compartir con tu amigo/a, pareja ó con quien tú quieras!",
    tacos: "8 tacos",
    drinks: "2 bebidas",
    price: "$114",
    icon: <Couple />,
  },
  {
    title: "Familiar",
    description:
      "¿No sabes qué cocinar para tu familia? Con la promoción familiar todos quedan satisfechos, hasta tu bolsillo!",
    tacos: "20 tacos",
    drinks: "4 bebidas",
    price: "$226",
    icon: <Family />,
  },
];

export const PACKAGES = [
  {
    title: "Pa' el antojo",
    groupSize: "10 personas",
    options: [
      {
        tacos: "40 tacos",
        tacosForEach: "4 tacos por persona",
        price: {
          withService: "$480",
          withoutService: "$480",
        },
      },
      {
        tacos: "50 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$600",
          withoutService: "$600",
        },
      },
      {
        tacos: "60 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$720",
          withoutService: "$720",
        },
      },
    ],
  },
  {
    title: "Pa' que pruebes",
    groupSize: "20 personas",
    options: [
      {
        tacos: "80 tacos",
        tacosForEach: "4 tacos por persona",
        price: {
          withService: "$1,360",
          withoutService: "$960",
        },
      },
      {
        tacos: "100 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$1,600",
          withoutService: "$1,200",
        },
      },
      {
        tacos: "120 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$1,840",
          withoutService: "$1,440",
        },
      },
    ],
  },
  {
    title: "Pa' tu reunión",
    groupSize: "30 personas",
    options: [
      {
        tacos: "120 tacos",
        tacosForEach: "4 tacos por persona",
        price: {
          withService: "$1,840",
          withoutService: "$1,440",
        },
      },
      {
        tacos: "150 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$2,050",
          withoutService: "$1,800",
        },
      },
      {
        tacos: "180 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$2,380",
          withoutService: "$2,160",
        },
      },
    ],
  },
  {
    title: "Pa' que convivas",
    groupSize: "40 personas",
    options: [
      {
        tacos: "160 tacos",
        tacosForEach: "4 tacos por persona",
        price: {
          withService: "$2,160",
          withoutService: "$1,920",
        },
      },
      {
        tacos: "200 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$2,600",
          withoutService: "$2,400",
        },
      },
      {
        tacos: "240 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$3,040",
          withoutService: "$2,880",
        },
      },
    ],
  },
  {
    title: "Pa' que festejes",
    groupSize: "50 personas",
    options: [
      {
        tacos: "200 tacos",
        tacosForEach: "4 tacos por persona",
        price: {
          withService: "$2,600",
          withoutService: "$2,400",
        },
      },
      {
        tacos: "250 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$3,250",
          withoutService: "$3,000",
        },
      },
      {
        tacos: "300 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$3,400",
          withoutService: "$3,150",
        },
      },
    ],
  },
  {
    title: "Pa' que te enfiestes",
    groupSize: "60 personas",
    options: [
      {
        tacos: "240 tacos",
        tacosForEach: "4 tacos por persona",
        price: {
          withService: "$2,800",
          withoutService: "$2,640",
        },
      },
      {
        tacos: "300 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$3,400",
          withoutService: "$3,150",
        },
      },
      {
        tacos: "360 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$4,000",
          withoutService: "$3,600",
        },
      },
    ],
  },
  {
    title: "Pa' que disfrutes",
    groupSize: "70 personas",
    options: [
      {
        tacos: "280 tacos",
        tacosForEach: "4 tacos por persona",
        price: {
          withService: "$3,200",
          withoutService: "$2,800",
        },
      },
      {
        tacos: "350 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$3,900",
          withoutService: "$3,500",
        },
      },
      {
        tacos: "420 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$4,600",
          withoutService: "$4,200",
        },
      },
    ],
  },
  {
    title: "Pa' que te llenes",
    groupSize: "80 personas",
    options: [
      {
        tacos: "320 tacos",
        tacosForEach: "4 tacos por persona",
        price: {
          withService: "$3,600",
          withoutService: "$3,200",
        },
      },
      {
        tacos: "400 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$4,400",
          withoutService: "$4,000",
        },
      },
      {
        tacos: "480 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$5,200",
          withoutService: "$4,800",
        },
      },
    ],
  },
  {
    title: "Pa' que te alcance",
    groupSize: "90 personas",
    options: [
      {
        tacos: "360 tacos",
        tacosForEach: "4 tacos por persona",
        price: {
          withService: "$4,000",
          withoutService: "$3,600",
        },
      },
      {
        tacos: "450 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$4,900",
          withoutService: "$4,500",
        },
      },
      {
        tacos: "540 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$5,800",
          withoutService: "$5,400",
        },
      },
    ],
  },
  {
    title: "Pa' que te pidan",
    groupSize: "100 personas",
    options: [
      {
        tacos: "400 tacos",
        tacosForEach: "4 tacos por persona",
        price: {
          withService: "$4,400",
          withoutService: "$4,000",
        },
      },
      {
        tacos: "500 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$5,400",
          withoutService: "$5,000",
        },
      },
      {
        tacos: "600 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$6,400",
          withoutService: "$6,000",
        },
      },
    ],
  },
];

export const MENU = [
  "Chicharrón prensado",
  "Papa con longaniza",
  "Frijoles con queso",
  "Frijoles con queso y longaniza",
  "Pollo en mole poblano",
  "Pollo en mole almendrado",
  "Pollo en mole verde",
  "Pollo en rajas poblanas",
  "Pollo a la leña",
  "Tinga de pollo",
  "Papa con chuleta ahumada",
  "Papa con queso y mantequilla",
  "Papa con tocino",
  "Chicharrón en salsa verde",
  "Chicharrón en salsa roja",
  "Carne molida",
  "Huevo con longaniza",
  "Pastor",
  "Milanesa al adobo",
  "Milanesa al ajo",
  "Milanesa a la leña",
  "Milanesa a la yucateca",
  "Puntas de filete a las finas hierbas",
];

export const TRADUCTIONS = {
  name: "Nombre",
  date: "Fecha",
  time: "Hora",
  place: "Lugar",
  people: "Personas",
  tacos: "Tacos",
  flavors: "Guisos",
};

export const COMPLEMENTS = [
  "Cebolla asada con chile guajillo",
  "Cebolla asada con sal y pimienta",
  "Cebolla con cilantro",
  "Rajas de jalapeño",
  "Salsa verde casera (no picante)",
  "Salsa roja casera (picante)",
  "Servilletas",
  "Platos desechables",
];

export const INITIAL_EVENT_ERRORS = {
  name: "El nombre es requerido",
  date: "Una fecha es requerida",
  time: "Una hora es requerida",
  place: "Un lugar es requerido",
  people: "La cantidad de personas es requerida",
  tacos: "La cantidad de tacos es requerida",
  flavors: "Mínimo cuatro guisos es requerido",
};

export const INITIAL_EVENT_DATA = {
  name: "",
  date: "",
  time: "",
  place: "",
  people: "",
  tacos: "",
  flavors: new Array(MAX_FLAVORS_AMOUNT),
};

export const INITIAL_CHAROLA_ERRORS = {
  name: "El nombre es requerido",
  date: "Una fecha es requerida",
  people: "La cantidad de personas es requerida",
  tacos: "La cantidad de tacos es requerida",
  flavors: "Mínimo cuatro guisos es requerido",
};

export const INITIAL_CHAROLA_DATA = {
  name: "",
  date: "",
  people: "",
  tacos: "",
  flavors: new Array(MAX_FLAVORS_AMOUNT),
};
