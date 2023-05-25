import { Couple, Facebook, Family, Instagram, Person, WhatsApp } from "@/icons";

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
        price: "$480",
      },
      {
        tacos: "50 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$600",
      },
      {
        tacos: "60 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$720",
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
        price: "$1,360",
      },
      {
        tacos: "100 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$1,600",
      },
      {
        tacos: "120 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$1,840",
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
        price: "$1,840",
      },
      {
        tacos: "150 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$2,050",
      },
      {
        tacos: "180 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$2,380",
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
        price: "$2,160",
      },
      {
        tacos: "200 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$2,600",
      },
      {
        tacos: "240 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$3,040",
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
        price: "$2,600",
      },
      {
        tacos: "250 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$2,900",
      },
      {
        tacos: "300 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$3,400",
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
        price: "$2,800",
      },
      {
        tacos: "300 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$3,400",
      },
      {
        tacos: "360 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$4,000",
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
        price: "$3,200",
      },
      {
        tacos: "350 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$3,900",
      },
      {
        tacos: "420 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$4,600",
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
        price: "$3,600",
      },
      {
        tacos: "400 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$4,400",
      },
      {
        tacos: "480 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$5,200",
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
        price: "$4,000",
      },
      {
        tacos: "450 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$4,900",
      },
      {
        tacos: "540 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$5,800",
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
        price: "$4,400",
      },
      {
        tacos: "500 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$5,400",
      },
      {
        tacos: "600 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$6,400",
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

export const MAX_FLAVORS_AMOUNT = 6;

export const MIN_FLAVORS_AMOUNT = 4;
