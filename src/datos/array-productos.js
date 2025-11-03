// ...existing code...
const productos = [
  {
    id: 1,
    nombre: "Gafas de sol polarizadas L1003P",
    precio: 199.99,
    "descripción": "Gafas polarizadas con lente polar UV400, montura ligera de metal y diseño moderno unisex.",
    imagen: [
      "https://res.cloudinary.com/dvdz1osso/image/upload/f_auto,q_auto,w_auto,c_fill,g_auto,dpr_auto/Lacoste_L1003P_blanca_b1dmnx",
      "https://tapiastoreec.mitiendanube.com/productos/gafas-de-sol-polarizadas-p302/2",
      "https://tapiastoreec.mitiendanube.com/productos/gafas-de-sol-polarizadas-p302/3",
      "https://tapiastoreec.mitiendanube.com/productos/gafas-de-sol-polarizadas-p302/4",
      "https://tapiastoreec.mitiendanube.com/productos/gafas-de-sol-polarizadas-p302/5",
      "https://tapiastoreec.mitiendanube.com/productos/gafas-de-sol-polarizadas-p302/6"
    ],
    "categoría": "gafas polarizadas"
  },
  {
    id: 2,
    nombre: "Gafas de sol polarizadas P302",
    precio: 229.00,
    "descripción": "Lentes polarizadas con recubrimiento anti-reflejo, patillas con goma antideslizante.",
    imagen: [
      "https://res.cloudinary.com/dvdz1osso/image/upload/f_auto,q_auto,w_auto,c_fill,g_auto,dpr_auto/P302_6_b2xqjs",
      "/assets/img/navigator-polar/2.jpg",
      "/assets/img/navigator-polar/3.jpg",
      "/assets/img/navigator-polar/4.jpg",
      "/assets/img/navigator-polar/5.jpg",
      "/assets/img/navigator-polar/6.jpg"
    ],
    "categoría": "gafas polarizadas"
  },
  {
    id: 3,
    nombre: "Gafas de sol polarizadas P489",
    precio: 179.5,
    "descripción": "Estilo deportivo, ideal para actividades al aire libre. Lentes polarizadas y resistentes a golpes.",
    imagen: [
      "https://res.cloudinary.com/dvdz1osso/image/upload/f_auto,q_auto,w_auto,c_fill,g_auto,dpr_auto/P489_10_nys997",
      "/assets/img/ocean-shield/2.jpg",
      "/assets/img/ocean-shield/3.jpg",
      "/assets/img/ocean-shield/4.jpg",
      "/assets/img/ocean-shield/5.jpg",
      "/assets/img/ocean-shield/6.jpg"
    ],
    "categoría": "gafas polarizadas"
  },
  {
    id: 4,
    nombre: "Gafas de sol para niños ZKY ZKNIB8703",
    precio: 49.99,
    "descripción": "Gafas infantiles con marco flexible y protección UV, diseño colorido y seguro para niños.",
    imagen: [
      "https://res.cloudinary.com/dvdz1osso/image/upload/f_auto,q_auto,w_auto,c_fill,g_auto,dpr_auto/ZKY_ZKNIB8703_05_doxi0k",
      "/assets/img/kids-fun-blue/2.jpg",
      "/assets/img/kids-fun-blue/3.jpg",
      "/assets/img/kids-fun-blue/4.jpg",
      "/assets/img/kids-fun-blue/5.jpg",
      "/assets/img/kids-fun-blue/6.jpg"
    ],
    "categoría": "gafas infantiles"
  },
  {
    id: 5,
    nombre: "Gafas de sol para niños ZKY ZKNICV-10429",
    precio: 54.5,
    "descripción": "Gafas para niños con correas ajustables, lentes resistentes a impactos y acabado antirayado.",
    imagen: [
      "https://res.cloudinary.com/dvdz1osso/image/upload/f_auto,q_auto,w_auto,c_fill,g_auto,dpr_auto/ZKY_ZKNICV-10429_2_wt3aw9",
      "/assets/img/tiny-explorer/2.jpg",
      "/assets/img/tiny-explorer/3.jpg",
      "/assets/img/tiny-explorer/4.jpg",
      "/assets/img/tiny-explorer/5.jpg",
      "/assets/img/tiny-explorer/6.jpg"
    ],
    "categoría": "gafas infantiles"
  },
  {
    id: 6,
    nombre: "Gafas de sol para niños ZKY ZKNID8806",
    precio: 39.99,
    "descripción": "Modelo deportivo infantil con patillas suaves y puente nasal acolchado para mayor comodidad.",
    imagen: [
      "https://res.cloudinary.com/dvdz1osso/image/upload/f_auto,q_auto,w_auto,c_fill,g_auto,dpr_auto/ZKY_ZKNID8806_9_lm6fkz",
      "/assets/img/mini-racer/2.jpg",
      "/assets/img/mini-racer/3.jpg",
      "/assets/img/mini-racer/4.jpg",
      "/assets/img/mini-racer/5.jpg",
      "/assets/img/mini-racer/6.jpg"
    ],
    "categoría": "gafas infantiles"
  },
  {
    id: 7,
    nombre: "PPT3002",
    precio: 129.0,
    "descripción": "Gafas para dama con montura elegante, lentes con protección UV y acabado brillante.",
    imagen: [
      "https://res.cloudinary.com/dvdz1osso/image/upload/f_auto,q_auto,w_auto,c_fill,g_auto,dpr_auto/PPT3002_2_lohnpp",
      "/assets/img/elegance-rosa/2.jpg",
      "/assets/img/elegance-rosa/3.jpg",
      "/assets/img/elegance-rosa/4.jpg",
      "/assets/img/elegance-rosa/5.jpg",
      "/assets/img/elegance-rosa/6.jpg"
    ],
    "categoría": "gafas para dama"
  },
  {
    id: 8,
    nombre: "Cartier 12",
    precio: 149.99,
    "descripción": "Diseño clásico femenino con detalles en plaqué y lentes con filtros de alto contraste.",
    imagen: [
      "https://res.cloudinary.com/dvdz1osso/image/upload/f_auto,q_auto,w_auto,c_fill,g_auto,dpr_auto/Cartier_12_5_mkjdhn",
      "/assets/img/luna-classic/2.jpg",
      "/assets/img/luna-classic/3.jpg",
      "/assets/img/luna-classic/4.jpg",
      "/assets/img/luna-classic/5.jpg",
      "/assets/img/luna-classic/6.jpg"
    ],
    "categoría": "Gafas sin montura"
  },
  {
    id: 9,
    nombre: "PPT3001",
    precio: 159.5,
    "descripción": "Marco ultraligero para uso diario, lentes con protección UV y diseño sofisticado femenino.",
    imagen: [
      "https://res.cloudinary.com/dvdz1osso/image/upload/f_auto,q_auto,w_auto,c_fill,g_auto,dpr_auto/PPT3001_1_ixflz6",
      "/assets/img/silk-vision/2.jpg",
      "/assets/img/silk-vision/3.jpg",
      "/assets/img/silk-vision/4.jpg",
      "/assets/img/silk-vision/5.jpg",
      "/assets/img/silk-vision/6.jpg"
    ],
    "categoría": "gafas para dama"
  }
];




export default productos;
// ...existing code...