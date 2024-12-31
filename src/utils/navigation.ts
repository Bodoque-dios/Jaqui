
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/productos" },
  { name: "Muebles a pedido", url: "/muebles-a-pedido" },
  /*{ name: "Blog", url: "/blog" },*/
  { name: "Contacto", url: "/contacto" },
];

const footerLinks = [
  {
    section: "Tienda",
    links: [
      { name: "Productos", url: "/productos" },
     // { name: "Comedores", url: "/products" },
     // { name: "Oficina", url: "/services" },
    ],
  },
  {
    section: "Nosotros",
    links: [
      { name: "Sobre nosotros", url: "/nosotros" },
//      { name: "Opiniones", url: "#" },
    ],
  },
  {
    section:"Ayuda",
    links:[
      {name:"Preguntas frecuentes", url:"/preguntas-frecuentes"},
      //{name:"Envios y devoluciones", url:"/envios"},
      //{name:"Consejos para el cuidado de muebles", url:"/cuidados"},
      {name:"Contáctanos", url:"/contacto"},
    ]
  }
];

const socialLinks = {
  facebook: "#",
  x: "#",
  //github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};