import { Couple, Family, Person } from "@/icons";

export const PROMOTIONS = [
  {
    title: "Personal",
    description:
      "Si buscas algo rápido, con buen sabor y a un excelente precio, la promoción personal es ideal para ti!",
    tacos: "4 tacos",
    drinks: "1 refresco",
    price: "$55",
    icon: <Person />,
  },
  {
    title: "Pareja",
    description:
      "El paquete perfecto para compartir con tu amigo/a, pareja ó con quien tú quieras!",
    tacos: "8 tacos",
    drinks: "2 refrescos",
    price: "$105",
    icon: <Couple />,
  },
  {
    title: "Familiar",
    description:
      "¿No sabes qué cocinar para tu familia? Con la promoción familiar todos quedan satisfechos, hasta tu bolsillo!",
    tacos: "20 tacos",
    drinks: "4 refrescos",
    price: "$205",
    icon: <Family />,
  },
];

export const PACKAGES = [
  {
    title: "Pa que pruebes",
    groupSize: "20 personas",
    options: [
      {
        tacos: "80 tacos",
        tacosForEach: "4 tacos por persona",
        price: "$960",
      },
      {
        tacos: "100 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$1,200",
      },
      {
        tacos: "120 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$1,440",
      },
    ],
  },
  {
    title: "Pa tu reunión",
    groupSize: "30 personas",
    options: [
      {
        tacos: "120 tacos",
        tacosForEach: "4 tacos por persona",
        price: "$1,440",
      },
      {
        tacos: "150 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$1,650",
      },
      {
        tacos: "180 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$1,980",
      },
    ],
  },
  {
    title: "Pa que convivas",
    groupSize: "40 personas",
    options: [
      {
        tacos: "160 tacos",
        tacosForEach: "4 tacos por persona",
        price: "$1,760",
      },
      {
        tacos: "200 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$2,200",
      },
      {
        tacos: "240 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$2,640",
      },
    ],
  },
  {
    title: "Pa que festejes",
    groupSize: "50 personas",
    options: [
      {
        tacos: "200 tacos",
        tacosForEach: "4 tacos por persona",
        price: "$2,200",
      },
      {
        tacos: "250 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$2,500",
      },
      {
        tacos: "300 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$3,000",
      },
    ],
  },
  {
    title: "Pa que te enfiestes",
    groupSize: "60 personas",
    options: [
      {
        tacos: "240 tacos",
        tacosForEach: "4 tacos por persona",
        price: "$2,400",
      },
      {
        tacos: "300 tacos",
        tacosForEach: "5 tacos por persona",
        price: "$3,000",
      },
      {
        tacos: "360 tacos",
        tacosForEach: "6 tacos por persona",
        price: "$3,600",
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
