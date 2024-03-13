import { Facebook, Family, Instagram, Person, WhatsApp } from "@/icons";

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
    price: "$62",
    icon: <Person />,
  },
  // {
  //   title: "Pareja",
  //   description:
  //     "El paquete perfecto para compartir con tu amigo/a, pareja ó con quien tú quieras!",
  //   tacos: "8 tacos",
  //   drinks: "2 bebidas",
  //   price: "$114",
  //   icon: <Couple />,
  // },
  {
    title: "Familiar",
    description:
      "¿No sabes qué cocinar para tu familia? Con la promoción familiar todos quedan satisfechos, hasta tu bolsillo!",
    tacos: "20 tacos",
    drinks: "4 bebidas",
    price: "$296",
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
          withoutService: "$600",
        },
      },
      {
        tacos: "50 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$600",
          withoutService: "$750",
        },
      },
      {
        tacos: "60 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$720",
          withoutService: "$900",
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
          withoutService: "$1,200",
          forChristmas: "$2,020",
        },
      },
      {
        tacos: "100 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$1,700",
          withoutService: "$1,500",
          forChristmas: "$2,260",
        },
      },
      {
        tacos: "120 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$2,040",
          withoutService: "$1,800",
          forChristmas: "$2,500",
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
          withService: "$2,040",
          withoutService: "$1,800",
          forChristmas: "$2,500",
        },
      },
      {
        tacos: "150 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$2,550",
          withoutService: "$2,250",
          forChristmas: "$2,760",
        },
      },
      {
        tacos: "180 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$3,060",
          withoutService: "$2,700",
          forChristmas: "$3,180",
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
          withService: "$2,720",
          withoutService: "$2,400",
          forChristmas: "$2,900",
        },
      },
      {
        tacos: "200 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$3,400",
          withoutService: "$3,000",
          forChristmas: "$3,460",
        },
      },
      {
        tacos: "240 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$4,080",
          withoutService: "$3,600",
          forChristmas: "$4,020",
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
          withService: "$3,400",
          withoutService: "$3,000",
          forChristmas: "$3,460",
        },
      },
      {
        tacos: "250 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$4,250",
          withoutService: "$3,750",
          forChristmas: "$4,160",
        },
      },
      {
        tacos: "300 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$5,100",
          withoutService: "$4,500",
          forChristmas: "$4,860",
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
          withService: "$3,360",
          withoutService: "$3,600",
          forChristmas: "$4,020",
        },
      },
      {
        tacos: "300 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$4,200",
          withoutService: "$4,500",
          forChristmas: "$4,860",
        },
      },
      {
        tacos: "360 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$5,040",
          withoutService: "$5,400",
          forChristmas: "$5,700",
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
          withService: "$3,920",
          withoutService: "$4,200",
          forChristmas: "$4,680",
        },
      },
      {
        tacos: "350 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$4,900",
          withoutService: "$5,250",
          forChristmas: "$5,560",
        },
      },
      {
        tacos: "420 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$5,880",
          withoutService: "$6,300",
          forChristmas: "$6,540",
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
          withService: "$5,440",
          withoutService: "$4,800",
          forChristmas: "$5,140",
        },
      },
      {
        tacos: "400 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$6,800",
          withoutService: "$6,000",
          forChristmas: "$6,260",
        },
      },
      {
        tacos: "480 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$8,160",
          withoutService: "$7,200",
          forChristmas: "$7,380",
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
          withService: "$6,120",
          withoutService: "$5,400",
          forChristmas: "$5,700",
        },
      },
      {
        tacos: "450 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$7,650",
          withoutService: "$6,750",
          forChristmas: "$6,960",
        },
      },
      {
        tacos: "540 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$9,180",
          withoutService: "$8,100",
          forChristmas: "$8,220",
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
          withService: "$6,800",
          withoutService: "$6,000",
          forChristmas: "$6,260",
        },
      },
      {
        tacos: "500 tacos",
        tacosForEach: "5 tacos por persona",
        price: {
          withService: "$8,500",
          withoutService: "$7,500",
          forChristmas: "$7,660",
        },
      },
      {
        tacos: "600 tacos",
        tacosForEach: "6 tacos por persona",
        price: {
          withService: "$10,200",
          withoutService: "$9,000",
          forChristmas: "$9,060",
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

export const WINE_OPTIONS = [
  {
    name: "Vino tinto",
    options: [
      "Beronia Crianza Rioja 2019 (Tempranillo)",
      "Chateau Domecq 2018 (Cabernet sauvignon)",
      "Reservado concha y toro (Shiraz)",
      "Don Luis Cetto 2019 (Merlot)",
    ],
  },
  {
    name: "Vino blanco",
    options: [
      "Finca las moras (Sauvignon blanc)",
      "Fumé blanc La cetto (Sauvignon blanc)",
      "Domecq XA (Blend)",
    ],
  },
  {
    name: "Vino rosa",
    options: [
      "Casillero del diablo Belight concha y toro (Rosé)",
      "Woodbridge white zinfandel (Zinfandel)",
      "Viña maipo classic series (Rosé)",
      "Chemin de sables 2022 (Blend)",
    ],
  },
  {
    name: "Vino espumoso",
    options: [
      "Casillero del diablo devils brut concha y toro (Brut, blanco)",
      "Riunite (Blanco, sauvignon blanc, pinot blanc)",
      "Fogoso gold (Blend)",
      "Riccadonna prosecco (Blanco, blend)",
    ],
  },
];

export const VEGGIE_OPTIONS = [
  "Brócoli con queso y mantequilla",
  "Coliflor con queso y mantequilla",
  "Calabaza italiana con queso y mantequila",
  "Rajas con crema",
  "Champiñones con queso y mantequilla",
  "Papa",
  "Frijol",
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

export const VALID_DAYS = ["Tue", "Wed", "Thu", "Fri", "Sat"];
