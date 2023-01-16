import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";

export function getData() {
  return [
    { title: "My Info", Image: pizzaImg,id:1 },
    { title: "Edit CV", Image: burgerImg,id:2 },
    { title: "Coca", Image: cocaImg ,id:3},
    { title: "Skills", Image: kebabImg,id:4 },
    { title: "Bio", Image: saladImg,id:5 },
    { title: "My Jobs", Image: waterImg,id:6 },
    { title: "Goto Website", Image: iceCreamImg,id:7 },
  ];
}
