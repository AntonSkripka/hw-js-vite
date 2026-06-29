import Handlebars from "handlebars";
import сardTemplate from "./template.hbs?raw";

export const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 1500,
    description: 'A high-performance laptop for all your needs.',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 700,
    description: 'A modern smartphone with an excellent camera.',
  },
  {
    id: 3,
    name: 'Headphones',
    price: 200,
    description: 'Noise-cancelling headphones for better focus.',
  },
];


const template = Handlebars.compile(сardTemplate);
console.log(template);
const markup = template(products);

const container = document.querySelector('#menu-container');    
container.innerHTML = markup;